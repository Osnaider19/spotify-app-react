import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { NavPlay } from "./NavPlay";
import { Songs } from "./Songs";
import { TbPointFilled } from "react-icons/tb";
import { transformLikes } from "../../helpers/transform";

export const PlayList = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const { id } = useParams();
  const url = `https://api.spotify.com/v1/playlists/${id}`;
  const { data } = useFetch(url, responseToken?.access_token);
  console.log(data);

  const select = {
    imagen: data?.images[0]?.url,
    type: data?.type,
    name: data?.name,
    description: data?.description,
    linkUser: data?.owner?.href,
    nameUser: data?.owner?.display_name,
    like: data?.followers?.total,
    tracks: data?.tracks?.items,
  };

  return (
    <div className="relative min-w-full w-full h-full font-lato">
      <div
        className={`absolute left-0 top-0 w-full h-full bg-gradient-to-t from-transparent via-[#920f0f] to-[#920f0f]`}
      ></div>
      <div className="relative flex z-10 pt-[85px] px-6 w-full">
        <div className="max-h-[240px] max-w-[240px] w-full h-full overflow-hidden shadow-2xl">
          <div className="w-full h-full">
            <img
              src={select.imagen}
              id="bg_playlist"
              alt=""
              className="w-full h-full imagen"
            />
          </div>
        </div>
        <div className="w-full min-h-full">
          <div className="flex flex-col min-h-full justify-end items-start px-4">
            <div className="w-full">
              <p className="capitalize ">{select.type}</p>
              <p className="font-lato font-black py-1 text-5xl  w-full">
                {select.name}
              </p>
              <span className="py-2 block text-[#AAA8A9] font-semibold text-sm">
                {select.description}
              </span>
              <div className="py-1">
                <Link to={select.linkUser}>
                  <strong className="hover:underline px-1 text-sm">
                    {select.nameUser}
                  </strong>
                </Link>
                <TbPointFilled className="inline-block text-[9px]" />
                {select.like > 0 && (
                  <>
                    <span className="px-1 text-sm">
                      {transformLikes(select?.like)}
                      likes
                    </span>
                    <TbPointFilled className="inline-block text-[9px] " />
                  </>
                )}

                <span className="px-1 text-sm">
                  {select?.tracks?.length} songs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full  h-[500px] mt-8 ">
        <div className="absolute left-0 top-0 h-[400px]  w-full bg-gradient-to-t from-transparent via-black/20 to-black/20"></div>
        <div className="relative z-10">
          <NavPlay />
          <Songs songs={select.tracks} />
        </div>
      </div>
    </div>
  );
};