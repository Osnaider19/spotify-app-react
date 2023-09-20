import { Card } from "../card/Card";

export const AlbumsHome = ({ albums }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-start gap-4">
        {albums?.map((album) => (
          <div key={album.id} className="max-w-[180px]">
            <Card
              image={album?.images[0]?.url}
              description={album?.type}
              title={album?.name}
              id={album?.id}
              mediaType={album?.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
