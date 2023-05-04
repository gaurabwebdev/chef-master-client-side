import React from "react";

const QnaCard = ({ q }) => {
  const { id, question, answer } = q;
  return (
    <div className="card  bg-amber-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{question}</h2>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QnaCard;
