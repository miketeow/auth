import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const PrivatePage = () => {
  const currentUser = { role: "user" };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-8">Private Page: {currentUser.role}</h1>
      <Button asChild>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default PrivatePage;
