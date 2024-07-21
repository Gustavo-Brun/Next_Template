import React from "react";

import Link from "next/link";

import * as S from "./styles";

const Credits = async (): Promise<React.JSX.Element> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <S.Credits>
      Made with 💙 by{" "}
      <Link
        className="animate-pulse"
        href={"https://github.com/Gustavo-Brun/"}
        target="blank"
        aria-label="Author's GitHub Link"
      >
        Gustavo Brun
      </Link>
    </S.Credits>
  );
};

export default Credits;
