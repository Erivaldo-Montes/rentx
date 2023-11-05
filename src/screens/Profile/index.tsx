import {
  Container,
  Header,
  HeaderTop,
  HeaderTopTitle,
  ImageProfile,
  ProfilePhoto,
  SelectPhoto,
  SignOutButton,
  Content,
  Menu,
  Option,
  OptionText,
  Form,
  SaveChanges,
  ErrorMessageText,
} from "./styles";
import { useState, useCallback } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useAuth } from "@/hooks/auth";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/Button";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Input } from "@/components/Input";
import { useForm, Controller } from "react-hook-form";
import { InputPassword } from "@/components/InputPassword";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import * as ImagePicker from "expo-image-picker";

const ProfileSchema = yup.object({
  name: yup.string().min(3, "O deve ter pelo menos 3 letras"),
  driver_license: yup.string(),
});

const PasswordSchema = yup.object({
  current_password: yup.string().required("Senha é obrigatória"),
  password: yup.string().required("Senha é obrigatória"),
  confirm_password: yup
    .string()
    .required("Senha é obrigatória")
    .oneOf([yup.ref("password")], "senhas não são iguais"),
});

type PasswordSchemaProps = yup.InferType<typeof PasswordSchema>;
type ProfileSchemaProps = yup.InferType<typeof ProfileSchema>;

type SelectMenuProps = {
  selected: "INFO" | "CHANGE_PASSWORD";
};

export function Profile() {
  const [menuSelected, setMenuSelected] = useState<SelectMenuProps>({
    selected: "INFO",
  });
  const [profileImage, setProfileImage] = useState(null);

  const navigation = useNavigation();

  const { signOut, user } = useAuth();
  const theme = useTheme();
  const {
    control: profileControl,
    formState: { errors: profileError },
    handleSubmit: profileHandleSubmit,
  } = useForm<ProfileSchemaProps>({
    resolver: yupResolver(ProfileSchema),
    defaultValues: {
      driver_license: "1234556",
      name: user,
    },
  });

  const {
    control: passwordControl,
    formState: { errors: passwordError },
    handleSubmit: passwordHandleSubmit,
  } = useForm<PasswordSchemaProps>({
    resolver: yupResolver(PasswordSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
      current_password: "",
    },
  });

  function handleSelectMenu({ selected }: SelectMenuProps) {
    setMenuSelected({ selected });
  }

  function handleUpdateProfile(data: ProfileSchemaProps) {
    console.log(data);
    navigation.navigate("ConfirmScreen", {
      message: `Suas informações${"\n"}foram salvas`,
      nextScreenRoute: "Home",
      title: "Feito",
    });
  }
  function handleChangePassword(data: PasswordSchemaProps) {
    console.log(data);
    navigation.navigate("ConfirmScreen", {
      message: `Suas informações${"\n"}foram salvas`,
      nextScreenRoute: "Home",
      title: "Feito",
    });
  }

  function handleBack() {
    navigation.navigate("Home");
  }

  async function HandlePickImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      async function NavBar() {
        await NavigationBar.setBackgroundColorAsync(theme.COLORS["gray-100"]);
        await NavigationBar.setButtonStyleAsync("dark");
      }

      NavBar();
    }, [])
  );

  return (
    <KeyboardAvoidingView behavior="position" style={{ flex: 1 }} enabled>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton color={theme.COLORS.white} onPress={handleBack} />
              <HeaderTopTitle>Editar perfil</HeaderTopTitle>
              <SignOutButton onPress={signOut}>
                <Feather
                  name="power"
                  size={24}
                  color={theme.COLORS["gray-400"]}
                />
              </SignOutButton>
            </HeaderTop>

            <ProfilePhoto>
              <ImageProfile
                source={
                  profileImage
                    ? { uri: profileImage }
                    : require("@/assets/user_default.jpg")
                }
              />
              <SelectPhoto onPress={HandlePickImage}>
                <Feather name="camera" color={theme.COLORS.white} size={24} />
              </SelectPhoto>
            </ProfilePhoto>
          </Header>

          <Content>
            <Menu>
              <Option
                onPress={() => handleSelectMenu({ selected: "INFO" })}
                selected={menuSelected.selected === "INFO"}
              >
                <OptionText selected={menuSelected.selected === "INFO"}>
                  Dados
                </OptionText>
              </Option>

              <Option
                onPress={() =>
                  handleSelectMenu({ selected: "CHANGE_PASSWORD" })
                }
                selected={menuSelected.selected === "CHANGE_PASSWORD"}
              >
                <OptionText
                  selected={menuSelected.selected === "CHANGE_PASSWORD"}
                >
                  Trocar senha
                </OptionText>
              </Option>
            </Menu>

            {menuSelected.selected === "INFO" ? (
              <Form>
                <Controller
                  name="name"
                  control={profileControl}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      icon="user"
                      autoCorrect={false}
                      onChangeText={onChange}
                      autoCapitalize="none"
                      value={value}
                      errorMessage={profileError.name?.message}
                    />
                  )}
                />
                <ErrorMessage
                  errors={profileError}
                  name={"name"}
                  render={({ message }) => (
                    <ErrorMessageText> {message}</ErrorMessageText>
                  )}
                />

                <Input icon={"mail"} editable={false} value={user} />

                <Controller
                  name="driver_license"
                  control={profileControl}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      icon="credit-card"
                      autoCorrect={false}
                      keyboardType="decimal-pad"
                      onChangeText={onChange}
                      value={value}
                      errorMessage={profileError.driver_license?.message}
                      defaultValue={"1234567"}
                    />
                  )}
                />
                <ErrorMessage
                  errors={profileError}
                  name={"driver_license"}
                  render={({ message }) => (
                    <ErrorMessageText> {message}</ErrorMessageText>
                  )}
                />
              </Form>
            ) : (
              <Form>
                <Controller
                  name="current_password"
                  control={passwordControl}
                  render={({ field: { onChange, value } }) => (
                    <InputPassword
                      placeholder="Senha atual"
                      onChangeText={onChange}
                      errorMessage={passwordError.current_password?.message}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  )}
                />

                <ErrorMessage
                  errors={passwordError}
                  name={"current_password"}
                  render={({ message }) => (
                    <ErrorMessageText> {message}</ErrorMessageText>
                  )}
                />

                <Controller
                  name="password"
                  control={passwordControl}
                  render={({ field: { onChange, value } }) => (
                    <InputPassword
                      placeholder="Senha"
                      onChangeText={onChange}
                      value={value}
                      errorMessage={passwordError.password?.message}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  )}
                />

                <ErrorMessage
                  errors={passwordError}
                  name={"password"}
                  render={({ message }) => (
                    <ErrorMessageText> {message}</ErrorMessageText>
                  )}
                />

                <Controller
                  name="confirm_password"
                  control={passwordControl}
                  render={({ field: { onChange, value } }) => (
                    <InputPassword
                      placeholder="Repetir senha"
                      onChangeText={onChange}
                      value={value}
                      errorMessage={passwordError.confirm_password?.message}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  )}
                />

                <ErrorMessage
                  errors={passwordError}
                  name={"confirm_password"}
                  render={({ message }) => (
                    <ErrorMessageText> {message}</ErrorMessageText>
                  )}
                />
              </Form>
            )}

            <SaveChanges>
              <Button
                styleButton="RED"
                title="Salvar alterações"
                onPress={
                  menuSelected.selected === "CHANGE_PASSWORD"
                    ? passwordHandleSubmit(handleChangePassword)
                    : profileHandleSubmit(handleUpdateProfile)
                }
              />
            </SaveChanges>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
