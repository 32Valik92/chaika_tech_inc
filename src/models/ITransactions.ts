export interface ITransactions {
  id: number;
  type: string;
  amount: number;
  nameOfTransaction: string;
  description: string;
  date: string;
  status: string;
  authorizedUsers: string | null;
  icons: string
}