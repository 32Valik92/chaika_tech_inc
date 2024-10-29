import "./page.css";

import React from "react";

import {BackButtonComponent, TransactionDetailComponent} from "@/components";
import {transactionService} from "@/services";

type Props = {
  params: {
    transaction_id: string;
  }
}

const TransactionDetailPage = async (props: Props) => {
  const {params: {transaction_id}} = props;

  // I did it, because free hosting doesn't take a confidence data like id
  const transactionId = parseInt(transaction_id.replace("transaction_", ""), 10);

  const transaction = await transactionService.getById(transactionId);
  console.log(transaction);
  return (
    <div className="transaction-detail-page">
      <BackButtonComponent/>
      
      <TransactionDetailComponent transaction={transaction}/>
    </div>
  );
};

export default TransactionDetailPage;