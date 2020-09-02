import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { TYPE_RESULT, TYPES } from "../const/typeResult";

const SurveyResult = (props) => {
  const location = useLocation();

  const typeResult = location.pathname.split("/")[2];
  const history = useHistory();

  const validateUrl = () => {
    if (!TYPES.includes(typeResult) || !typeResult) {
      history.push("/");
    }
  };

  useEffect(() => validateUrl(), []);

  return (
    <>
      {typeResult && TYPES.includes(typeResult) && (
        <div>
          <div>{TYPE_RESULT[typeResult].name}</div>
          <div>{TYPE_RESULT[typeResult].description}</div>
          <div>{TYPE_RESULT[typeResult].famousSaying}</div>
          <div>{TYPE_RESULT[typeResult].lastSaying}</div>
        </div>
      )}
    </>
  );
};

export default SurveyResult;
