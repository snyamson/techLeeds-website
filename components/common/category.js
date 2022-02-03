import CategoryItem from "../categoryItem";

const Category = ({ name }) => {
  return (
    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
      <div className="section-title section-title-sm position-relative pb-3 mb-4">
        <h3 className="mb-0">{name}</h3>
      </div>
      <div className="link-animated d-flex flex-column justify-content-start">
        <CategoryItem />
      </div>
    </div>
  );
};

export default Category;
