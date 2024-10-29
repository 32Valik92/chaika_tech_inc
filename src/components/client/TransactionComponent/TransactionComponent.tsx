"use client";
import "./TransactionComponent.css";

import {faApple} from "@fortawesome/free-brands-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouter} from "next/navigation";
import React, {FC} from "react";

import {ITransactions} from "@/models";

interface IProps {
  transaction: ITransactions;
}

const TransactionComponent: FC<IProps> = ({transaction}) => {
  const router = useRouter();

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

  const showDetails = (id: number): void => {
    console.log(id);
    // I did it, because free hosting doesn't take a confidence data like id
    router.push("/transaction2");
  };

  return (
    <div className="transaction-component" onClick={() => showDetails(2)}>
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
  );
};

export {TransactionComponent};
