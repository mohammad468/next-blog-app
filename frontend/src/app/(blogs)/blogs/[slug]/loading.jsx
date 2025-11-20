import Spinner from "@/ui/Spinner";
import React from "react";

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center gap-x-4">
      <Spinner />
      <span className="text-lg text-secondary-500">در حال بارگزاری پست</span>
    </div>
  );
}

export default Loading;
