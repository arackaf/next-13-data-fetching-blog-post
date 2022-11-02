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

  //console.log({ segment });
  const [filter, _setFilter] = useState<string>(searchParams.get("filter")!);

  const setFilter = (val: string) => {
    _setFilter(val);
    startTransition(() => {
      router.push("/todos_qs" + (val ? `?filter=${val}` : ""));
    });
  };

  return (
    <section>
      {counterValue} <button onClick={() => setCounterVal((x) => x + 1)}>Inc</button>
      Current Todos {routing ? "Loading ..." : null}
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
