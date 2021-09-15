import axios from "axios";

// TODO: ask API team to supply hours array
import { timeSlot } from "../assets/data";
export const apiUrl =
  "https://cookie-stand-api-lab34.herokuapp.com/api/v1/cookie_stands/";

// Common practice to have a "Data Access Object" to encapsulate fetched data
export class CookieStand {
  constructor(info) {
    this.id = info.id;
    this.location = info.location;
    this.minCustomersPerHour = info.minimum_customers_per_hour;
    this.maxCustomersPerHour = info.maximum_customers_per_hour;
    this.avgCookiesPerSale = info.average_cookies_per_sale;
    this.cookiesEachHour = info.hourly_sales || [...timeSlot].fill(0);
    this.totalDailyCookies = this.cookiesEachHour.reduce(
      (sum, val) => sum + val
    );
  }

  static fromValues(values) {
    console.log(values);
    const info = {
      id: -1, // will be overwritten once cache revalidates
      location: values.location,
      minimum_customers_per_hour: values.minCustomers,
      maximum_customers_per_hour: values.maxCustomers,
      average_cookies_per_sale: values.avgCookies,
    };

    return new CookieStand(info);
  }
}

// get a JSON Web Token from server
export async function getToken(values) {
  const url = "https://cookie-stand-api-lab34.herokuapp.com/api/token/";

  const response = await axios.post(url, values);

  const refreshUrl =
    "https://cookie-stand-api-lab34.herokuapp.com/api/token/refresh";

  const refreshResponse = await axios.post(refreshUrl, {
    refresh: response.data.refresh,
  });

  return refreshResponse.data.access;
}

// GET from API with authentication
export async function fetchWithToken(url, token) {
  const config = makeConfig(token);

  const response = await axios.get(url, config);

  const stands = response.data.map((info) => new CookieStand(info));

  // Sort alphabetically
  stands.sort((a, b) => {
    if (a.location < b.location) return -1;
    if (a.location > b.location) return 1;
    return 0;
  });

  return stands;
}

// POST to API with authentication
export async function postWithToken(token, values) {
  const body = {
    id: -1, // will be overwritten once cache revalidates
    location: values.location,
    minimum_customers_per_hour: values.min,
    maximum_customers_per_hour: values.max,
    average_cookies_per_sale: values.avg,
  };

  const config = makeConfig(token);

  const response = await axios.post(apiUrl, body, config);

  return response.data;
}

export async function deleteWithToken(id, token) {
  const config = makeConfig(token);

  const url = apiUrl + id + "/";

  await axios.delete(url, config);
}

// helper function to handle getting Authorization headers EXACTLY right
function makeConfig(token) {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
}
