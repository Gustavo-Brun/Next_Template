import React from "react";

import * as S from "./styles";

import { Skeleton } from "@/components/ui/skeleton";

const CreditsFallback = (): React.JSX.Element => {
  return (
    <S.Credits>
      <Skeleton className="h-4 w-[250px]" />
    </S.Credits>
  );
};

export default CreditsFallback;
