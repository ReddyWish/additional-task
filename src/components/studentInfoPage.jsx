import React from 'react';
import { getUserFromLocalStorage } from "../utils/getUserFromLocalStorage";
import { Link } from "react-router-dom";
import StudentInfo from "./studentInfo";

const StudentInfoPage = () => {
  const user = getUserFromLocalStorage();
  return (
    <div>
      <h1>Карточка студента</h1>
      {user ? <StudentInfo user={user}/> : <p>Нет данных</p>}
      {user
        ?
        <Link to="/edit"><button className="btn btn-primary">Редактировать</button></Link>
        :
        <Link to="/create"><button className="btn btn-primary">Добавить</button></Link>}
    </div>

  );
};

export default StudentInfoPage;