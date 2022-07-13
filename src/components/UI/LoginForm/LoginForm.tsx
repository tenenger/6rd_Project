import { useForm } from "react-hook-form";

import { EMAIL_REGEX } from "@constants/regex";
import { Button, FormInput, Text } from "@src/components/common";
import { SFormInputs } from "./LoginForm.style";
import Logo from "@src/components/common/Logo/Logo";
import FormLabel from "@src/components/common/FormLabel/FormLabel";
import { MdOutlineLocalPostOffice, RiLockLine } from "@constants/formIcon";

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
      <Logo />
      <SFormInputs>
        <FormLabel isError={Boolean(errors.email)}>
          <>
            <div>
              <MdOutlineLocalPostOffice />
            </div>
            <FormInput {...email} type="email" placeholder="아이디(이메일)" />
          </>
        </FormLabel>
        {errors.email && <Text>{errors.email.message}</Text>}

        <FormLabel isError={Boolean(errors.password)}>
          <>
            <div>
              <RiLockLine />
            </div>
            <FormInput {...password} type="password" placeholder="비밀번호" />
          </>
        </FormLabel>
        {errors.password && <Text>{errors.password.message}</Text>}
      </SFormInputs>
      {/* type 속성을 주어, submit 기능 구현 */}
      <Button label="로그인" type="submit" />
    </form>
  );
};

export default LoginForm;
