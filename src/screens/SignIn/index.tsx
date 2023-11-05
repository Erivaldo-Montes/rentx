import { useEffect, useState, useCallback } from "react";
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import {
  Container,
  Title,
  Subtitle,
  Form,
  Buttons,
  Header,
  ErrorMessageText,
} from "./styles";
import { Input } from "../../components/Input";
import { InputPassword } from "@/components/InputPassword";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components/native";
import { useAuth } from "@/hooks/auth";
import { BackButton } from "@/components/BackButton";

const SignInSchema = yup.object({
  email: yup
    .string()
    .required("e-mail é obrigatório")
    .email("Insira um e-mail válido"),
  password: yup.string().required("senha é obrigatória"),
});

type SignInData = yup.InferType<typeof SignInSchema>;

export function SignIn() {
  const [keyboardShow, setKeyboardShow] = useState(false);
  const [inputsIsEmpty, setInputIsEmpty] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const { signIn } = useAuth();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const theme = useTheme();
  const navigation = useNavigation();

  function handleLogin(data: SignInData) {
    signIn(data);
  }

  function hideKeyboard() {
    Keyboard.dismiss();
  }

  Keyboard.addListener("keyboardDidShow", () => {
    setKeyboardShow(true);
  });

  Keyboard.addListener("keyboardDidHide", () => {
    setKeyboardShow(false);
  });

  const watchAll = watch();

  useEffect(() => {
    const inputsValues = Object.values(watchAll);
    if (inputsValues.includes("")) {
      setInputIsEmpty(true);
    } else {
      setInputIsEmpty(false);
    }
    setIsFormError(() => {
      if (Object.values(errors).length === 0) {
        return false;
      } else {
        return true;
      }
    });
  }, [watchAll, errors]);

  console.log("render");
  useFocusEffect(
    useCallback(() => {
      async function navBar() {
        await NavigationBar.setBackgroundColorAsync("#f4f5f6");
        await NavigationBar.setButtonStyleAsync("dark");
      }

      navBar();
    }, [])
  );

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
      style={{
        flex: 1,
        backgroundColor: theme.COLORS["gray-100"],
      }}
    >
      <TouchableWithoutFeedback onPress={hideKeyboard} style={{ flex: 1 }}>
        <Container>
          {!keyboardShow ? (
            <Animated.View entering={FadeInDown}>
              <Title>Estamos {"\n"}quase lá</Title>
            </Animated.View>
          ) : (
            <Header>
              <BackButton
                onPress={hideKeyboard}
                color={theme.COLORS["gray-500"]}
              />
            </Header>
          )}

          <Subtitle>
            Faça seu login para começar {"\n"}uma experiência incrível.
          </Subtitle>

          <Form>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  icon="mail"
                  keyboardType="email-address"
                  placeholder="E-mail"
                  autoCapitalize="none"
                  errorMessage={errors.email?.message}
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
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputPassword
                  placeholder="Senha"
                  autoCorrect={false}
                  autoCapitalize="none"
                  errorMessage={errors.email?.message}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <ErrorMessageText>{message}</ErrorMessageText>
              )}
            />
          </Form>

          <Buttons>
            <Button
              styleButton="RED"
              title="Login"
              onPress={handleSubmit(handleLogin)}
              disabled={isFormError || inputsIsEmpty}
            />
            {!keyboardShow && (
              <Button
                styleButton="WHITE"
                title="Criar conta gratuita"
                onPress={() => navigation.navigate("SignUpFirstStep")}
              />
            )}
          </Buttons>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
