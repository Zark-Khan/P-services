// app/page.js
import Head from 'next/head';
import HomeCompo from './components/Home';

export default async function Home() {
  const url = 'https://essential-fun-2e6b6df39c.strapiapp.com/api/home-page?populate[list_values][populate]=image_list';
  const token = '8a24c5ea77a5327df59a231af99f58a27bdfcad028e3bc9ebd70d2a26a278bf6af84d03d7adcfc0cc1505f1d0af09712cd9b22f4b0505ad2092e929e79d67e18483e9ffbc3dd19a4d95924ee8763b81ef566119b4db7d892fed36b82dcb270d74a6a99450e10c95d82d2cd9bb4cb8a774721b155538800bc570bb862211f2ea1';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const metaTitle = data?.data?.meta_title || 'Default Title';
    const metaDescription = data?.data?.meta_description || 'Default Description';

    return (
      <>
        <Head>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="author" content="Your Name" />
        </Head>
        <HomeCompo data={data?.data || {}} />
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <>
        <Head>
          <title>Default Title</title>
          <meta name="description" content="Default Description" />
        </Head>
        <HomeCompo data={{}} />
      </>
    );
  }
}
