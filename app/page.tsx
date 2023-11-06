"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CmPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/cm");
  }, []);

  return null;
}
