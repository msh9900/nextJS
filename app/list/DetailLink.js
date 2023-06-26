"use client";
import React from "react";
import { useRouter } from "next/navigation";
function DetailLink() {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/list");
      }}
    >
      버튼
    </button>
  );
}

export default DetailLink;
