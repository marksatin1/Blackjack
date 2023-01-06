import { FC } from "react";
import { createContext } from "react";
import { CardsContextState } from "../Interfaces/CardsContextState";
import { ProviderProps } from "../Interfaces/ProviderProps";
import { docInst } from "../Util/axios";

const deck_count = 6;

export const CardsContext = createContext<CardsContextState | null>(null);

const CardsContextProvider: FC<ProviderProps> = ({ children }) => {
  const getNewDeck = async () => {
    try {
      return await docInst.get(`/new/shuffle/?deck_count=${deck_count}`);
    } catch (e) {
      console.log(e);
    }
  };

  const getNewCard = async (deck_id: string) => {
    try {
      return await docInst.get(`/${deck_id}/draw/?count=1`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CardsContext.Provider value={{ getNewDeck, getNewCard }}>{children}</CardsContext.Provider>
  );
};

export default CardsContextProvider;
