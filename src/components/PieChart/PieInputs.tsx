import { useState } from "react";
import { SubmitButton } from "../common/Button";
import { FlexContainer, InputContainer } from "../common/Containters";
import type { PortfolioDataPoint } from "@/data/mockData";

interface PieInputsProps {
  data: PortfolioDataPoint[];
  onChange: (data: PortfolioDataPoint[]) => void;
}

export function PieInputs({ data, onChange }: PieInputsProps) {
  const [name, setName] = useState("삼성전자");
  const [weight, setWeight] = useState(1);
  const [customName, setCustomName] = useState("");

  const handleSubmit = () => {
    const finalName = name === "직접 입력" ? customName : name;
    if (!finalName || weight <= 0) return;

    const existingData = data.find((item) => item.name === finalName);

    let newData;

    if (!existingData) {
      newData = [...data, { name: finalName, weight, fill: "#000000" }];
    } else {
      newData = data.map((item) => (
         item.name === finalName ? { ...item, weight } : item 
      ));
    }

    onChange(newData);

    setName("삼성전자");
    setWeight(0);
    setCustomName("");
  };

  const selectOptions = [
    ...data,
    { name: "직접 입력", weight: 0, fill: "#000000" },
  ];

  return (
    <FlexContainer>
      <InputContainer>
        <label htmlFor="name">종목명</label>
        <select
          id="name"
          value={name}
          onChange={(e) => {
            setCustomName("");
            setName(e.target.value);
          }}
        >
          {selectOptions.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </InputContainer>

      <InputContainer>
        <input
          id="customName"
          type="text"
          value={customName}
          onChange={(e) => setCustomName(e.target.value)}
          disabled={name !== "직접 입력"}
        />
      </InputContainer>

      <InputContainer>
        <label htmlFor="weight">비중</label>
        <input
          id="weight"
          type="number"
          value={weight}
          min={1}
          max={100}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </InputContainer>

      <SubmitButton onClick={handleSubmit}>입력</SubmitButton>
    </FlexContainer>
  );
}
