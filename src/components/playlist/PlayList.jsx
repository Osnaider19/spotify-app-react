import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { NavPlay } from "./NavPlay";
export const PlayList = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const { id } = useParams();
  const url = `https://api.spotify.com/v1/playlists/${id}`;
  const { data } = useFetch(url, responseToken.access_token);
  console.log(data);
  // const [data ,setData] = useState(null);
  //   const { id } = useParams();
  //   const getPlayList = async () => {
  //     const res = await fetch(`https://api.spotify.com/v1/playlists/${id}`,{
  //       headers: {
  //         Authorization: `Bearer ${responseToken.access_token}`,
  //       },
  //     })
  //     const json = await res.json();
  //     setData(json);
  //     console.log(data);
  //   }

  //   useEffect(()=>{
  //     getPlayList()
  //   }, [id])
  return (
    <div className="relative min-w-full w-full h-full">
      <div className={`absolute left-0 top-0 w-full h-full bg-gradient-to-t from-transparent via-[#920f0f] to-[#920f0f]`}></div>
      <div className="relative flex z-10 pt-[70px] px-6 w-full">
        <div className="max-h-[240px] max-w-[240px] w-full h-full overflow-hidden shadow-2xl">
          <div className="w-full h-full">
            <img src={data?.images[0]?.url} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="w-full min-h-full">
          <div className="flex flex-col min-h-full justify-end items-start px-4">
            <div>
              <p className="capitalize">{data?.type}</p>
              <p className="text-5xl font-bold py-1 ">{data?.name}</p>
              <span className="py-2">{data?.description}</span>
              <div className="py-1">
                <Link to={data?.owner?.href}>
                  <strong className="hover:underline">
                    {data?.owner?.display_name}
                  </strong>
                </Link>
                <span> * {data?.followers?.total} likes * </span>
                <span>{data?.tracks?.items.length} songs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full  h-[500px] mt-8 ">
        <div className="absolute left-0 top-0 h-[400px]  w-full bg-gradient-to-t from-transparent via-black/20 to-black/20"></div>
        <div className="relative z-10">
          <NavPlay/>
        </div>
      </div>
    </div>
  );
};
