import "./page.css";

import React from "react";

import {BackButtonComponent} from "@/components";
import {transactionService} from "@/services";

type Props = {
  params: {
    id: string;
  }
}

const TransactionDetailPage = async (props: Props) => {
  const {params: {id}} = props;
  console.log(id);

  const transaction = await transactionService.getAll();
  console.log(transaction);
  return (
    <div className="transaction-detail-page">
      <BackButtonComponent/>
      {/*{transaction.map(value => <div key={value.id}>{value.id}</div>)}*/}
      {/*<TransactionDetailComponent transaction={transaction}/>*/}
    </div>
  );
};

export default TransactionDetailPage;