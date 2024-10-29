"use client";
import "./TransactionDetailComponent.css";

import {FC} from "react";

import {ITransactions} from "@/models";

interface IProps {
  transaction: ITransactions;
}

const TransactionDetailComponent: FC<IProps> = ({transaction}) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    // Format: DD/MM/YYYY HH:mm
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
  };

  return (
    <div className="transaction-detail-component">
      <div className="detail-amount">${transaction?.amount}</div>

      <div className="detail-data" style={{color: "#b3b3b3"}}>
        <div>{transaction?.nameOfTransaction}</div>

        <div>
          {
            transaction?.date && formatDate(transaction.date)
          }
        </div>
      </div>

      <div className="detail-status-total">
        <div className="detail-status">
          <div>Status: {transaction?.status}</div>
          <div className="detail-description">{transaction?.description}</div>
        </div>

        <div className="detail-total">
          <span>Total</span> <span>${transaction?.amount}</span>
        </div>
      </div>
    </div>
  );
};

export {TransactionDetailComponent};
