import { getNewsSearch } from "@/api";
import { removeDuplicateData } from "@/utils";
import React from "react";
import { RandomArticle } from ".";

const RandomNews = async () => {
  const randomNews = await getNewsSearch("random news");
  const filterArticles = removeDuplicateData(randomNews);

  return (
    <div className="mt-4 w-[450px] border-l border-gray-300 ">
      <h1 className="pl-2 text-2xl font-bold underline">Random News</h1>
      {filterArticles.map((artical, index) => (
        <div key={`${artical?.title}-${index}`}>
          <RandomArticle data={artical} />
        </div>
      ))}
    </div>
  );
};

export default RandomNews;
