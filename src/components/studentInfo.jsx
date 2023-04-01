import React from 'react';
import PropTypes from 'prop-types';
import { creatingCorrectAge } from "../utils/creatingCorrectAge";

const StudentInfo = ({ user }) => {

  return (
    <div>
      {
        Object.keys(user).map((item, index) => (
          user[item].label === "Год рождения" ? <p key={index}>{`${user[item].label}: ${creatingCorrectAge(user[item].value)}`}</p> :
          <p key={index}>{`${user[item].label}: ${user[item].value}`}</p>))
      }
    </div>
  );
};

StudentInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default StudentInfo;