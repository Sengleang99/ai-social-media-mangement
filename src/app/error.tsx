"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Something went wrong!</h2>
      <p className="text-xs text-zinc-500 max-w-md">
        {error.message || "An unexpected error occurred."}
      </p>
      <Button variant="primary" size="sm" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
