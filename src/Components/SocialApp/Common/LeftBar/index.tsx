import { Fragment } from "react";
import MyProfileClass from "./MyProfileClass";
import MutualFriends from "./MutualFriends";
import ActivityFeedClass from "./ActivityFeedClass";
 

const LeftBar = () => {
  return (
    <Fragment>
        <MyProfileClass/>
        <MutualFriends/>
        <ActivityFeedClass/>
    </Fragment>
  );
};

export default LeftBar;
