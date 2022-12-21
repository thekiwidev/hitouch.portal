import { useState } from "react";

function VisaInfo() {
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
    dob,
    firstLang,
    nationality,
    passportNum,
    passportExpDate,
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
          type="text"
          name="passportExpDate"
          id="passportExpDate"
          placeholder="Passport Exiration Date"
          value={passportExpDate}
          onChange={onChange}
        />

        <button type="submit">Save & Continue</button>
      </form>
    </section>
  );
}
export default VisaInfo;
