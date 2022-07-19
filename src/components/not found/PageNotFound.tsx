import styled from "styled-components";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFoundWrapper = styled.div`
  text-align: center;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PageNotFound = () => {
  return (
    <PageNotFoundWrapper>
      <Link to="/" className="home-link">
        <i className="fa fa-chevron-left"></i>Back to Home
      </Link>
      <img
        className="page-not-found"
        src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
      ></img>
    </PageNotFoundWrapper>
  );
};

export default PageNotFound;
