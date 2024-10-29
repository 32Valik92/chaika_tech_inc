import "./TransactionsListComponent.css";

import React from "react";

import {transactionService} from "@/services";
import {TransactionComponent} from "@/components";

const TransactionsListComponent = async () => {
  const transactions = await transactionService.getAll();

  return (
    <div className="transactions-list-component">
      <div className="transactions-list-header">
        Latest Transactions
      </div>

      <div className="transactions-list">
        {
          transactions.map(transaction =>
            <TransactionComponent
              transaction={transaction}
              key={transaction.id}
            />
          )
        }
      </div>

    </div>
  );
};

export {TransactionsListComponent};