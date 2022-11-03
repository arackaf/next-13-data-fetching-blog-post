import { FC } from "react";
import type { ColorsResult, TodosResult } from "../types";
import { TodoListFiltersHeader } from "./TodoListFiltersHeader";

export const Todos: FC<{ todos: TodosResult; colors: ColorsResult }> = ({ todos, colors }) => {
  return (
    <section>
      <TodoListFiltersHeader />
      <ul>
        {(todos?.data ?? []).map((todo, idx) => (
          <li key={idx} style={{ color: colors.data[todo.color] }}>
            {todo.name} - {todo.priority}
          </li>
        ))}
      </ul>
    </section>
  );
};
