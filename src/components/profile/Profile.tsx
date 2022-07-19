import { useSelector } from "react-redux";
import styled from "styled-components";
import { Description, Heading } from "../../styles/Style";
import "./Profile.css";

const ProfileDescription = styled(Description)`
  margin-left: 35px;
  font-size: 20px;
`;

const Profile = () => {
  const user = useSelector((state: any) => state.user);
  const { currentUser } = user;
  return (
    <>
      <div className="profile-section">
        <Heading>Your Profile</Heading>
        <ProfileDescription className="profile-content name">
          Name : {currentUser.displayName}
        </ProfileDescription>
        <ProfileDescription className="profile-content">
          Email : {currentUser.email}
        </ProfileDescription>
      </div>
    </>
  );
};

export default Profile;
