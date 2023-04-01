import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import StudentInfoPage from "./components/studentInfoPage";
import EditStudentInfo from "./components/editStudentInfo";
import CreateStudentInfo from "./components/createStudentInfo";
import React from "react";
import { setUserToLocalStorage } from "./utils/setUserToLocalStorage";
import { validator } from "./utils/validator";

function App() {
  const [data, setData] = React.useState({ name: "", surname: "", birthYear: "", portfolio: "" });
  const [errors, setErrors] = React.useState({});
  const history = useHistory()
  React.useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения"
      }
    },
    surname: {
      isRequired: {
        message: "Фамилия обязательна для заполнения"
      }
    },
    birthYear: {
      isRequired: {
        message: "Год рождения обязателен для заполнения"
      },
      isBirthYear: {
        message: "Год рождения введен некорректно"
      }
    },
    portfolio: {
      isRequired: {
        message: "Портфолио обязательно для заполнения"
      },
      isUrl: {
        message: "Поле заполнено некорректно"
      }
    }
  }

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return
    setUserToLocalStorage(data.name, data.surname, data.birthYear, data.portfolio);
    history.push("/")
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => (<StudentInfoPage/>)}/>
        <Route path="/create" render={(props) => (
          <CreateStudentInfo data={data} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}/>)}/>
        <Route path="/edit" render={(props) => (
          <EditStudentInfo data={data} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}/>)}/>
      </Switch>
    </div>
  );
}

export default App;
