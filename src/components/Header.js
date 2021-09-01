import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOptions from "./HeaderOptions";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { auth, db } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { selectUser } from "./../features/userSlice";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      {/* left */}
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
        {/* input */}
        <div className="header__left__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* right */}
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={PeopleIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={SmsIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        {user && (
          <div className="header__profile" onClick={handleSignOut}>
            <Avatar src={user.photoURL} rounded>
              {user.email[0].toUpperCase()}
            </Avatar>
            <p>{user.displayName.split(" ")[0]}</p>
          </div>
        )}

        <HeaderOptions Icon={ViewModuleIcon} title="Work" />
      </div>
    </div>
  );
}

export default Header;
