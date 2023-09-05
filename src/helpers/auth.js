import { apiCall } from "./apiCall";

const CLIENTID = "db421431148949248690db175ed97034";
const CLIENTSECRET = "f1240057560341979e607a4d3522f1c0";
const REDIRECT_URI = "http://localhost:5173/";

const commonParams = {
  redirect_uri: REDIRECT_URI,
  client_id: CLIENTID,
  client_secret: CLIENTSECRET,
};

export const SpotfifyAuth = async (requeredParams) => {
  try {
    const params = {
      ...requeredParams,
      grant_type: "authorization_code", 
      ...commonParams,
    };
    const searchParams = Object.keys(params).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&")
    console.log(searchParams)
    
    const spotifyCall = await apiCall({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      body: searchParams,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    console.log(spotifyCall);
    return await spotifyCall.json();
  } catch (error) {
    console.log(error);
  }
};
