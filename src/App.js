import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    phone: "",
    address: "",
    gender: "",
    education: "Select",
  });
  const [error, setError] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const showData = () => {
    console.log("Form Data:", form);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.username.length === 0) {
      setError((state) => ({
        ...state,
        username: "It could not be null",
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        username: "",
      }));
    }
    if (form.fullName.length === 0) {
      setError((state) => ({
        ...state,
        fullName: "It could not be null",
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        fullName: "",
      }));
    }
    if (form.phone.length === 0) {
      setError((state) => ({
        ...state,
        phone: "It could not be null",
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        phone: "",
      }));
    }
    if (form.address.length === 0) {
      setError((state) => ({
        ...state,
        address: "It could not be null",
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        address: "",
      }));
    }
    if (form.gender.length === 0) {
      setError((state) => ({
        ...state,
        gender: "Select your gender",
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        gender: "",
      }));
    }
    if (form.education === "Select") {
      setError((state) => ({
        ...state,
        education: "Select your qualification",
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        education: "",
      }));
    }

    showData();
  };

  return (
    <div className="App">
      <header className="App-container">
        <form onSubmit={onSubmit}>
          <label>
            username:
            <input onChange={onChange} name="username" value={form.username} />
          </label>
          {!!error.username && <div className="error">{error.username}</div>}
          <hr />
          <label>
            Full Name:
            <input onChange={onChange} name="fullName" value={form.fullName} />
            {!!error.fullName && <div className="error">{error.fullName}</div>}
          </label>
          <hr />
          <label>
            Phone:
            <input onChange={onChange} name="phone" value={form.phone} />
            {!!error.phone && <div className="error">{error.phone}</div>}
          </label>
          <hr />
          <label>
            Address:
            <input onChange={onChange} name="address" value={form.address} />
          </label>
          {!!error.address && <div className="error">{error.address}</div>}
          <hr />
          <label>
            Gender:
            <div>
              <input
                type="radio"
                value="male"
                name="gender"
                onChange={onChange}
              />
              Male
              <input
                type="radio"
                value="female"
                name="gender"
                onChange={onChange}
              />
              Female
              <input
                type="radio"
                value="other"
                name="gender"
                onChange={onChange}
              />
              Others
            </div>
          </label>
          {!!error.gender && <div className="error">{error.gender}</div>}

          <hr />
          <label>
            Education:
            <select onChange={onChange} name="education" value={form.education}>
              <option value="select">Select</option>
              <option value="ssc">SSC</option>
              <option value="hsc">HSC</option>
              <option value="bsc">BSC</option>
            </select>
          </label>
          {!!error.education && <div className="error">{error.education}</div>}

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
