import type { NextApiRequest, NextApiResponse } from "next";
import { Color, ColorsLookup, ColorsResult } from "../../types";

const ALL_COLORS: ColorsLookup = {
  Red: "#FF0000",
  Green: "#00FF00",
  Blue: "#0000FF",
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ColorsResult>) {
  await new Promise((res) => setTimeout(res, 1000));

  res.status(200).json({ data: ALL_COLORS });
}
