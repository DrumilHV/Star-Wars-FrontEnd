import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface SearchData {
  searchParam: string | number;
  name?: string;
  page: number | 1;
}
let maxCount: number;
const fetchData = async ({
  searchParam,
  name,
  page,
}: SearchData): Promise<any> => {
  const finalUrl = name
    ? `${baseUrl}/${searchParam}/?search=${name}`
    : `${baseUrl}/${searchParam}/?page=${page}`;

  try {
    const response = await axios.get(finalUrl);
    maxCount = Number(response.data.count);

    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it at the calling site if needed
  }
};
export const giveCount = (): number => {
  return maxCount;
};

interface searchParams {
  searchParam: string; //the category to search for like people, planet, vehicle etc.
  searchString: string; //the person/character to search for like Watto, luke etc.
}

// this is only for fetching the search data ie. whatever comes from searchbox
export const searchIndividualData = async ({
  searchParam,
  searchString,
}: searchParams): Promise<any> => {
  try {
    const finalSearchUrl = `${baseUrl}/${searchParam}/?search=${
      searchString ? searchString : " "
    }`;
    console.log(finalSearchUrl);
    const response = await axios.get(finalSearchUrl);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it at the calling site if needed
  }
};
export default fetchData;
