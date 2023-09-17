
import { AlbumsPrincipal } from "../components/albums/AlbumsPrincipal";
import { Players } from "../components/players/Players";

export function Home() {
  
  return (
    <section className="bg-[#121212]">
      <div className="relative p-4 flex flex-col gap-x-4 justify-start items-start w-full h-full flex-wrap gap-y-3 pt-[65px]">
        <Players/>
        <AlbumsPrincipal/>
      </div>
    </section>
  );
}
