import { monthlyProfitData } from '@/data/mockData'
import { Wrapper } from '@/components/common/Containters'
import { H2 } from '@/components/common/Headers'
import CardWithSum from '@/components/BarChart/CardWithSum'
import BarChartGraph from '@/components/BarChart/BarChartGraph'

export default function BarChartPage() {
  return (
    <Wrapper>
      <H2>Bar Chart</H2>
      <CardWithSum data={monthlyProfitData} />
      <BarChartGraph data={monthlyProfitData} />
    </Wrapper>
  )
}

