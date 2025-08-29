import { useState } from "react";
import ArticleCard from "./ArticleCard";
import SearchArea from "./SearchArea";
import articles from "../../data/articles";
import Pagination from "./Pagination";

function AppLayout() {
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const articlesPerPage = 6;

  //Filtering Logic
  const filteredArticles = articles.filter(
    (article) => category === "All" || article.category === category
  );

  // Searching Logic
  const searchedArticles = filteredArticles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate indexes for slicing
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = searchedArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const articlesLength = [currentArticles.length, searchedArticles.length];

  return (
    <div className="min-h-screen bg-eggshell py-15 px-10 max-sm:px-4">
      <SearchArea
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
        category={category}
        articlesLength={articlesLength}
      />

      <div className="mt-15 flex gap-5 flex-wrap px-9 max-md:justify-center max-md:px-1 max-sm:px-0 ">
        {currentArticles.map((article, index) => (
          <ArticleCard key={article.id} articleCard={article} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-8">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          articlesLength={searchedArticles.length}
        />
      </div>
    </div>
  );
}

export default AppLayout;
