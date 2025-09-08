import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBackGrounColor } from "../redux/actions/utilityActions";

export default function Layout({ children }) {
    const location = useLocation();
    const dispatch = useDispatch();
    const background = useSelector((state) => state.utility.defaultBgClass);
    useEffect(() => {
      // Change background based on URL
      if (location.pathname === "/login") {
        dispatch(setBackGrounColor("App"));
      }else {
        dispatch(setBackGrounColor("app-content"));
      }
    }, [location, dispatch]);
  return <div className={`${background}`}>
     {children}
    </div>;
}