import type { PortfolioDataPoint } from "@/data/mockData";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface PieChartGraphProps {
  data: PortfolioDataPoint[];
}
export function PieChartGraph({ data }: PieChartGraphProps) {
  return (
    <ResponsiveContainer>
      <PieChart width={500} height={300}>
        <Pie
          data={data}
          dataKey="weight" // 파이 크기를 결정하는 숫자 필드
          nameKey="name" // 라벨/툴팁에 표시될 이름 필드
          fill="color" // 파이 색상
          // cx="10%" // 차트 중심 x (부모 기준 %)
          // cy="15%" // 차트 중심 y
          // outerRadius={150} // 파이 반지름
        />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
