"use client";
import "./BackButtonComponent.css";

import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouter} from "next/navigation";
import React, {FC} from "react";

const BackButtonComponent: FC = () => {
  const router = useRouter();

  return (
    <div className="back-button-container">
      <FontAwesomeIcon icon={faChevronLeft} onClick={() => router.back()}/>
    </div>
  );
};

export {BackButtonComponent};
