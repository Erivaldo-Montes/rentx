import { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Title,
  Subtitle,
  Form,
  FormTitle,
  ErrorMessageText,
} from "./styles";
import { Input } from "../../../components/Input";
import { SignUpHeader } from "../../../components/SignUpHeader";
import { Button } from "../../../components/Button";

const SignUpFirstSchema = yup.object({
  name: yup
    .string()
    .required("Nome é necessário")
    .min(3, "O nome deve ter ao menos 3 letras"),
  email: yup
    .string()
    .required("email é necssário")
    .email("Insira um email válido"),
  driver_license: yup.string().required("Carteira de motorista é necessário"),
});

type SignUpFirstStepData = yup.InferType<typeof SignUpFirstSchema>;

export function SignUpFirstStep() {
  const theme = useTheme();
  const [keyboardShow, setKeyboardShow] = useState(false);
  const navigation = useNavigation();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignUpFirstStepData>({
    resolver: yupResolver(SignUpFirstSchema),
  });

  function hideKeyboard() {
    Keyboard.dismiss();
  }

  function handleSignFirstStepSubmit(data: SignUpFirstStepData) {
    navigation.navigate("signUpSecondStep");
    console.log(data);
  }

  Keyboard.addListener("keyboardDidShow", () => {
    setKeyboardShow(true);
  });
  Keyboard.addListener("keyboardDidHide", () => {
    setKeyboardShow(false);
  });

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, backgroundColor: theme.COLORS["gray-100"] }}
      enabled
    >
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <Container>
          <SignUpHeader stepsActive={1} />
          {/* oculta o titulo quando o teclado estiver ativo */}
          {!keyboardShow && (
            <Animated.View entering={FadeInUp.duration(100)}>
              <Title>Crie sua{"\n"}conta</Title>
              <Subtitle>
                Faça seu cadastro de{"\n"}
                forma rápida e fácil.
              </Subtitle>
            </Animated.View>
          )}

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  icon="user"
                  placeholder="Nome"
                  value={value}
                  onChangeText={onChange}
                  autoCorrect={false}
                />
              )}
            />

            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <ErrorMessageText>{message}</ErrorMessageText>
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  icon="mail"
                  placeholder="E-mail"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <ErrorMessageText>{message}</ErrorMessageText>
              )}
            />

            <Controller
              control={control}
              name="driver_license"
              rules={{}}
              render={({ field: { onChange } }) => (
                <Input
                  icon="credit-card"
                  placeholder="CNH"
                  inputMode="numeric"
                  onChangeText={onChange}
                />
              )}
            />

            <ErrorMessage
              errors={errors}
              name="driver_license"
              render={({ message }) => (
                <ErrorMessageText>{message}</ErrorMessageText>
              )}
            />
          </Form>
          <Button
            styleButtom="RED"
            title="Proxímo"
            onPress={handleSubmit(handleSignFirstStepSubmit)}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
