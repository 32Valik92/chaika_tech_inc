import "./page.css";

import React from "react";

import {BackButtonComponent, TransactionDetailComponent} from "@/components";
import {transactionService} from "@/services";

type Props = {
  params: {
    asdqwe: string;
  }
}

const TransactionDetailPage = async (props: Props) => {
  const {params: {asdqwe}} = props;
  const transaction = await transactionService.getById(+asdqwe);
  console.log(transaction);
  return (
    <div className="transaction-detail-page">
      <BackButtonComponent/>
      
      <TransactionDetailComponent transaction={transaction}/>
    </div>
  );
};

export default TransactionDetailPage;