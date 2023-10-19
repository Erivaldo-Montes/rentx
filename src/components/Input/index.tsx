import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Container, InputText, IconContainer } from "./styles";
import { useTheme } from "styled-components/native";

interface Props extends TextInputProps {
  // captura o nomes do icones
  icon: React.ComponentProps<typeof Feather>["name"];
  inputType?: "password" | "text";
}

export function Input({ icon, inputType = "text", ...rest }: Props) {
  const [inputContent, setInputContent] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    setIsFocused(false);
  }
  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather
          name={icon}
          size={24}
          color={
            inputContent ? theme.COLORS["red-600"] : theme.COLORS["gray-500"]
          }
        />
      </IconContainer>
      <InputText
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChangeText={(e) => setInputContent(e)}
        secureTextEntry={!showPassword}
        {...rest}
      />
      {inputType === "password" && (
        <>
          {showPassword ? (
            <IconContainer>
              <Feather
                name={"eye-off"}
                size={24}
                color={theme.COLORS["gray-500"]}
                onPress={() => setShowPassword((state) => !state)}
              />
            </IconContainer>
          ) : (
            <IconContainer>
              <Feather
                name={"eye"}
                size={24}
                color={theme.COLORS["gray-500"]}
                onPress={() => setShowPassword((state) => !state)}
              />
            </IconContainer>
          )}
        </>
      )}
    </Container>
  );
}
