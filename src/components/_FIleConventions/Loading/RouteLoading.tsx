import React from "react";

import * as S from "./styles";

import { ImSpinner2 } from "react-icons/im";

const RouteLoading = (): React.JSX.Element => {
  return (
    <S.Container>
      <S.Title>Loading Route Page</S.Title>

      <ImSpinner2
        className="animate-spin"
        style={{ fontSize: 25 }}
      />
    </S.Container>
  );
};

export default RouteLoading;
