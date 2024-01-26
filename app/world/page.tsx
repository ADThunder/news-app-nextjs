import { getNewsSearch } from "@/api";
import { Artical } from "@/components";
import { removeDuplicateData } from "@/utils";
import React from "react";

const World = async () => {
  const newsWorld = await getNewsSearch("world");
  const filterArticles = removeDuplicateData(newsWorld);

  return (
    <div className="w-[700px]">
      {filterArticles?.map((artical, index) => (
        <div key={`${artical?.title}-${index}`}>
          <Artical data={artical} />
        </div>
      ))}
    </div>
  );
};

export default World;
