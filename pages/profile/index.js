import ProfileCard from "../../components/profile/ProfileCard";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import classes from "./index.module.css";

const Profile = () => {
  return (
    <div className={classes.page}>
      <ProfileCard />
      <ProfileInfo />
    </div>
  );
};

export default Profile;
