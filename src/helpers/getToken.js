import { REDIRECT_URI , CLIENT_ID , CLIENT_SECRET } from "../config/config";
import { useGetTokenMutation } from '../redux/facture/auth/authApi'
export const getToken =  (requeredParams) => {
    const commonParams = {
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    };
    const params = {
      ...requeredParams,
      ...commonParams,
    };
    const searchParams = Object.keys(params).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&");
    //console.log(searchParams);
    
    const { data } = useGetTokenMutation(searchParams);
    //console.log(data)

  };