import { connectDB } from "@/util/database";
import Link from "next/Link";
export default async function Home() {
  const db = (await connectDB).db("mypage");

  let result = await db.collection("testTable").find().toArray();

  return (
    <div>
      <h4>안녕</h4>
      <Link href={`/list`}>
        <h4>리스트로 이동</h4>
      </Link>
    </div>
  );
}
