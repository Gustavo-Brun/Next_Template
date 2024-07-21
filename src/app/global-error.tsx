"use client";

import React, { useEffect } from "react";

import { GlobalErrorComponent } from "@/components/_FIleConventions/Error";

export default function GlobalError({
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
    <html>
      <body>
        <GlobalErrorComponent
          error={error}
          reset={reset}
        />
      </body>
    </html>
  );
}
