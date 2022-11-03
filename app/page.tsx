import { Suspense } from "react";
import { Todos } from "./Todos";
import { RSCProps } from "../types";

import "./styles.css";

async function getTodos(filter: string) {
  const urlBase = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

  const result = await fetch(`${urlBase}/api/todos?filter=${filter}`, { cache: "no-store" });
  return result.json();
}

async function getColors() {
  const urlBase = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

  const result = await fetch(`${urlBase}/api/colors`, { cache: "no-store" });
  return result.json();
}

export default async function Page({ searchParams }: RSCProps) {
  const todos = await getTodos(searchParams?.filter ?? "");
  const colors = await getColors();

  return (
    <main>
      <h1>TODOs Page</h1>
      <Suspense fallback={<span>Loading ...</span>}>
        <section>
          <Todos todos={todos} colors={colors} />
        </section>
      </Suspense>
    </main>
  );
}
