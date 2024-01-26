import { getNewsSearch } from "@/api";
import { Artical } from "@/components";
import { removeDuplicateData } from "@/utils";
import React from "react";

const Bitcoin = async () => {
  const newsScience = await getNewsSearch("Bitcoin");
  const filterArticles = removeDuplicateData(newsScience);

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

export default Bitcoin;
