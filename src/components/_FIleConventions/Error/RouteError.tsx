import React from "react";

import * as S from "./styles";

import { Button } from "@/components/ui/button";

interface RouteErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const RouteError: React.FC<RouteErrorPageProps> = ({ error, reset }) => {
  return (
    <S.Container>
      <S.Title>Something went wrong!</S.Title>
      <S.Text>Error: {error.message}</S.Text>
      <Button onClick={reset}>Try again</Button>
      <Button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload the Page
      </Button>
    </S.Container>
  );
};

export default RouteError;
