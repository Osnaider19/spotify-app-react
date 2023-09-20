import { useDispatch, useSelector } from "react-redux";
import { AlbumsHome } from "../components/albums/AlbumsHome";
import { useGetHome } from "../hooks/useGetHome";
import { PlayListsHome } from "../components/playlist/PlayListsHome";
import { setPlayListUser } from "../redux/facture/playlists/playLists";
import { useEffect } from "react";
import { LoaderCard } from "../components/loader/LoaderCard";

export function HomePage() {
  const dispatch = useDispatch();
  const { responseToken } = useSelector((state) => state.authUser);
  const { data, isPending, error } = useGetHome(responseToken?.access_token);
  useEffect(() => {
    if (data?.playListUser?.items) {
      dispatch(setPlayListUser(data.playListUser.items));
    }
    scrollTo(0,0)
  }, [data, dispatch]);
  return (
    <section className="bg-[#121212]">
      <div className="relative p-4 flex flex-col gap-x-4 justify-start items-start w-full h-full flex-wrap gap-y-3 pt-[65px]">
        {isPending && <LoaderCard />}
        <PlayListsHome playlists={data?.playList?.playlists?.items} />
        <AlbumsHome albums={data?.albums?.albums?.items} />
      </div>
    </section>
  );
}
