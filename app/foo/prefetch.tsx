"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

export const FooClient: FC<{}> = (props) => {
  const router = useRouter();
  return <button onClick={() => router.prefetch("/")}>Prefetch</button>;
};
