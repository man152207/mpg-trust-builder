import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const SEO = ({ title, description, path = "" }: SEOProps) => {
  const siteUrl = "https://www.adsmpg.com";
  const fullTitle = `${title} | MPG Solution LLC`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
