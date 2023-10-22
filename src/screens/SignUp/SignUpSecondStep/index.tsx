import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { SignUpHeader } from "@/components/SignUpHeader";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Container, Form, FormTitle, ErrorMessageText } from "./styles";
import { useEffect, useState } from "react";

const confirmPasswordSchema = yup.object({
  password: yup
    .string()
    .required("Insira a senha")
    .min(8, "A senha de ter no mínimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Insira a confirmação da senha")

    .oneOf([yup.ref("password")], "As senhas não são iguais"),
});

type confirmPasswordData = yup.InferType<typeof confirmPasswordSchema>;

export function SignUpSecondStep() {
  const [isDisableButton, setIsDisableButton] = useState(true);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<confirmPasswordData>({
    resolver: yupResolver(confirmPasswordSchema),
  });

  function handleRegister(data: confirmPasswordData) {
    console.log(data);
  }

  const watchPassword = watch("password");
  const watchConfirmPassword = watch("confirmPassword");

  useEffect(() => {
    setIsDisableButton(() => {
      if (!watchConfirmPassword || !watchPassword) {
        return true;
      }
      if (errors.confirmPassword?.message || errors.password?.message) {
        return true;
      } else {
        return false;
      }
    });
    console.log(isDisableButton);
  }, [watchConfirmPassword, watchPassword, errors]);

  return (
    <Container>
      <SignUpHeader stepsActive={2} />
      <Form>
        <FormTitle>02. Senha</FormTitle>
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              icon="lock"
              inputType="password"
              placeholder="Senha"
              onChangeText={onChange}
            />
          )}
        />
        <ErrorMessage
          name="password"
          errors={errors}
          render={({ message }) => (
            <ErrorMessageText>{message}</ErrorMessageText>
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              icon="lock"
              inputType="password"
              placeholder="Repetir senha"
              onChangeText={onChange}
            />
          )}
        />
        <ErrorMessage
          name="confirmPassword"
          errors={errors}
          render={({ message }) => (
            <ErrorMessageText>{message}</ErrorMessageText>
          )}
        />
      </Form>
      <Button
        styleButtom="GREEN"
        title="Cadastrar"
        disabled={isDisableButton}
        onPress={handleSubmit(handleRegister)}
      />
    </Container>
  );
}
