import { Link, Outlet } from "react-router-dom";
import {
  TbUserExclamation,
  TbTicket,
  TbSchool,
  TbAddressBook,
} from "react-icons/tb";
// import UserInfoForm from "../components/UserInfoForm";

function Userinfo() {
  return (
    <>
      <div className="personal-info-page">
        <header className="user-info-header">
          <h1>Update Your Information</h1>
        </header>

        <div className="personal-info-page-body">
          <div className="personal-info-page-tab">
            <Link to="/userinfo/basic">
              <TbUserExclamation /> Personal Information
            </Link>
            <Link to="/userinfo/education">
              <TbSchool />
              Education Information
            </Link>
            <Link to="/userinfo/visa">
              <TbTicket /> Visa Information
            </Link>
            <Link to="/userinfo/others">
              <TbAddressBook /> Other Informations
            </Link>
          </div>

          <div className="form-contents">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default Userinfo;
