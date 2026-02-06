import { rankResults } from "../services/relevance.js";

export function search(req, res) {
  const query = req.query.q || "";
  const results = rankResults(query);

  res.json({
    query,
    clarityScore: 0.91,
    results
  });
}
