import type { Stock } from "@/types/LineChartPageType";
import { Button } from "../common/Button";
import { FlexContainer } from "../common/Containters";

interface LineCategoryButtonsProps {
    data: Stock;
    showSamsungData: () => void;
    showHynixData: () => void;
}

export function LineCategoryButtons({ data, showSamsungData, showHynixData }: LineCategoryButtonsProps) {
    return (
        <FlexContainer>
            <Button
                $active={data === "SAMSUNG"}
                onClick={showSamsungData}>
                삼성
            </Button>

            <Button
                $active={data === "HYNIX"}
                onClick={showHynixData}>
                하이닉스
            </Button>
        </FlexContainer>
    )
}