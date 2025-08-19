import { Search } from "lucide-react";

function SearchArea({
  setCategory,
  category,
  articlesLength,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="bg-stone-100 rounded-2xl px-5 py-8 shadow-lg ">
      <h3 className="text-xl mb-3 font-semibold">Search Articles</h3>
      <div className="relative group focus-within:translate-y-[-5px] transition-transform duration-200">
        <Search className="absolute top-3 left-3 w-5 h-5 text-prussianblue transition-all duration-300 transform" />
        <input
          type="text"
          className="border-prussianblue border rounded-md px-3 py-2 placeholder:text-prussianblue text-prussianblue transition-all duration-300 transform pl-10"
          placeholder="Search articles ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <h3 className="text-xl mb-3 font-semibold mt-5">Filter by Category</h3>

      <div className="flex gap-5 max-sm:flex-wrap">
        <button
          className={`border-prussianblue border rounded-md px-5 py-3 text-prussianblue font-semibold
        cursor-pointer hover:bg-silverlakeblue hover:text-white transition-all duration-300 transform inline-block flex-shrink-0 hover:scale-115 hover:border-white
        ${category === "All" ? "bg-silverlakeblue text-white border-0" : ""}`}
          onClick={() => setCategory("All")}
        >
          All
        </button>
        <button
          className={`border-prussianblue border rounded-md px-5 py-3  text-prussianblue font-semibold
          cursor-pointer hover:bg-silverlakeblue hover:text-white transition-all duration-300 transform hover:scale-115 hover:border-white inline-block flex-shrink-0
          ${
            category === "Tech" ? "bg-silverlakeblue text-white border-0" : ""
          }`}
          onClick={() => setCategory("Tech")}
        >
          Tech
        </button>
        <button
          className={`border-prussianblue border rounded-md px-5 py-3  text-prussianblue font-semibold cursor-pointer hover:bg-silverlakeblue hover:text-white transition-all duration-300 transform hover:scale-115 hover:border-white inline-block flex-shrink-0
          ${
            category === "Travel" ? "bg-silverlakeblue text-white border-0" : ""
          }`}
          onClick={() => setCategory("Travel")}
        >
          Travel
        </button>
        <button
          className={`border-prussianblue border rounded-md px-5 py-3  text-prussianblue font-semibold
        cursor-pointer hover:bg-silverlakeblue hover:text-white transition-all duration-300 transform hover:scale-115 hover:border-white inline-block flex-shrink-0
        ${category === "Food" ? "bg-silverlakeblue text-white border-0" : ""}`}
          onClick={() => setCategory("Food")}
        >
          Food
        </button>
      </div>
      <div className="mt-10 w-full border-t-silverlakeblue/40 border-t">
        <p className="text-silverlakeblue mt-3">
          Showing {articlesLength[0]} of {articlesLength[1]} articles
        </p>
      </div>
    </div>
  );
}

export default SearchArea;
