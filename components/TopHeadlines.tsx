import { getNewsTopHeadlines } from "@/api";
import { removeDuplicateData } from "@/utils";
import { Artical } from ".";

const TopHeadlines = async () => {
  const newsTop = await getNewsTopHeadlines();

  const filterArticals = removeDuplicateData(newsTop);

  return (
    <div className="w-[700px]">
      {filterArticals.map((artical, index) => (
        <div key={`${artical.title}- ${index}`}>
          <Artical data={artical} />
        </div>
      ))}
    </div>
  );
};

export default TopHeadlines;
