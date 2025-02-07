"use client";

import { Progress } from "../components/ui/progress";

export function ProgressDemo({ value }: { value: number }) {
  return <Progress value={value} className="w-full" />;
}
