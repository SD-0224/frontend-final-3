export async function fetchApiData(endpoint) {
  try {
    const response = await fetch(
      `https://backend-final-3.onrender.com/api/${endpoint}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
