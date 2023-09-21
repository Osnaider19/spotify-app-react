import { useDispatch, useSelector } from "react-redux";
import { AlbumsHome } from "../components/albums/AlbumsHome";
import { useGetHome } from "../hooks/useGetHome";
import { PlayListsHome } from "../components/playlist/PlayListsHome";
import { setPlayListUser } from "../redux/facture/playlists/playLists";
import { useEffect } from "react";
import { LoaderCard } from "../components/loader/LoaderCard";
import { BackgroundHome } from "../components/backgrounds/BackgroundHome";
import { CardVertical } from "../components/card/CardVertical";
import { GoodNight } from "../components/goodNight/GoodNight";


export function HomePage() {
  const dispatch = useDispatch();
  const { responseToken } = useSelector((state) => state.authUser);
  const { data, isPending, error } = useGetHome(responseToken?.access_token);
  
  console.log(data);
  useEffect(() => {
    if (data?.playListUser?.items) {
      dispatch(setPlayListUser(data.playListUser.items));
    }
    scrollTo(0, 0);
  }, [data, dispatch]);
  return (
    <section className="bg-[#121212]">
      <div className="relative  flex flex-col gap-x-4 justify-start items-start w-full h-full flex-wrap gap-y-3 pt-[65px]">
        {isPending && <LoaderCard />}
        <BackgroundHome />
        <GoodNight  data={data}/>
        <div className="px-4">
          <section>
            <h2 className="py-3 text-3xl font-extrabold">En tendecias</h2>
            <PlayListsHome playlists={data?.playList?.playlists?.items} />
          </section>
          <section>
            <h2 className="py-3 text-3xl font-extrabold">
              Nuevos lanzamientos
            </h2>
            <AlbumsHome albums={data?.albums?.albums?.items} />
          </section>
        </div>
      </div>
    </section>
  );
}
