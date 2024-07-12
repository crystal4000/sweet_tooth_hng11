export const fetchProducts = async (page: number, size: number) => {
  const baseUrl = process.env.REACT_APP_BASE_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const appId = process.env.REACT_APP_APP_ID;
  const organizationId = process.env.REACT_APP_ORGANIZATION_ID;

  const url = `${baseUrl}/products?organization_id=${organizationId}&reverse_sort=false&page=${page}&size=${size}&Appid=${appId}&Apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
