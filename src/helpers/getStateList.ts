//api to get states by country code

interface Subdivision {
  name: string;
}

type RequestOptions = {
  method: string;
  headers: Headers;
  redirect?: RequestRedirect; // Adjusted type to be compatible with RequestInit
};

const api_key = process.env.NEXT_PUBLIC_API_KEY as string;

var headers = new Headers();
headers.append("X-CSCAPI-KEY", api_key);

var requestOptions: RequestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

interface ResponseType {
  id: number;
  name: string;
  iso2: string;
}

export const getStatesByCountryCode = async (
  countryCode: string
): Promise<string[]> => {
  const url = `https://api.countrystatecity.in/v1/countries/${countryCode}/states`;
  try {
    const res = await fetch(url, requestOptions);
    const response = await res.json();
    console.log(response);
    if (res.ok) {
      const states = response.map((item: ResponseType) => item.name);
      return states;
    } else {
      console.warn("No subdivisions found for this country.");
      return [];
    }
    return [];
  } catch (error) {
    console.log("Error fetching states:", error);
    return [];
  }
};
