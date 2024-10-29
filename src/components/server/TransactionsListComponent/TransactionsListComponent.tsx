import "./TransactionsListComponent.css";

import React from "react";

import { TransactionComponent } from "@/components";
import { ITransactions } from "@/models";

interface TransactionsListProps {
  transactions: ITransactions[];
}

const TransactionsListComponent: React.FC<TransactionsListProps> = ({ transactions }) => {
  return (
    <div className="transactions-list-component">
      <div className="transactions-list-header">
        Latest Transactions
      </div>

      <div className="transactions-list">
        {transactions.map((transaction) => (
          <TransactionComponent
            transaction={transaction}
            key={transaction.id}
          />
        ))}
      </div>
    </div>
  );
};

export { TransactionsListComponent };
