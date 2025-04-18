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
      const url = 'https://essential-fun-2e6b6df39c.strapiapp.com/api/home-page';
      const token = '8a24c5ea77a5327df59a231af99f58a27bdfcad028e3bc9ebd70d2a26a278bf6af84d03d7adcfc0cc1505f1d0af09712cd9b22f4b0505ad2092e929e79d67e18483e9ffbc3dd19a4d95924ee8763b81ef566119b4db7d892fed36b82dcb270d74a6a99450e10c95d82d2cd9bb4cb8a774721b155538800bc570bb862211f2ea1';

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
