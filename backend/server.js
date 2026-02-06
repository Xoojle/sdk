import express from "express";
import searchRoutes from "./routes/search.js";
import newsRoutes from "./routes/news.js";

const app = express();
app.use(express.json());

app.use("/api/search", searchRoutes);
app.use("/api/news", newsRoutes);

app.listen(3000, () => {
  console.log("Xoojle backend running on port 3000");
});
