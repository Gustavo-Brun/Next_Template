import React from "react";

import * as S from "./styles";

const Example = (): React.JSX.Element => {
  return (
    <S.Container>
      <S.Title>&#10052; Next.js & TypeScript starter template &#10052;</S.Title>

      <S.Text>
        You can start by editting this component in{" "}
        <S.TextSpan>src/components/Example.tsx.</S.TextSpan>
      </S.Text>
    </S.Container>
  );
};

export default Example;
