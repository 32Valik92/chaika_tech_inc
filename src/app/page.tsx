import "./page.css";

import React from "react";

import {BalanceInfoComponent, TransactionsListComponent} from "@/components";

export default function HomePage() {
  return (
    <div className={"main-transactions-list"}>
      <BalanceInfoComponent/>

      <TransactionsListComponent/>
    </div>
  );
}