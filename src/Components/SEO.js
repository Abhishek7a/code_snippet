import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ title, description }) {
  return (
    <Helmet>
      <title>Code Snippet</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default SEO;
