import { useForm } from "react-hook-form";

import { EMAIL_REGEX } from "@constants/regex";
import { Button, FormInput, Text } from "@src/components/common";
import { SImage, SForm } from "./LoginForm.style";
import Image from "next/image";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const email = register("email", {
    required: {
      value: true,
      message: "이메일을 입력해주세요",
    },
    pattern: {
      value: EMAIL_REGEX,
      message: "정확한 이메일을 입력해주세요",
    },
  });

  const password = register("password", {
    required: {
      value: true,
      message: "패스워드를 입력해주세요",
    },
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SImage>
        <Image src="/coupang.png" width={195} height={46} alt="coupang_logo" />
      </SImage>
      <SForm>
        <FormInput
          {...email}
          errorMessage={errors.email && <Text>{errors.email.message}</Text>}
          type="email"
          placeholder="아이디(이메일)"
        />
        <FormInput
          {...password}
          errorMessage={
            errors.password && <Text>{errors.password.message}</Text>
          }
          type="password"
          placeholder="비밀번호"
        />
      </SForm>
      {/* type 속성을 주어, submit 기능 구현 */}
      <Button type="submit">로그인</Button>
    </form>
  );
};

export default LoginForm;
