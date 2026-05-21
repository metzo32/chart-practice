import type { MonthlyProfitDataPoint } from "@/data/mockData";
import { CardContainer, Wrapper } from "../common/Containters";

interface CardWithSumProps {
    data: MonthlyProfitDataPoint[];
}

export default function CardWithSum({ data }: CardWithSumProps) {
    const sumProfit = data.reduce((acc, curr) => acc + curr.profit, 0);
    const sumLoss = data.reduce((acc, curr) => acc + curr.loss, 0);
    const sumTotal = sumProfit + sumLoss;

    const sumMap = [
        { label: "총 이익 합계", value: sumProfit.toLocaleString() },
        { label: "총 손실 합계", value: sumLoss.toLocaleString() },
        { label: "순이익", value: sumTotal.toLocaleString() },
    ]


    return (
        <CardContainer>
            {sumMap.map((item) => (
                <Wrapper key={item.label}>
                    <h3>{item.label}</h3>
                    <p>{item.value}원</p>
                </Wrapper>
            ))}
        </CardContainer>
    )
}
