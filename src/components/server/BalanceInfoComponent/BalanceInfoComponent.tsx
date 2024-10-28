import "./BalanceInfoComponent.css";

import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {FC} from "react";

const BalanceInfoComponent: FC = () => {
  const randomBalance = (Math.random() * 1500).toFixed(2);
  const currentMonth = new Date().toLocaleString("en-US", {month: "long"});

  console.log(randomBalance);
  console.log(currentMonth);

  return (
    <div className="balance-info">
      <div className="balance-points">
        <div className="balance-info-balance border-class-balance">
          <div className="balance-header">Card Balance</div>
          <div className="balance-count">${randomBalance}</div>
          <div className="balance-available">${(1500 - +randomBalance).toFixed(2)} Available</div>
        </div>

        <div className="daily-points border-class-balance">daily-points</div>
      </div>

      <div className="no-payment-due border-class-balance">
        <div className="no-payment-due-month">
          <div className="no-payment-due-header">No Payment Due</div>
          <div className="no-payment-due-current-month">You&#39;ve paid your {currentMonth} balance.</div>
        </div>

        <div className="check-mark">
          <FontAwesomeIcon icon={faCircleCheck}/>
        </div>
      </div>
    </div>
  );
};

export {BalanceInfoComponent};
