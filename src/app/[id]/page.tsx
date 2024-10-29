import "./page.css";

import React from "react";

type Props = {
  params: {
    id: string;
  }
}

const TransactionDetailPage = async (props: Props) => {
  const {params: {id}} = props;

  // const transaction = await transactionService.getById(+id);
  return (
    <div className="transaction-detail-page">
      {/*<BackButtonComponent/>*/}
      {id}
      {/*<TransactionDetailComponent transaction={transaction}/>*/}
    </div>
  );
};

export default TransactionDetailPage;