"use client";

import React from "react";

import * as S from "./styles";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Example = (): React.JSX.Element => {
  const { setTheme } = useTheme();

  return (
    <S.Container>
      <S.ThemeContainer>
        <Button
          variant="secondary"
          size="iconXL"
        >
          <FaSun
            onClick={() => {
              setTheme("dark");
            }}
            className="h-[3rem] w-[3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <FaMoon
            onClick={() => {
              setTheme("light");
            }}
            className="absolute h-[3rem] w-[3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
        </Button>
      </S.ThemeContainer>
      <S.Title>&#10052; Next.js & TypeScript starter template &#10052;</S.Title>

      <S.Text>
        You can start by editting this component in{" "}
        <S.TextSpan>src/components/Example.tsx.</S.TextSpan>
      </S.Text>
    </S.Container>
  );
};

export default Example;
