import { useState } from "react";
import { PieInputs } from "@/components/PieChart/PieInputs";
import { PieChartGraph } from "@/components/PieChart/PieChartGraph";
import { portfolioData, type PortfolioDataPoint } from "@/data/mockData";

export default function PieChartPage() {
const [data, setData] = useState<PortfolioDataPoint[]>(portfolioData);

  return (
    <>
      <PieInputs data={data} onChange={setData} />
      <PieChartGraph data={data} />
    </>
  );
}
