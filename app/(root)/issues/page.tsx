import { Button } from "@radix-ui/themes";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Issues</h1>
      <div>
        <Button>
          <Link href="/issues/create">
            <Plus size={16} className="inline-block" /> Add Issue
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
