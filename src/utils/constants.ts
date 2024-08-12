export const ARTICLE_PER_PAGE = 6;
const PRODUCTION_DOMAIN = "https://cloud-hosting-app.vercel.app";
const DELELOPMENT_DOMAIN = "http://localhost:3000";

export const DOMAIN =
  process.env.NODE_ENV === "development"
    ? DELELOPMENT_DOMAIN
    : PRODUCTION_DOMAIN;
