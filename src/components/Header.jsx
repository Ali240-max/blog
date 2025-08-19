import { Book, BookOpen } from "lucide-react";
function Header() {
  return (
    <div className="px-8 py-10 bg-richblack">
      <h1 className="text-eggshell text-5xl font-bold mb-5 flex items-center gap-3 ">
        <BookOpen className="w-9 h-9 text-silverlakeblue" />
        Ali&apos;s <span className="text-silverlakeblue">Blog</span>
      </h1>
      <p className="text-eggshell text-xl">
        Sharing insights on technology, travel adventures, and culinary
        discoveries. Join me on this journey of exploration and learning.
      </p>
    </div>
  );
}

export default Header;
