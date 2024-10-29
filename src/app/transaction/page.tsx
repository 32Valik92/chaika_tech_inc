import "./page.css";

import React from "react";

import {BackButtonComponent, TransactionDetailComponent} from "@/components";
import {transactionService} from "@/services";

type Props = {
  params: {
    transaction: string;
  }
}

const TransactionDetailPage = async (props: Props) => {
  const {params: {transaction}} = props;

  // I did it, because free hosting doesn't take a confidence data like id
  // const transactionId = parseInt(transaction.replace("transaction", ""), 10);

  const transactionObj = await transactionService.getById(6);
  console.log(transaction);
  return (
    <div className="transaction-detail-page">
      <BackButtonComponent/>
      
      <TransactionDetailComponent transaction={transactionObj}/>
    </div>
  );
};

export default TransactionDetailPage;