import {promises as fs} from "fs";

import {ITransactions} from "@/models";

const transactionService = {
  getAll: async (): Promise<ITransactions[]> => {
    let file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");

    file = JSON.parse(file);
    const parseFile = file as unknown as ITransactions[];
    parseFile.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return file as unknown as ITransactions[];
  },
  getById: async (id: number): Promise<ITransactions | undefined> => {
    let file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");

    file = JSON.parse(file);
    const parseFile = file as unknown as ITransactions[];
    return parseFile.find((tran) => tran.id === id);
  }
};

export {
  transactionService
};