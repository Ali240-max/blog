function ArticleCard({ articleCard }) {
  return (
    <div className="bg-white shadow-lg rounded-lg  transition-all duration-300 transform hover:translate-y-[-5px] group flex flex-col justify-start overflow-hidden cursor-pointer">
      <img
        className="h-60 object-cover rounded-t-lg
        group-hover:scale-105 transition-all duration-300 transform  "
        src={articleCard.image}
        alt=""
      />
      <div className="px-5 pb-5 mt-3 ">
        <div className="flex justify-between mb-3">
          <span
            className={`rounded-full px-5 text-xs  font-semibold py-1 
          ${
            articleCard.category === "Tech"
              ? "bg-[#dbeafe] text-[#3151b7] "
              : ""
          }
          ${
            articleCard.category === "Travel"
              ? "bg-[#dcfce7] text-[#5d9b74] "
              : ""
          }
          ${
            articleCard.category === "Food"
              ? "bg-[#ffedd5] text-[#cb8d70] "
              : ""
          }`}
          >
            {articleCard.category}
          </span>
          <span className="text-silverlakeblue text-sm">
            {articleCard.readTime}
          </span>
        </div>
        <h1 className="font-bold text-prussianblue text-xl max-w-100 mb-2 transition-all duration-300 transform group-hover:text-silverlakeblue">
          {articleCard.title}
        </h1>
        <p className="max-w-100 text-sm text-stone-700">
          {articleCard.description}
        </p>
        <div className="mt-5 w-full border-t-silverlakeblue/40 border-t flex justify-between text-sm">
          <p className="text-silverlakeblue mt-3">{articleCard.author}</p>
          <p className="text-silverlakeblue mt-3">{articleCard.date}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
