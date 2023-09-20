import React from "react";
import { Card } from "../card/Card";

export const ArtistAlbums = ({ albums }) => {
  return (
    <section className="w-full h-full relative px-6 py-5">
      <div>
        <h2 className="py-3 text-2xl font-bold">Albums</h2>
        <div className="w-full h-full flex justify-between  gap-y-3 items-center flex-wrap">
          {albums?.map((album) => (
            <Card
            key={album.id}
              id={album.id}
              image={album.images[1].url}
              description={album.type}
              mediaType={album.type}
              title={album.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
