"use client";

import { FC, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams, usePathname } from "next/navigation";

export const TodoListFiltersHeader: FC<{}> = () => {
  //const [filter, setFilter] = useState("");

  const [routing, startTransition] = useTransition();
  const [counterValue, setCounterVal] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();

  const path = usePathname();

  //console.log({ segment });
  const [filter, _setFilter] = useState<string>(path.split("/").at(-1)!);

  const setFilter = (val: string) => {
    _setFilter(val);
    startTransition(() => {
      router.push("/todos" + (val === "all" ? "" : `/${val}`));
    });
  };

  return (
    <section>
      {counterValue} <button onClick={() => setCounterVal((x) => x + 1)}>Inc</button>
      Current Todos
      <hr />
      <span>Filter:</span>
      <select value={filter} onChange={(evt) => setFilter(evt.target.value)}>
        <option value="">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={() => router.prefetch("/foo")}>Prefetch Foo</button>
      <button onClick={() => router.refresh()}>REFRESH</button>
      <button onClick={() => router.back()}>Back</button>
    </section>
  );
};
