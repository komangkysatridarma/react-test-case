import React from "react";
import { Card, Typography } from "antd";
import { Article } from "../../../core/models/Article";
import { useNavigate } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${article.title}`, { state: { article } });
  };

  return (
    <Card
      hoverable
      onClick={handleClick}
      cover={
        article.urlToImage && (
          <img
            alt={article.title}
            src={article.urlToImage}
            style={{ height: 200, objectFit: "cover" }}
          />
        )
      }
    >
      <Title level={4}>{article.title}</Title>
      <Text type="secondary">
        By {article.author || "Unknown"} |{" "}
        {new Date(article.publishedAt).toLocaleString()}
      </Text>
      <Paragraph ellipsis={{ rows: 2 }}>
        {article.description || "No description available."}
      </Paragraph>
    </Card>
  );
};

export default ArticleCard;
