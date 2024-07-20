"use client";

import React, { useEffect } from "react";

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
        <h2>Something went wrong!</h2>
        <button
          onClick={() => {
            reset();
          }}
        >
          Try again
        </button>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload the Page
        </button>
      </body>
    </html>
  );
}
