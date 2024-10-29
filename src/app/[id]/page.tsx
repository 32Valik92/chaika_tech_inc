import "./page.css";

import React from "react";

import {transactionService} from "@/services";

type Props = {
  params: {
    id: string;
  }
}

const TransactionDetailPage = async (props: Props) => {
  const {params: {id}} = props;
  console.log(id);
  const transaction = await transactionService.getById(+id);
  console.log(transaction);
  return (
    <div className="transaction-detail-page">
      {/*<BackButtonComponent/>*/}
dscdcsdcs
      {/*<TransactionDetailComponent transaction={transaction}/>*/}
    </div>
  );
};

export default TransactionDetailPage;