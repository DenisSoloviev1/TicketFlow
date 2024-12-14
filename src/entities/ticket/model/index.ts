export interface ITicket {
  id: string;
  cost: string;
  from: {
    time: string;
    city: string;
    date: string;
  };
  to: {
    time: string;
    city: string;
    date: string;
  };
  transfer: number | null;
}
