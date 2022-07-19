import styled from "styled-components";
import { Description, Heading } from "../../styles/Style";
import "./Category.css";

const CategoryHeading = styled(Heading)`
  text-align: center;
  margin-top: 35px;
`;
const CategoryDescription = styled(Description)`
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
`;

const category = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxzb2ZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Chairs",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxzb2ZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Sofa",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxzb2ZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Tables",
  },
];

const Category = () => {
  return (
    <>
      <div className="category-section">
        <CategoryHeading>Our Products</CategoryHeading>
        <CategoryDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          <br />
          excepturi sit quam quod, sunt reiciendis pariatur! Ipsum quam fuga
          similique!
        </CategoryDescription>
        <div className="category-container">
          {category.map((category) => (
            <div className="category-box" key={category.id}>
              <div className="category-img-box">
                <img src={category.img} alt="" />
              </div>
              <div className="detail-box">
                <h4 className="category-heading-box">{category.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
