import { getNewsSearch } from "@/api";
import { Artical } from "@/components";
import { removeDuplicateData } from "@/utils";
import React from "react";

const Lifestyle = async () => {
  const newsLifestyle = await getNewsSearch("Lifestyle");
  const filterArticles = removeDuplicateData(newsLifestyle);

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

export default Lifestyle;
