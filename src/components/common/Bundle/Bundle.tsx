import Image from "next/image";
import { SLayout, SDescription, SItem, SPrice, STitle } from "./Bundle.style";

const Bundle = ({ icon, bundle }: any) => {
  const { name, price, description } = bundle;

  return (
    <SLayout>
      <input type="checkbox" />
      <div>
        <SItem>
          <Image src={icon} width={20} height={20} alt="" />
          <STitle>{name}</STitle>
          <SPrice>{price}</SPrice>
        </SItem>
        <SDescription>{description}</SDescription>
      </div>
    </SLayout>
  );
};

export default Bundle;
