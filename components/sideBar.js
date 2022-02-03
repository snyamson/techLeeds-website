import Category from "./common/category";
import SearchBar from "./common/searchBar";
import RecentPost from "./recentPost";

const SideBar = () => {
  return (
    <div className="col-lg-4">
      <SearchBar />
      <Category name="Categories" />
      <RecentPost />
    </div>
  );
};

export default SideBar;
