import { ShippingProps } from "@src/types";
import { useState } from "react";
import {
  SDeliveryList,
  SLabel,
  SLayout,
  STitle,
  SDescription,
} from "./Shipping.style";

const Shipping = ({ shippingFeeList, deliveryList }: ShippingProps) => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <SLayout>
      <STitle
        dangerouslySetInnerHTML={{ __html: shippingFeeList[current].message }}
      />
      <SDeliveryList>
        {deliveryList.map((delivery, idx) => (
          <SLabel key={delivery.descriptions}>
            <input
              checked={current === idx}
              type="radio"
              onChange={() => setCurrent(idx)}
            />

            <SDescription
              dangerouslySetInnerHTML={{
                __html: delivery.descriptions,
              }}
            />
          </SLabel>
        ))}
      </SDeliveryList>
    </SLayout>
  );
};

export default Shipping;
