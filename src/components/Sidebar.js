import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function Sidebar() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__top">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5616AQGIFudy8Pf4hA/profile-displaybackgroundimage-shrink_200_800/0/1612188180626?e=1635984000&v=beta&t=WWpIoEPb7duneHklO3iBrHWs9r0e5btOskPINKGVfrI"
            alt=""
          />
          <Avatar src={user.photoURL}>{user.email[0].toUpperCase()}</Avatar>
          {/* HARD CODED FOR NOW */}
          <h2>{user.displayName}</h2>
          {/* HARD CODED FOR NOW */}
          <h3>{user.email}</h3>

          <div className="connections">
            <div className="connections_top">
              <h3 className="unhighlights">Connections</h3>
              <p className="highlight__blue">23</p>
            </div>
            <h3 className="highlights">Grow your network</h3>
          </div>

          <div className="plans">
            <div className="plans__container">
              <h3 className="unhighlights">
                Access exclusive tools and insights
              </h3>
              <h3 className="highlights">Try Premium for free</h3>
            </div>
          </div>

          <div className="my_items">
            <div className="my_items__container">
              <TurnedInIcon />
              <h3 className="highlights">My Items</h3>
            </div>
          </div>
        </div>

        <div className="sidebar__bottom">
          <div className="sidebar__bottom__top">
            <h3>Group</h3>
            <h3>Events</h3>
            <h3>Followed Hastags</h3>
          </div>
          <div className="sidebar__bottom__bottom">
            <h3 className="sidebar__bottom__bot">Discover more</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
