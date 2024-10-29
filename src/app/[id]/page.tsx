import "./page.css";

import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

import {TransactionDetailComponent} from "@/components";
import {transactionService} from "@/services";

type Props = {
  params: {
    id: string;
  }
}

const TransactionDetailPage = async (props: Props) => {
  const {params: {id}} = props;
  const transaction = await transactionService.getById(+id);
  return (
    <div className="transaction-detail-page">
      <a href={"/"} className="back-button-container">
        <FontAwesomeIcon icon={faChevronLeft}/>
      </a>

      <TransactionDetailComponent transaction={transaction}/>
    </div>
  );
};

export default TransactionDetailPage;