import { FlexContainer } from "@/components/common/Containters";
import { SubmitButton } from "../common/Button";
import type { StockDataPoint } from "@/data/mockData";
import { useState } from "react";

interface LineInputsProps {
    addData: (data: StockDataPoint) => void;
}

export function LineInputs({ addData }: LineInputsProps) {
    const [date, setDate] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = () => {
        addData({ date: date, price: Number(price), volume: 0 })
        setDate("")
        setPrice("")
    }

    return (
        <FlexContainer>
            <FlexContainer>
                <label htmlFor="date">날짜</label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </FlexContainer>
            <FlexContainer>
                <label htmlFor="price">가격</label>
                <input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </FlexContainer>

            <SubmitButton
                onClick={handleSubmit}
            >
                입력
            </SubmitButton>
        </FlexContainer>
    )
}