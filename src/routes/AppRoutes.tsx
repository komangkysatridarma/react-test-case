import { Routes, Route } from "react-router-dom";
import ArticleList from "../features/articles/pages/ArticleList";
import ArticleDetail from "../features/articles/pages/ArticleDetail";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<ArticleList />} />
    <Route path="/article/:id" element={<ArticleDetail />} />
  </Routes>
);

export default AppRoutes;