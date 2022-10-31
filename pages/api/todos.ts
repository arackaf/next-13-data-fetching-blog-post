// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Todo, TodosResult } from "../../types";

const ALL_TODOS: Todo[] = [
  { name: "Learn Next 13 data fetching", priority: "high" },
  { name: "Learn Next 13 RSCs", priority: "high" },
  { name: "Learn Next 13 api routes", priority: "medium" },
  { name: "Learn Vercel hosting dns configuration", priority: "medium" },
  { name: "Learn JavaScript fundamentals", priority: "low" },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse<TodosResult>) {
  await new Promise((res) => setTimeout(res, 2000));

  const filter = req.query.filter;
  res.status(200).json({ data: ALL_TODOS.filter((todo) => (filter ? todo.priority === filter : true)) });
}
