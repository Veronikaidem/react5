import React, {useEffect, useState } from 'react';
import './App.css';




const validation = (values) => {
  const error = {};
  if (!values.name || values.name.length < 4) {
    error.name = " name must be more than 4 symbols";
  }
  if (!values.surname || values.surname.length < 4) {
    error.surname = "surname must be more than 4 symbols";
  }
  if (values.email && !values.email.includes("@")) {
    error.email = "your email must include @";
  }
  if (!values.age || values.age < 18) {
    error.age = "username should be 18+";
  }
  if (!values.gender) {
    error.gender = "gender is required";
  }
  
  return error;
};

function App() {
  const [x, setX] = useState([]);
  const [y, setY] = useState(false);
  const [Z, setZ] = useState({
    name: "",
    surname: "",
    email: "",
    age: "",
    gender: "",
  });
  
}

export default App;
