import { Button } from "../common/Button";
import { FlexContainer } from "../common/Containters";
import type { Range } from "@/types/LineChartPageType"

interface DateRangeButtonsProps {
    activeRange: Range | null;
    setActiveRange: (range: Range) => void;
}

export function DateRangeButtons({ activeRange, setActiveRange }: DateRangeButtonsProps) {
    return (
        <FlexContainer>
            <Button
                $active={activeRange === "1W"}
                onClick={() => setActiveRange("1W")}
            >1W
            </Button>
            <Button
                $active={activeRange === "1M"}
                onClick={() => setActiveRange("1M")}
            >1M
            </Button>
            <Button
                $active={activeRange === "3M"}
                onClick={() => setActiveRange("3M")}
            >3M
            </Button>
        </FlexContainer>
    )
}