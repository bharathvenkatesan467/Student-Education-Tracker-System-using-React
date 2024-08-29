import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './hicetlogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBook,faPerson,faEnvelope,faPeopleRoof,faFile,faHospital,faWallet,faPercent,faTicket} from '@fortawesome/free-solid-svg-icons';

function StudentManagement() {
  const [regular, setRegular] = useState(8);
  const [remedial, setRemedial] = useState(13);
  const [others, setOthers] = useState(0);

  return (
    <div class="main-content">
      <div class="first-division">
        <div class="management-content">
          <h4><img src={logo} width={'150px'} height={'150px'} ></img></h4>
        </div>
        <div class="management-content">
          <h4><FontAwesomeIcon icon={faUser} size="2xl" /><br></br>Student Management</h4>
        </div>
        <div class="management-content">
          <h4><FontAwesomeIcon icon={faWallet} size="2xl" /><br></br> Management</h4>
        </div>
        <div class="management-content">
          <h4><FontAwesomeIcon icon={faPercent} size="2xl" /><br></br>Quality control</h4>
        </div>
        <div class="management-content">
          <h4><FontAwesomeIcon icon={faTicket} size="2xl" /><br></br>Report Delivery</h4>
        </div>
        <div class="management-content">
          <h4><FontAwesomeIcon icon={faFile} size="2xl" /><br></br>Attendence</h4>
        </div>
      </div>
      <div class="second-division">
        <h1 class="topic">Student Management</h1>
        <div class="count-content">
          <div class="regular-content">
            <h2>{regular}</h2>
            <h1>Regular students</h1>
          </div>
          <div class="remedial-content">
            <h2>{remedial}</h2>
            <h1>Remidial Students</h1>
          </div>
          <div class="other-content">
          <h2>{others}</h2>
          <h1>In Food Club</h1>
          </div>
        </div>
        <h3 class="menu-topic">Menu</h3>
        <div class="menu-content">
          <div class="menu-content-profile">
            <h1><FontAwesomeIcon icon={faUser} size="2xl" /><br></br>Regular Enrollment</h1>
          </div>
          <div class="menu-content-profile">
            <h1><FontAwesomeIcon icon={faBook} size="2xl" /><br></br>Remedial Enrollment</h1>
          </div>
          <div class="menu-content-profile">
            <h1><FontAwesomeIcon icon={faPerson} size="2xl" /><br></br>Club Management</h1>
          </div>
          <div class="menu-content-profile">
            <h1><FontAwesomeIcon icon={faPeopleRoof} size="2xl" /><br></br>Classroom Management</h1>
          </div>
          <div class="menu-content-profile">
            <h1><FontAwesomeIcon icon={faEnvelope} size="2xl" /><br></br>SMS/EMAIL</h1>
          </div>
          <div class="menu-content-profile">
            <h1><FontAwesomeIcon icon={faFile} size="2xl" /><br></br>Attendence</h1>
          </div>
          <div class="menu-content-profile">
            <h1><FontAwesomeIcon icon={faHospital} size="2xl" /><br></br>Clinic</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<StudentManagement />, document.getElementById('root'));