import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import QnaCard from "./QnaCard";

const Blogs = () => {
  const { qna } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold text-center my-5">Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  mx-5 my-3 gap-3 justify-center">
        {qna ? qna?.map((q) => <QnaCard key={q.id} q={q}></QnaCard>) : ""}
      </div>
      <button className="btn bg-amber-700 border-0  mt-5">
        Download All QNA
      </button>
    </div>
  );
};

export default Blogs;
