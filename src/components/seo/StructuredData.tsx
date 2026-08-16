import type { Graph } from 'schema-dts';

const baseUrl = 'https://leonardo-wilis-portfolio.vercel.app';

const unifiedGraphSchema: Graph = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Leonardo Wilis',
      description:
        'Portfolio of Leonardo Wilis, a Frontend Developer building modern, performant, and immersive web experiences.',
      publisher: {
        '@id': `${baseUrl}/#person`,
      },
    },

    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Leonardo Wilis',
      jobTitle: 'Frontend Developer',
      url: baseUrl,

      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Medan',
        addressCountry: 'ID',
      },

      sameAs: [
        'https://github.com/leowilis',
        'https://www.linkedin.com/in/leonardo-wilis-dev/',
        'https://www.instagram.com/code.leonardo/',
      ],
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(unifiedGraphSchema),
      }}
    />
  );
}
