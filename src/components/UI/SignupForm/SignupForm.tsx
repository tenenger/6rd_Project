import { useForm } from "react-hook-form";

import {
  ALPHA_NUMBER_SPECIAL_COMBINATION_REGEX,
  EMAIL_REGEX,
  NAME_REGEX,
  PHONENUMBER_REGEX,
  THREE_TIMES_SUCCESSIVE_REGEX,
} from "@constants/regex";
import { OPTION_DATA, REQUIRE_DATA } from "@constants/selectData";
import {
  Button,
  Select,
  Text,
  FormInput,
  Title,
  FormLabel,
} from "@src/components/common";
import { Signup } from "@src/models/signup";
import { SSelect } from "./SignupForm.style";
import {
  MdOutlineLocalPostOffice,
  RiLockLine,
  BsPerson,
  MdOutlinePhoneIphone,
} from "@constants/formIcon";

const SignupForm = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<Signup>({
    mode: "all",
    criteriaMode: "all",
  });
  const watchEmail = watch("email", "");
  const watchPassword = watch("password");

  const email = register("email", {
    required: {
      value: true,
      message: "이메일을 입력해주세요",
    },
    validate: {
      patternEmail: (value) =>
        EMAIL_REGEX.test(value) || "이메일을 올바르게 입력해주세요",
    },
  });
  const password = register("password", {
    required: true,
    validate: {
      patternCombination: (value) =>
        ALPHA_NUMBER_SPECIAL_COMBINATION_REGEX.test(value),
      patternSuccessive: (value) => !THREE_TIMES_SUCCESSIVE_REGEX.test(value),
      patternEmail: (value) => {
        if (!value) return;
        return watchEmail.split("@")[0] !== value;
      },
    },
  });
  const confirmPassword = register("confirmPassword", {
    required: {
      value: true,
      message: "확인을 위해 새 비밀번호를 다시 입력해주세요",
    },
    validate: {
      patternSame: (value) =>
        watchPassword === value || "비밀번호가 일치하지 않습니다.",
    },
  });
  const name = register("name", {
    required: {
      value: true,
      message: "이름을 입력해주세요",
    },
    validate: {
      isHangul: (value) => NAME_REGEX.test(value) || "이름을 정확히 입력하세요",
    },
  });
  const phoneNumber = register("phoneNumber", {
    required: {
      value: true,
      message: "휴대폰 번호를 입력하세요",
    },
    validate: {
      isPhoneNumber: (value) =>
        PHONENUMBER_REGEX.test(value) || "휴대폰 번호를 정확하게 입력하세요",
    },
  });

  const requireSelect = register("requireSelect", {
    validate: (v) =>
      v.length === REQUIRE_DATA.length || "필수 항목에 모두 동의해주세요",
  });
  const optionSelect = register("optionSelect");

  const onSubmit = (data: any) => console.log(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title>회원정보를 입력해주세요</Title>
      <FormLabel isError={Boolean(errors.email)}>
        <>
          <div>
            <MdOutlineLocalPostOffice />
          </div>
          <FormInput type="email" placeholder="아이디(이메일)" {...email} />
        </>
      </FormLabel>
      {errors.email && <Text>{errors.email.message}</Text>}

      <FormLabel isError={Boolean(errors.password)}>
        <>
          <div>
            <RiLockLine />
          </div>
          <FormInput type="password" placeholder="비밀번호" {...password} />
        </>
      </FormLabel>
      {(watchPassword || errors.password) && (
        <div>
          <Text isCorrect={!errors.password?.types?.patternCombination}>
            영문/숫자/특수문자 3가지 조합 (8~20자)
          </Text>
          <Text isCorrect={!errors.password?.types?.patternSuccessive}>
            3개 이상 연속되거나 동일한 문자/숫자 제외
          </Text>
          <Text isCorrect={!errors.password?.types?.patternEmail}>
            아이디(이메일) 제외
          </Text>
        </div>
      )}

      <FormLabel isError={Boolean(errors.confirmPassword)}>
        <>
          <div>
            <RiLockLine />
          </div>
          <FormInput
            type="password"
            placeholder="비밀번호 확인"
            {...confirmPassword}
          />
        </>
      </FormLabel>
      {errors.confirmPassword && <Text>{errors.confirmPassword.message}</Text>}

      <FormLabel isError={Boolean(errors.name)}>
        <>
          <div>
            <BsPerson />
          </div>
          <FormInput type="text" placeholder="이름" {...name} />
        </>
      </FormLabel>
      {errors.name && <Text>{errors.name.message}</Text>}

      <FormLabel isError={Boolean(errors.phoneNumber)}>
        <>
          <div>
            <MdOutlinePhoneIphone />
          </div>
          <FormInput type="number" placeholder="휴대폰 번호" {...phoneNumber} />
        </>
      </FormLabel>
      {errors.phoneNumber && <Text>{errors.phoneNumber.message}</Text>}

      <Title>쿠팡 서비스약관에 동의해주세요</Title>

      <SSelect>
        <Select {...requireSelect} data={REQUIRE_DATA} />

        <Select {...optionSelect} data={OPTION_DATA} />
        {errors.requireSelect && <Text>{errors.requireSelect.message}</Text>}
      </SSelect>

      <Button label="동의하고 가입하기" type="submit" />
    </form>
  );
};
export default SignupForm;
