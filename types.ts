export type Todo = {
  name: string;
  priority: "high" | "medium" | "low";
  color: string;
};

export type Color = {
  name: string;
  value: string;
};

export type TodosResult = {
  data: Todo[];
};

export type ColorsLookup = {
  [key: string]: string;
};

export type ColorsResult = {
  data: ColorsLookup;
};
