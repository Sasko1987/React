import { useState } from "react";
import Card from "./assets/components/Card.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    dateofBirth: "",
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (value, inputName) => {
    setData({ ...data, [inputName]: value.target.value });
    console.log(data);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (
      data.name === "" ||
      data.lastName === "" ||
      data.phoneNumber === "" ||
      data.dateofBirth === ""
    ) {
      alert("all fiels are mandatory");
    } else {
      setShowForm(true);
    }
  };
  return (
    <>
      {!showForm && (
        <form onSubmit={handleClick}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={data.name}
            name="name"
            placeholder="Enter Your Name"
            onChange={(e) => handleChange(e, "name")}
          />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            value={data.lastName}
            name="lastName"
            placeholder="Enter Your Last Name"
            onChange={(e) => handleChange(e, "lastName")}
          />
          <br />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            value={data.phoneNumber}
            name="phoneNumber"
            placeholder="Enter Your Phone Number"
            onChange={(e) => handleChange(e, "phoneNumber")}
          />
          <br />
          <label htmlFor="dateofBirth">Date of Birth</label>
          <input
            type="date"
            value={data.dateofBirth}
            name="dateOfBitrh"
            onChange={(e) => handleChange(e, "dateofBirth")}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      {showForm && <Card data={data} />}
    </>
  );
}

export default App;
