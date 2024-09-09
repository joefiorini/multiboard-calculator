import { createContext } from "react";

export interface State {
  tiles: {
    x: number;
    y: number;
    setTilesX: (x: number) => void;
    setTilesY: (y: number) => void;
  };
}

export type PropsWithContext<T = unknown> = T & {
  context: State;
};

export const TilesContext = createContext<State>({
  tiles: {
    x: 1,
    y: 1,
  },
});
