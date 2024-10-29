"use client";
import { useSearchParams } from "next/navigation";
import React, { FC } from "react";

import { BackButtonComponent, TransactionDetailComponent } from "@/components";
import { ITransactions } from "@/models";

const TransactionDetailPage: FC = () => {
  const searchParams = useSearchParams();

  const transaction = {
    id: searchParams.get("id"),
    type: searchParams.get("type"),
    amount: searchParams.get("amount"),
    nameOfTransaction: searchParams.get("nameOfTransaction"),
    description: searchParams.get("description"),
    date: searchParams.get("date"),
    status: searchParams.get("status"),
    authorizedUsers: searchParams.get("authorizedUsers"),
  };

  return (
    <div className="transaction-detail-page">
      <BackButtonComponent />

      <TransactionDetailComponent transaction={transaction as unknown as ITransactions} />
    </div>
  );
};

export default TransactionDetailPage;
