import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button, Typography, Image, Space, Row, Col } from "antd";
import { Article } from "../../../core/models/Article";

const { Title, Text, Paragraph } = Typography;

const ArticleDetail: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const article = state?.article as Article;

  if (!article) {
    return (
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col style={{ maxWidth: 375, width: "100%", padding: 24 }}>
          <Text>Article not found</Text>
          <Button onClick={() => navigate("/")} style={{ marginTop: 16 }}>
            Back to Home
          </Button>
        </Col>
      </Row>
    );
  }

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col style={{ maxWidth: 375, width: "100%", padding: 24 }}>
        <Button onClick={() => navigate(-1)} style={{ marginBottom: 16 }}>
          Back
        </Button>
        <Card>
          <Title level={2}>{article.title}</Title>
          <Space direction="vertical" size="middle">
            {article.urlToImage && (
              <Image
                src={article.urlToImage}
                alt={article.title}
                style={{ maxHeight: 400, width: "100%", objectFit: "cover" }}
              />
            )}
            <Text type="secondary">
              By {article.author || "Unknown"} |{" "}
              {new Date(article.publishedAt).toLocaleString()}
            </Text>
            <Text strong>Source: {article.source?.name || "N/A"}</Text>
            <Paragraph>{article.content || article.description}</Paragraph>
            <Button
              type="primary"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              block
            >
              Read Full Article
            </Button>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default ArticleDetail;
