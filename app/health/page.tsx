import { getNewsSearch } from "@/api";
import { Artical } from "@/components";
import { removeDuplicateData } from "@/utils";

const Health = async () => {
  const newsBusiness = await getNewsSearch("Health");
  const filterArticles = removeDuplicateData(newsBusiness);

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

export default Health;
