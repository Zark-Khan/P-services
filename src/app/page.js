// app/page.js

import HomeCompo from "./components/Home";
async function fetchProjectData() {
  const url = 'https://precious-gem-ec04bd9295.strapiapp.com/api/project-elevens';  // Corrected endpoint
  const token = '31864013ce6e76aff855372484eb77fa0e5918734b59ed57fd7be2298698ac08561c6d6eac00feb637f9d8783367895ca12dbbf0b9e625b5e6fd7f94ce9e17e517473c6ea62145bd8e5ff36a4d0f081a0394fe567eabe63a553a3ee0c2f0b7332e4793b63d7ea2957ff72b5d0760ffd3d394395fb8a2e1b07450a9d0e2e89479';
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Add Bearer token here
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("first", data);
    
    return data;  // Return the data here
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;  // Return null on error
  }
}

export default async function Home() {
  const data = await fetchProjectData();

  

  return (
    <>
      <HomeCompo data={data?.data || []}/>
    </>
  );
}
