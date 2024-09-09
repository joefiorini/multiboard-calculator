import { Input } from "@nextui-org/react";
import { useContext } from "react";
import { TilesContext } from "./context";

export const Inputs = () => {
  const context = useContext(TilesContext);

  return (
    <div className="w-24">
      <Input
        label="x"
        onChange={(e) => {
          context.tiles.setTilesX(Number(e.currentTarget.value));
        }}
        value={String(context.tiles.x)}
      />
      <Input
        label="y"
        onChange={(e) => {
          context.tiles.setTilesY(Number(e.currentTarget.value));
        }}
        value={String(context.tiles.y)}
      />
    </div>
  );
};
