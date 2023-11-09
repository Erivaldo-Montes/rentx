import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigation } from "@react-navigation/native";
import { BulletHeader } from "@/components/BulletHeader";
import * as NavigationBar from "expo-navigation-bar";
import { InputPassword } from "@/components/InputPassword";
import { Button } from "@/components/Button";
import { Container, Form, FormTitle, ErrorMessageText } from "./styles";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<confirmPasswordData>({
    resolver: yupResolver(confirmPasswordSchema),
    defaultValues: {
      confirmPassword: "",
      password: "",
    },
  });

  function handleRegister(data: confirmPasswordData) {
    setIsSubmitting(true);
    navigation.navigate("ConfirmScreen", {
      title: "Conta criada",
      message: "",
      nextScreenRoute: "SignIn",
    });
  }

  const watchPassword = watch("password");
  const watchConfirmPassword = watch("confirmPassword");

  useEffect(() => {
    setIsDisableButton(() => {
      if (!watchConfirmPassword || !watchPassword) {
        return true;
      } else {
        return false;
      }
    });
  }, [watchConfirmPassword, watchPassword, errors]);

  useEffect(() => {
    async function navBar() {
      await NavigationBar.setBackgroundColorAsync("#f4f5f6");
      await NavigationBar.setButtonStyleAsync("dark");
    }

    navBar();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <Container>
        <BulletHeader bulletActive={2} bulletsNumber={2} />
        <Form>
          <FormTitle>02. Senha</FormTitle>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputPassword
                placeholder="Senha"
                onChangeText={onChange}
                autoCorrect={false}
                autoCapitalize="none"
                value={value}
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
            render={({ field: { onChange, value } }) => (
              <InputPassword
                placeholder="Repetir senha"
                onChangeText={onChange}
                autoCorrect={false}
                autoCapitalize="none"
                value={value}
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
          styleButton="GREEN"
          title="Cadastrar"
          disabled={isDisableButton}
          onPress={handleSubmit(handleRegister)}
          isLoading={isSubmitting}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
