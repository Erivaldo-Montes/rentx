import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useState } from "react";
import { Container, InputText, IconContainer } from "./styles";
import { useTheme } from "styled-components/native";

interface Props extends TextInputProps {
  // captura o nomes do icones
  icon: React.ComponentProps<typeof Feather>["name"];
  errorMessage?: string | null;
}

export function Input({
  icon,
  errorMessage = null,
  onChangeText,
  ...rest
}: Props) {
  const [inputContent, setInputContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    setIsFocused(false);
  }

  return (
    <Container isFocused={isFocused} isError={!!errorMessage}>
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
        onChangeText={(e) => {
          if (onChangeText) {
            onChangeText(e);
          }
          setInputContent(e);
        }}
        {...rest}
      />
    </Container>
  );
}
