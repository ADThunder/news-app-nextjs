import { getNewsSearch } from "@/api";
import { Artical } from "@/components";
import { removeDuplicateData } from "@/utils";
import React from "react";

const ESports = async () => {
  const newsScience = await getNewsSearch("ESports");
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

export default ESports;
