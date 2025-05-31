import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Spin, message } from "antd";
import { getWSJNews } from "../../../core/services/newsApi";
import ArticleCard from "../components/ArticleCard";
import { Article } from "../../../core/models/Article";

const { Title } = Typography;

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getWSJNews();
        setArticles(data);
      } catch (error) {
        message.error("Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <Spin
        tip="Loading..."
        size="large"
        style={{ display: "block", marginTop: 50 }}
      />
    );
  }

  return (
    <div style={{ padding: "24px" }}>
      <Title level={2} style={{ marginBottom: "24px" }}>
        The Wall Street Journal - Latest News
      </Title>
      <Row gutter={[16, 16]}>
        {articles.map((article, index) => (
          <Col key={index} xs={24} sm={12} lg={8}>
            <ArticleCard article={article} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ArticleList;
