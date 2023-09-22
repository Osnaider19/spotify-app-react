import React from "react";
import { Card } from "../card/Card";

export const PlayListsHome = ({ playlists }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4">
        {playlists?.map((items) => (
          <div key={items.id} className="max-w-[180px]">
            <Card
              image={items?.images[0]?.url}
              description={items?.type}
              title={items?.name}
              id={items?.id}
              mediaType={items?.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
