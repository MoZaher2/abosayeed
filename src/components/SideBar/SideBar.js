import React from 'react'
import {  Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye, faSuitcase, faUsers, faBlog ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import logo from '../../images/logo.webp';
function SideBar() {
  return (
    <>
        <div className={`"position-sticky"  `}>
            {/* <img src={logo} alt="" className="logoDashboard" /> */}
            <ul className="nav flex-column mt-5">
      
              <li className="nav-item">
                <Link className="nav-link" to="/addTrip">
                <FontAwesomeIcon icon={faPlus} size="xl" className="me-3"/>
                  Add Trip
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/allTrips">
                <FontAwesomeIcon icon={faSuitcase}size="xl" className="me-3"/>
                  All   Trips
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addBlog">
                <FontAwesomeIcon icon={faBlog} size="xl" className="me-3"/>
                  Add Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/allBlogs">
                <FontAwesomeIcon icon={faEye} size="xl" className="me-3"/>
                  All Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                <FontAwesomeIcon icon={faUsers} size="xl" className="me-3"/>
                  Orders
                </Link>
              </li>
              <li className="nav-item">
  <Link className="nav-link" to="/contactmessage">
    <FontAwesomeIcon icon={faEnvelope} size="xl" className="me-3" />
    Contact
  </Link>
</li>

              
            </ul>
          </div>  
    </>
  )
}

export default SideBar
