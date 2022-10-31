import { FC, Suspense, use } from "react";
import { TodosResult } from "../types";
import { Todos } from "./Todos";

async function getTodos(filter: string) {
  const result = await fetch("http://localhost:3000/api/todos?filter=" + filter, { cache: "no-store" });
  return result.json();
}

type RSCProps = {
  params: unknown;
  searchParams: { [k: string]: string };
};

export default async function Page({ params, searchParams }: RSCProps) {
  const todosPromise = getTodos(searchParams?.filter ?? "");

  return (
    <main>
      <h1>TODOs Page</h1>
      <Suspense fallback={<span>Loading ...</span>}>
        <TodosList todosPromise={todosPromise} />
      </Suspense>
    </main>
  );
}

const TodosList: FC<{ todosPromise: Promise<TodosResult> }> = (props) => {
  const todos = use(props.todosPromise);
  return <Todos todos={todos} />;
};
