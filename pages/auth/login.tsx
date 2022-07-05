import Link from "next/link";

import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import Button from "../../src/components/common/Button/Button";

type UseForm = {
  email: string;
  password: string;
};

const LoginPage = () => {
  // useForm hook의 type 설정 : useForm<UseForm>
  const { register, handleSubmit } = useForm<UseForm>();

  const onSubmit = () => {};

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="아이디(이메일)" />
        <input {...register("password")} placeholder="비밀번호" />
        {/* type 속성을 주어, submit 기능 구현 */}
        <Button type="submit">로그인</Button>
        {/* a 태그 대신, Button 컴포넌트 사용 : forwardRef */}
        <Link href="/auth/signup">
          <Button>회원가입</Button>
        </Link>
      </form>
    </Wrapper>
  );
};

export default LoginPage;

// 로그인 페이지 목업 디자인
const Wrapper = styled.div`
  min-width: 290px;
  max-width: 460px;
  margin: auto;
`;
