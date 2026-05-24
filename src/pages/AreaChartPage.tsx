import { useState } from "react";
import { Wrapper } from "@/components/common/Containters";
import { cumulativeReturnData } from "@/data/mockData";
import { FilterButtons } from "@/components/common/FilterButtons";
import { AreaChartGraph } from "@/components/AreaChart/AreaChartGraph";

export default function AreaChartPage() {
  const [selectedItem, setSelectedItem] = useState<string>("1Y");
  const buttonItems = [
    { label: "6M", value: "6M" },
    { label: "1Y", value: "1Y" },
  ];

  const filteredData =
    selectedItem === "6M"
      ? cumulativeReturnData.slice(-6)
      : cumulativeReturnData;

  return (
    <Wrapper>
      <FilterButtons
        items={buttonItems}
        selectedValue={selectedItem}
        onChange={setSelectedItem}
      />

      <AreaChartGraph data={filteredData} />
    </Wrapper>
  );
}
