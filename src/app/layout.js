// app/layout.js
'use client'; 
import { useEffect, useState } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  const [metaData, setMetaData] = useState({
    title: 'Default Title',
    description: 'Default Description',
  });

  // Fetch the data dynamically from the API
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://precious-gem-ec04bd9295.strapiapp.com/api/home-page';
      const token = '31864013ce6e76aff855372484eb77fa0e5918734b59ed57fd7be2298698ac08561c6d6eac00feb637f9d8783367895ca12dbbf0b9e625b5e6fd7f94ce9e17e517473c6ea62145bd8e5ff36a4d0f081a0394fe567eabe63a553a3ee0c2f0b7332e4793b63d7ea2957ff72b5d0760ffd3d394395fb8a2e1b07450a9d0e2e89479';

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMetaData({
            title: data?.data?.meta_title || 'Default Title',
            description: data?.data?.meta_description || 'Default Description',
          });
        } else {
          console.error('Failed to fetch meta data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="author" content="Your Name" />
      </head>
      <body>{children}</body>
    </html>
  );
}
