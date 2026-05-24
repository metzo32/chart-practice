import type { MonthlyProfitDataPoint } from "@/data/mockData";
import { theme } from "@/styles/theme";
import { CardWrapper, CardContainer, CardP } from "./styles/CardContainers";
interface CardWithSumProps {
    data: MonthlyProfitDataPoint[];
}

export default function CardWithSum({ data }: CardWithSumProps) {
    const { sumProfit, sumLoss } = data.reduce(
        (acc, curr) => ({
            sumProfit: acc.sumProfit + curr.profit,
            sumLoss: acc.sumLoss + curr.loss
        }),
        { sumProfit: 0, sumLoss: 0 }
    )

    const sumTotal = sumProfit + sumLoss;
    const avgProfit = Math.round(sumProfit / data.length);
    const avgLoss = Math.round(sumLoss / data.length);

    const sumMap = [
        { label: "총 이익 합계", value: sumProfit },
        { label: "월평균 이익", value: avgProfit },
        { label: "총 손실 합계", value: sumLoss },
        { label: "월평균 손실", value: avgLoss },
        { label: "순이익", value: sumTotal },
    ]

    return (
        <CardWrapper>
            {sumMap.map((item) => (
                <CardContainer key={item.label}>
                    <h3>{item.label}</h3>
                    <CardP color={item.value >= 0 ? theme.colors.success : theme.colors.danger}>
                        {item.value.toLocaleString()}원
                    </CardP>
                </CardContainer>
            ))}
        </CardWrapper>
    )
}
