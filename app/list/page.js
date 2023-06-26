import { connectDB } from "@/util/database";
import Link from "next/Link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("mypage");

  let result = await db.collection("testTable").find().toArray();
  console.log(result);
  return (
    <div className="list-bg">
      {result.map((val, i) => {
        return (
          <div className="list-item" key={result[i]._id}>
            <h4>{result[i]._id}</h4>
            <Link href={`/detail/${result[i]._id}`}>
              <h4>{val.title}</h4>
            </Link>
            <DetailLink />
            <p>{val.content}</p>
          </div>
        );
      })}
    </div>
  );
}
