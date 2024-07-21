import React from "react";

import * as S from "./styles";

import { ImSpinner2 } from "react-icons/im";

const GlobalLoading = (): React.JSX.Element => {
  return (
    <S.Container>
      <S.Title>Loading</S.Title>

      <ImSpinner2
        className="animate-spin"
        style={{ fontSize: 25 }}
      />
    </S.Container>
  );
};

export default GlobalLoading;
