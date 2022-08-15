import ProfileCard from "../../components/UserProfile/ProfileCard";
import ProfileInfo from "../../components/UserProfile/ProfileInfo";
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
