import Link from "next/link";

import { Button, Layout } from "@src/components/common";
import LoginForm from "@src/components/UI/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <Layout>
      <LoginForm />
      <Link href="/auth/signup">
        {/* a 태그 대신, Button 컴포넌트 사용 : forwardRef */}
        <Button type="button">회원가입</Button>
      </Link>
    </Layout>
  );
};

export default LoginPage;
