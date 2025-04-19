// app/page.js
import Head from 'next/head';
import HomeCompo from './components/Home';

export default async function Home() {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-page?populate[list_values][populate]=image_list`;
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;


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
        <HomeCompo  />
      </>
    );
  }
}
