import Image from "next/image";
import { SLayout, SText } from "./Badge.style";

const Badge = ({ icon, text }: any) => {
  return (
    <SLayout>
      <div>
        <Image
          src={`https:${icon}`}
          width={14}
          height={14}
          layout="fixed"
          objectFit="contain"
          alt=""
        />
        <SText>{text}</SText>
      </div>
    </SLayout>
  );
};

export default Badge;
