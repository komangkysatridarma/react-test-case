export interface Article {
  id?: string;
  title: string;
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string;
  source: {
    name: string | null;
  };
  url: string;
  urlToImage: string | null;
}
