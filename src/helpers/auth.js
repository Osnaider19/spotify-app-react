import { apiCall } from "./apiCall";
import { CLIENT_SECRET , CLIENT_ID , REDIRECT_URI } from "../config/config";

const commonParams = {
  redirect_uri: REDIRECT_URI,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
};

export const SpotfifyAuth = async (requeredParams) => {
  try {
    const params = {
      ...requeredParams,
      ...commonParams,
    };
    const searchParams = Object.keys(params).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&")
    //console.log(searchParams)
    
    const spotifyCall = await apiCall({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      body: searchParams,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    //console.log(spotifyCall);
    return await spotifyCall.json();
  } catch (error) {
    console.log(error);
  }
};
