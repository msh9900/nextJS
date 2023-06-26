import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("mypage");

  let result = await db.collection("testTable").find().toArray();
  console.log(req.method);
  switch (req.method) {
    case "GET":
      return res.status(200).json(result);
    case "POST":
      return res.status(200).json("POST요청");
  }
}
