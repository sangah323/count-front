import { getCount } from "../../api/counter";

export const getHistory = (result) => {
  return result.map((value) => ({
    id: value.id,
    createdAt: value.createdAt,
  }));
};

export const getInit = async () => {
  const result = await getCount();
  if (result.length <= 0) return { count: 0, history: [] };
  const history = getHistory(result);
  return { count: result[0].value, history };
};
