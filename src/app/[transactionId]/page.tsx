import "./page.css";

import React from "react";

import {BackButtonComponent, TransactionDetailComponent} from "@/components";
import {transactionService} from "@/services";

type Props = {
  params: {
    transactionId: string;
  }
}

const TransactionDetailPage = async (props: Props) => {
  const {params: {transactionId}} = props;

  // I did it, because free hosting doesn't take a confidence data like id
  const transaction_Id = parseInt(transactionId.replace("transaction", ""), 10);

  const transaction = await transactionService.getById(transaction_Id);
  console.log(transaction);
  return (
    <div className="transaction-detail-page">
      <BackButtonComponent/>
      
      <TransactionDetailComponent transaction={transaction}/>
    </div>
  );
};

export default TransactionDetailPage;