import React from 'react';
import TextField from "./textField";
import { getUserFromLocalStorage } from "../utils/getUserFromLocalStorage";
import { useHistory } from "react-router-dom";

const Form = ({ handleSubmit, handleChange, data, errors }) => {
  console.log(data);
  const user = getUserFromLocalStorage();
  const history = useHistory();
  const isValid = Object.keys(errors).length === 0;
  const handleRedirect = () => {
    history.push("/")
  }
  console.log(user)
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <TextField name="name" onChange={handleChange} label="Имя" value={data.name} type="text"
                       error={errors.name}/>
            <TextField name="surname" onChange={handleChange} label="Фамилия" value={data.surname} type="text"
                       error={errors.surname}/>
            <TextField name="birthYear" onChange={handleChange} label="Год рождения" value={data.birthYear}
                       type="number"
                       error={errors.birthYear}/>
            <TextField name="portfolio" onChange={handleChange} label="Портфолио" value={data.portfolio} type="url"
                       error={errors.portfolio}/>
            {user ? (<span className="d-flex p-2"><button className="btn btn-secondary "
                                                          onClick={handleRedirect}>Назад</button>
        <button type="submit" className="btn btn-primary" disabled={!isValid}>Обновить</button></span>)
              : (
                <button type="submit" className="btn btn-primary w-100 mx-auto" disabled={!isValid}>Создать</button>)}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;