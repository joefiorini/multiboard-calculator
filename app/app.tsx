import { useState } from "react";
import { Inputs } from "./inputs";
import { Tiles } from "./tiles";
import { TilesContext } from "./context";

export const App = () => {
  const [tilesX, setTilesX] = useState(1);
  const [tilesY, setTilesY] = useState(1);
  return (
    <main className="bg-background text-foreground dark">
      <TilesContext.Provider
        value={{ tiles: { x: tilesX, y: tilesY, setTilesX, setTilesY } }}
      >
        <Tiles />
        <Inputs />
      </TilesContext.Provider>
    </main>
  );
};
