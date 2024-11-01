"use client";
import "./TransactionComponent.css";

import {faApple} from "@fortawesome/free-brands-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, {FC} from "react";

import {ITransactions} from "@/models";

interface IProps {
  transaction: ITransactions;
}

const TransactionComponent: FC<IProps> = ({transaction}) => {

  // random silver color
  const grayValue = Math.floor(Math.random() * 100) + 140;
  const randomGray = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;

  // check if a date is the last 7 days
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(now.getDate() - 7);

    if (date >= sevenDaysAgo) {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      // name's day of today
      return daysOfWeek[date.getDay()];
    } else {
      // "MM/DD/YYYY"
      return date.toLocaleDateString("en-US");
    }
  };

  return (
    <Link href={{
      pathname: `/${transaction.id}`,
      query: {
        id: transaction.id,
        type: transaction.type,
        amount: transaction.amount,
        nameOfTransaction: transaction.nameOfTransaction,
        description: transaction.description,
        date: transaction.date,
        status: transaction.status,
        authorizedUsers: transaction.authorizedUsers,
        icons: transaction.icons
      }
    }} className="link-component">
      <div className="transaction-component">

        <div className="transaction-img">
          <div className="img-div" style={{backgroundColor: randomGray}}>
            <FontAwesomeIcon icon={faApple}/>
          </div>
        </div>

        <div className="transaction-info">
          <div className="info-name-amount">
            <div className="info-name">{transaction.nameOfTransaction}</div>

            <div className="info-amount">
              {transaction.type === "payment" ? "+$" : "$"}{transaction.amount}
            </div>
          </div>

          <div className="info-status-description hidden-text">
            {transaction.status === "Pending" ? "Pending - " : ""} {transaction.description}
          </div>

          <div className="info-authorizedUsers-date hidden-text">
            {transaction.authorizedUsers !== "" ? `${transaction.authorizedUsers} - ` : ""}{formatDate(transaction.date)}
          </div>
        </div>

        <div className="info-details">
          <div className="details-icon">
            <FontAwesomeIcon icon={faChevronRight}/>
          </div>
        </div>

      </div>
    </Link>
  );
};

export {TransactionComponent};
