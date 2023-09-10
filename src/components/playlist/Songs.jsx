import { ItemsTable } from "./ItemsTable";
import { TableSongs } from "./TableSongs";

export const Songs = ({ songs }) => {
  return (
    <div className="py-4">
      <div>
        <TableSongs>
          {songs?.map((song, index) => (
            <ItemsTable
              key={song.track.id}
              num={index}
              track={song?.track}
              album={song?.track?.album}
              artists={song?.track?.artists}
              date={song?.added_at}
              duration={song?.track?.duration_ms}
              image={song.track?.album?.images[2]?.url}
            />
          ))}
        </TableSongs>
      </div>
    </div>
  );
};
