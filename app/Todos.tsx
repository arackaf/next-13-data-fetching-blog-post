import { FC } from "react";
import type { TodosResult } from "../types";
import { TodoListFiltersHeader } from "./TodoListFiltersHeader";

export const Todos: FC<{ todos: TodosResult }> = ({ todos }) => {
  return (
    <section>
      <TodoListFiltersHeader />
      <ul>
        {(todos?.data ?? []).map((todo, idx) => (
          <li key={idx}>
            {todo.name} - {todo.priority}
          </li>
        ))}
      </ul>
    </section>
  );
};
