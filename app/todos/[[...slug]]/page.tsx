import { FC, Suspense, use } from "react";
import Link from "next/link";
import { TodosResult } from "../../../types";
import { Todos } from "./Todos";

async function getTodos(filter: string) {
  const urlBase = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

  const result = await fetch(`${urlBase}/api/todos?filter=${filter}`, { cache: "no-store" });
  return result.json();
}

type RSCProps = {
  params: { slug: string };
  searchParams: { [k: string]: string };
};

export default async function Page({ params }: RSCProps) {
  const todosPromise = await getTodos(params?.slug ?? "");

  return (
    <main>
      <h1>TODOs Page</h1>
      <Suspense fallback={<span>Loading ...</span>}>
        <TodosList todosPromise={todosPromise} />
      </Suspense>
    </main>
  );
}

const TodosList: FC<{ todosPromise: TodosResult }> = (props) => {
  const todos = props.todosPromise;
  return (
    <section>
      <Todos todos={todos} />
      <Link href="/foo">Go to foo</Link>
    </section>
  );
};
