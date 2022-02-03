/* eslint-disable @next/next/no-img-element */

import RecentPostItem from "./recentPostItem";

const RecentPost = () => {
  return (
    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
      <div className="section-title section-title-sm position-relative pb-3 mb-4">
        <h3 className="mb-0">Recent Post</h3>
      </div>
      <RecentPostItem />
    </div>
  );
};

export default RecentPost;
