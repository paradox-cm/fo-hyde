"use client";

import { useState } from "react";

export function useSample() {
  const [value, setValue] = useState("Hello from useSample hook!");
  return { value, setValue };
} 