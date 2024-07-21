"use client";

import React, { useEffect } from "react";

import { RouteErrorComponent } from "@/components/_FIleConventions/Error";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): React.JSX.Element {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <RouteErrorComponent
      error={error}
      reset={reset}
    />
  );
}
