import "./page.css";

import React from "react";

import {BalanceInfoComponent} from "@/components";

export default function HomePage() {
  return (
    <div className={"transactions-list"}>
      <BalanceInfoComponent/>
    </div>
  );
}