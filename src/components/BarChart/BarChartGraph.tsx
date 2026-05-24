import { type MonthlyProfitDataPoint } from '@/data/mockData'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { theme } from '@/styles/theme'

interface BarChartGraphProps {
    data: MonthlyProfitDataPoint[];
}

export default function BarChartGraph({ data }: BarChartGraphProps) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid />
                <XAxis dataKey="month" />
                <YAxis />
                <Bar
                    dataKey="loss"
                    name="손실"
                    fill={theme.colors.danger}
                />
                <Bar
                    dataKey="profit"
                    name="이익"
                    fill={theme.colors.primary}
                />
                <Tooltip
                    formatter={(value: number, name: string) => [value.toLocaleString() + '원', name]}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}
