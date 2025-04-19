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
      const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-page`;
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

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
