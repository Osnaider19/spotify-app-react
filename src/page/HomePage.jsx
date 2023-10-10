import { AlbumsHome } from "../components/albums/AlbumsHome";
import { PlayListsHome } from "../components/playlist/PlayListsHome";
import { useEffect } from "react";
import { LoaderCard } from "../components/loader/LoaderCard";
import { BackgroundHome } from "../components/backgrounds/BackgroundHome";
import { GoodNight } from "../components/goodNight/GoodNight";
import {  useGetHome } from "../hooks/useGetHome";
import { LoaderHome } from "../components/loader/LoaderHome";

export function HomePage() {
  const { data , isLoading } = useGetHome();
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  if (isLoading) return <LoaderHome/>
  return (
    <section className="min-w-full w-full overflow-hidden overflow-y-auto">
      <div className="relative  flex flex-col gap-x-4 justify-start items-start w-full h-full flex-wrap gap-y-3 pt-[65px]">
        {isLoading && <LoaderCard />}
        <BackgroundHome />
        <GoodNight data={data} />
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
