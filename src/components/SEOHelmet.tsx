import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
  keywords: string;
  path: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({ title, description, keywords, path }) => {
  const baseUrl = 'https://cesmelihotel.com';
  const fullUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
    </Helmet>
  );
};

export default SEOHelmet;