import type { NextApiRequest, NextApiResponse } from "next";
import { Todo, TodosResult } from "../../types";

const ALL_TODOS: Todo[] = [
  { name: "Learn Next 13 data fetching", priority: "high", color: "Blue" },
  { name: "Learn Next 13 RSCs", priority: "high", color: "Blue" },
  { name: "Learn Next 13 api routes", priority: "medium", color: "Green" },
  { name: "Learn Vercel hosting dns configuration", priority: "medium", color: "Red" },
  { name: "Learn JavaScript fundamentals", priority: "low", color: "Blue" },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse<TodosResult>) {
  console.log("requesting");
  await new Promise((res) => setTimeout(res, 1000));

  const filter = req.query.filter;
  res.status(200).json({ data: ALL_TODOS.filter((todo) => (!filter || filter === "all" ? true : todo.priority === filter)) });
}
