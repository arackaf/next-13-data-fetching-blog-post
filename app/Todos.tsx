import { use, ReactNode } from "react";
import type { ColorsResult, TodosResult } from "../types";
import { TodoListFiltersHeader } from "./TodoListFiltersHeader";

type Props = { todos: Promise<TodosResult>; colors: Promise<ColorsResult> };

type TodosType = (props: Props) => any;

export const Todos: TodosType = async (props: Props) => {
  const todos = use(props.todos);
  const colors = use(props.colors);

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
