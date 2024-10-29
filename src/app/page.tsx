// HomePage.tsx
import "./page.css";

import React from "react";

import { BalanceInfoComponent, TransactionsListComponent } from "@/components";
import { transactionService } from "@/services";

export default async function HomePage() {
  const transactions = await transactionService.getAll();

  return (
    <div className="main-transactions-list">
      <BalanceInfoComponent />

      <TransactionsListComponent transactions={transactions} />
    </div>
  );
}
