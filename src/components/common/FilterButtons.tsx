import { Button } from "./Button";
import { FlexContainer } from "./Containters";

export type ButtonItem = {
  label: string;
  value: string;
};

interface FilterButtonsProps {
  items: ButtonItem[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export function FilterButtons({
  items,
  selectedValue,
  onChange,
}: FilterButtonsProps) {
  return (
    <FlexContainer>
      {items.map((item) => (
        <Button
          key={item.value}
          $active={selectedValue === item.value}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </FlexContainer>
  );
}
