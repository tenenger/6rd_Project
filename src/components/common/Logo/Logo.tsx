import Image from "next/image";

import { SLogo } from "./Logo.style";

const Logo = () => {
  return (
    <SLogo>
      <Image src="/coupang.png" width={195} height={46} alt="coupang_logo" />
    </SLogo>
  );
};

export default Logo;
