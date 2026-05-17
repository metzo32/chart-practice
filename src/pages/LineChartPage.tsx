import { useState } from 'react'

import { LineInputs } from '@/components/LineChart/LineInputs'
import { DateRangeButtons } from '@/components/LineChart/DateRangeButtons'
import { LineCategoryButtons } from '@/components/LineChart/LineCategoryButtons'
import { LineChartGraph } from '@/components/LineChart/LineChartGraph'

import { Wrapper } from '@/components/common/Containters'
import { H2 } from '@/components/common/Headers'

import { samsungData, skHynixData, type StockDataPoint } from '@/data/mockData'
import type { Range, Stock } from '@/types/LineChartPageType'

const DATE_TO_SLICE_COUNT: Record<Range, number> = {
  "1W": 7,
  "1M": 30,
  "3M": 90,
}

export default function LineChartPage() {
  const [samsungChartData, setSamsungChartData] = useState<StockDataPoint[]>(samsungData)
  const [hynixChartData, setHynixChartData] = useState<StockDataPoint[]>(skHynixData)
  const [rangeType, setRangeType] = useState<Range | null>(null)

  const [data, setData] = useState<Stock>("SAMSUNG")

  const sliceCount =
    rangeType ? DATE_TO_SLICE_COUNT[rangeType] : Infinity;

  const filteredData =
    data === "HYNIX"
      ? [...hynixChartData].sort((a, b) => a.date.localeCompare(b.date)).slice(-sliceCount)
      : [...samsungChartData].sort((a, b) => a.date.localeCompare(b.date)).slice(-sliceCount)


  const handleShowSamsungData = () => {
    setData("SAMSUNG");
  }

  const handleShowHynixData = () => {
    setData("HYNIX");
  }

  const handleAddPoint = (point: StockDataPoint) => {
    if (data === "SAMSUNG") {
      setSamsungChartData([...samsungChartData, point])
    } else {
      setHynixChartData([...hynixChartData, point])
    }
  }

  return (
    <Wrapper>
      <H2>Line Chart</H2>

      {/* 인풋 */}
      <LineInputs
        addData={handleAddPoint}
      />

      {/* 기간 버튼 */}
      <DateRangeButtons
        activeRange={rangeType}
        setActiveRange={setRangeType}
      />

      {/* 종목 버튼 */}
      <LineCategoryButtons
        data={data}
        showSamsungData={handleShowSamsungData}
        showHynixData={handleShowHynixData}
      />

      {/* 그래프 */}
      <LineChartGraph
        data={filteredData}
      />
    </Wrapper>
  )
}
