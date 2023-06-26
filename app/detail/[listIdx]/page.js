import React from "react";
import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";
async function page(props) {
  const db = (await connectDB).db("mypage");

  let result = await db.collection("testTable").findOne({
    _id: new ObjectId("649813c6eefdf96f179f951c"),
  });
  console.log(props);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <h4>{result.content}</h4>
    </div>
  );
}

export default page;
