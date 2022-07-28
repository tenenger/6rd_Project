import { useState } from "react";
import { SLayout, SQuantityInput, SArrow } from "./QuantityInput.style";

const QuantityInput = () => {
  const [count, setCount] = useState<number>(1);

  const handleChange = (e) => {
    if (count < 0 || count > 6) {
      return setCount(count);
    }
    const { value } = e.target;
    const regex = /[^1-6]/g;
    const onlyNumber = value.replace(regex, "");
    setCount(onlyNumber);
  };

  const handleUpArrowClick = () => {
    if (count >= 6) return;
    setCount((prev) => prev + 1);
  };
  const handleDownArrowClick = () => {
    if (count <= 1) return;
    setCount((prev) => prev - 1);
  };

  return (
    <SLayout>
      <SQuantityInput
        type="text"
        value={count}
        onChange={handleChange}
        maxLength={1}
      />
      <SArrow>
        <button type="button" onClick={handleUpArrowClick}>
          {"▲"}
        </button>
        <button type="button" onClick={handleDownArrowClick}>
          {"▼"}
        </button>
      </SArrow>
    </SLayout>
  );
};

export default QuantityInput;
