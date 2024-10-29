import "./page.css";

import React from "react";

import {BackButtonComponent, TransactionDetailComponent} from "@/components";
import {transactionService} from "@/services";

type Props = {
  params: {
    id: string;
  }
}

const TransactionDetailPage = async (props: Props) => {
  const {params: {id}} = props;
  const transaction = await transactionService.getById(6);
  return (
    <div className="transaction-detail-page">
      <BackButtonComponent/>

      <TransactionDetailComponent transaction={transaction}/>
    </div>
  );
};

export default TransactionDetailPage;