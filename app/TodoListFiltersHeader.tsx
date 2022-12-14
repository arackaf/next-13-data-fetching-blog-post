"use client";

import { FC, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export const TodoListFiltersHeader: FC<{}> = () => {
  const [routing, startTransition] = useTransition();

  const router = useRouter();
  const searchParams = useSearchParams();

  const [filter, _setFilter] = useState<string>(searchParams.get("filter")! ?? "");

  const setFilter = (val: string) => {
    _setFilter(val);
    startTransition(() => {
      router.push("/" + (val ? `?filter=${val}` : ""));
    });
  };

  return (
    <section>
      Current Todos {routing ? <span style={{ marginLeft: "5px" }}>Loading ...</span> : null}
      <hr />
      <div className="todo-filters">
        <span>Filter:</span>
        <select value={filter} onChange={(evt) => setFilter(evt.target.value)}>
          <option value="">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </section>
  );
};
