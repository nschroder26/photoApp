import Card from "../UI/Card";
import classes from "./ProfileCard.module.css";

const DUMMY_USERS = {
  id: "u1",
  name: "Jovie James",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Baby_Face.JPG/1200px-Baby_Face.JPG",
};

const ProfileCard = () => {
  return (
    <Card className={classes.card}>
      <img
        alt="profile-pic"
        src={DUMMY_USERS.image}
        className={classes.image}
      />
      <div className={classes.username}>{DUMMY_USERS.name}</div>
    </Card>
  );
};

export default ProfileCard;
