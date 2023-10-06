export const getDetailsAlbum = async (url, token) => {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      }
  
      const data = await res.json();
  
      return {
        data,
      };
    } catch (error) {
      console.log(error);
    }
  };
  