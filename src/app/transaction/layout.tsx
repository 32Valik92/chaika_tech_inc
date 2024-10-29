import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Transaction Detail",
  description: "",
};

type PropType = { children: React.ReactNode }

const TransactionDetailLayout = ({children}: PropType) => {
  return (
    <div className="TransactionDetailLayout">
      {children}
    </div>
  );
};

export default TransactionDetailLayout;
