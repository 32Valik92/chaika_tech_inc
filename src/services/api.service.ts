import {promises as fs} from "fs";

import {ITransactions} from "@/models";

const transactionService = {
  getAll: async (): Promise<ITransactions[]> => {
    console.log(process.cwd());
    let file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");

    file = JSON.parse(file);

    return file as unknown as ITransactions[];
  }
};

export {
  transactionService
};