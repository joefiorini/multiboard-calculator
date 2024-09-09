import { useContext } from "react";
import { TilesContext } from "./context";
import { Tile } from "./shapes/tile";

export const Tiles = () => {
  const context = useContext(TilesContext);
  return (
    <>
      {Array.from({ length: context.tiles.x }, (_, i) => (
        <Tile key={i} />
      ))}
    </>
  );
};
