import "./BalanceInfoComponent.css";

import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const BalanceInfoComponent = () => {
  // Function to determine current season and day in season
  const getDayOfSeason = (): number => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0 = January, 11 = December
    const dayOfMonth = today.getDate();

    // function to determine whether a year is a leap year
    const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    // Number of days in each month
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let dayOfSeason = 0;

    // Spring: March (2) - May (4)
    if (month >= 2 && month <= 4) {
      dayOfSeason = dayOfMonth + (month === 3 ? daysInMonth[2] : 0) + (month === 4 ? daysInMonth[2] + daysInMonth[3] : 0);
    }
    // Summer: June (5) - August (7)
    else if (month >= 5 && month <= 7) {
      dayOfSeason = dayOfMonth + (month === 6 ? daysInMonth[5] : 0) + (month === 7 ? daysInMonth[5] + daysInMonth[6] : 0);
    }
    // Autumn: September (8) - November (10)
    else if (month >= 8 && month <= 10) {
      dayOfSeason = dayOfMonth + (month === 9 ? daysInMonth[8] : 0) + (month === 10 ? daysInMonth[8] + daysInMonth[9] : 0);
    }
    // Winter: December (11) - February (1)
    else {
      if (month === 11) {
        dayOfSeason = dayOfMonth;
      } else if (month === 0) {
        dayOfSeason = daysInMonth[11] + dayOfMonth;
      } else if (month === 1) {
        dayOfSeason = daysInMonth[11] + daysInMonth[0] + dayOfMonth;
      }
    }

    return dayOfSeason;
  };

  // function for calculate points, used idea from Fibonacci
  const calculateDailyPoints = (dayOfSeason: number): string => {
    let points = 0;

    if (dayOfSeason === 1) {
      points = 2;
    } else if (dayOfSeason === 2) {
      points = 3;
    } else if (dayOfSeason > 2) {
      let a = 2;
      let b = 3;

      for (let i = 3; i <= dayOfSeason; i++) {
        const c = (a + b * 0.6).toFixed(2);
        a = +b.toFixed(2);
        b = +c;
      }
      points = b;
    }

    return points > 1000 ? `${Math.round(points / 1000)}K` : `${Math.round(points)}`;
  };

  const randomBalance = (Math.random() * 1500).toFixed(2);
  const currentMonth = new Date().toLocaleString("en-US", {month: "long"});

  const dayOfSeason = getDayOfSeason();
  const dailyPoints = calculateDailyPoints(dayOfSeason);

  return (
    <div className="balance-info">
      <div className="balance-points">
        <div className="balance-info-balance border-class-balance">
          <div className="balance-header">Card Balance</div>
          <div className="balance-count">${randomBalance}</div>
          <div className="balance-available">${(1500 - +randomBalance).toFixed(2)} Available</div>
        </div>

        <div className="daily-points border-class-balance">
          <div>Daily Points</div>
          <div style={{color: "#b3b3b3"}}>{dailyPoints}</div>
        </div>
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
