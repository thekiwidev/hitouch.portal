import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

function EducationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherNames: "",
    email: "",
    phoneNumber: "",
    dob: "",
    firstLang: "",
    citizenship: "",
    passportNum: "",
    passportExpDate: "",
    gender: "",
    maritalStatus: "",
  });

  const {
    firstName,
    lastName,
    otherNames,
    email,
    phoneNumber,
    dob,
    firstLang,
    citizenship,
    passportNum,
    passportExpDate,
    gender,
    maritalStatus,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="dashboard-section-user-info-form">
      <form onSubmit={onSubmit} className="form-field">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="School Name"
          value={firstName}
          onChange={onChange}
        />

        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Sschool Address"
          value={lastName}
          onChange={onChange}
        />

        <input
          type="text"
          name="otherNames"
          id="otherNames"
          placeholder="School Info"
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
          type="text"
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
          name="citizenship"
          id="citizenship"
          placeholder="Citizenship"
          value={citizenship}
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
          type="text"
          name="passportExpDate"
          id="passportExpDate"
          placeholder="Passport Exiration Date"
          value={passportExpDate}
          onChange={onChange}
        />

        <input
          type="text"
          name="gender"
          id="gender"
          placeholder="Gender"
          value={gender}
          onChange={onChange}
        />

        <input
          type="text"
          name="maritalStatus"
          id="maritalStatus"
          placeholder="Marital Status"
          value={maritalStatus}
          onChange={onChange}
        />
        <button type="submit">Save & Continue</button>
      </form>
    </section>
  );
}
export default EducationForm;
