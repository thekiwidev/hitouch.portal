import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PersonalContext from "../contexts/PersonalContext";

import Loading from "./Loading";

function UserInfoForm() {
  const { user } = useSelector((state) => state.auth);
  const { info, status, messsage, getInfo, updateInfo } =
    useContext(PersonalContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherNames: "",
    email: "",
    phoneNumber: "",
    dob: "",
    firstLang: "",
    nationality: "",
    passportNum: "",
    passportExpDate: "",
    gender: "",
    maritalStatus: "",
  });

  const {
    firstName = formData.firstName || "",
    lastName,
    otherNames,
    email,
    phoneNumber,
    dob,
    firstLang,
    nationality,
    passportNum,
    passportExpDate,
    gender,
    maritalStatus,
  } = formData;

  useEffect(() => {
    if (status === "rejected") {
      console.log(messsage);
    }
    // get the logged i user personal info
    getInfo(user.token);
    console.log(info);

    // update the form state
    setFormData(info);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    if (e.target === document.querySelector("#gender")) {
      setFormData((prevState) => ({
        ...prevState,
        maritalStatus: e.target.value,
      }));
    }
    if (e.target === document.querySelector("#maritalStaus")) {
      setFormData((prevState) => ({
        ...prevState,
        maritalStatus: e.target.value,
      }));
    }
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    updateInfo(user.token, info._id, formData);
  };

  // Show Loading components if the request is loading
  if (status === "pending") return <Loading />;

  return (
    <section className="dashboard-section-user-info-form">
      <form onSubmit={onSubmit} className="form-field">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={onChange}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={onChange}
        />
        <input
          type="text"
          name="otherNames"
          id="otherNames"
          placeholder="Other Names"
          value={otherNames}
          onChange={onChange}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="placeholder@email.com"
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={onChange}
        />
        <input
          type="date"
          name="dob"
          id="dob"
          placeholder="Date of Birth"
          value={dob}
          onChange={onChange}
        />
        <input
          type="text"
          name="firstLang"
          id="firstLang"
          placeholder="First Language"
          value={firstLang}
          onChange={onChange}
        />
        <input
          type="text"
          name="nationality"
          id="nationality"
          placeholder="nationality"
          value={nationality}
          onChange={onChange}
        />
        <input
          type="text"
          name="passportNum"
          id="passportNum"
          placeholder="Passport Number"
          value={passportNum}
          onChange={onChange}
        />
        <input
          type="date"
          name="passportExpDate"
          id="passportExpDate"
          placeholder="Passport Exiration Date"
          value={passportExpDate}
          onChange={onChange}
        />

        <select name="gender" id="gender" onChange={onChange} value={gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          name="maritalStaus"
          id="maritalStaus"
          onChange={onChange}
          value={maritalStatus}
        >
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>

        <button type="submit" onClick={onSubmit}>
          Save & Continue
        </button>
      </form>
    </section>
  );
}
export default UserInfoForm;
