import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfo, updatedInfo } from "../features/visa/visaSlice";

function VisaForm() {
  const dispatch = useDispatch();
  const { visa, status, message } = useSelector((state) => state.visa);
  const { user } = useSelector((state) => state.auth);

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

  useEffect(() => {
    if (status === "rejected") {
      console.log(message);
    }

    dispatch(getInfo(user.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, message]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      nationality === "" ||
      passportExpDate === "" ||
      passportNum === "" ||
      dob === "" ||
      firstLang === ""
    ) {
      console.log(`Fill in all fields`);
    }
    dispatch(updatedInfo(visa._id, formData));
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
export default VisaForm;
