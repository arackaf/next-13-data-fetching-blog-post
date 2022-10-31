export type Todo = {
  name: string;
  priority: "high" | "medium" | "low";
};

export type TodosResult = {
  data: Todo[];
};
