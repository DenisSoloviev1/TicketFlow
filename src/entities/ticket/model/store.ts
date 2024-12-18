import { create } from "zustand";
import { ITicket, Currency } from "./types";

interface TicketStore {
  activeCurrency: Currency;
  setActiveCurrency: (activeCurrency: Currency) => void;
}

export const useTicketStore = create<TicketStore>((set) => ({
  activeCurrency: "RUB",
  setActiveCurrency: (newActiveCurrency) =>
    set({ activeCurrency: newActiveCurrency }),
}));
