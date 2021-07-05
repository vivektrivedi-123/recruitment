import React from 'react'
import {Link} from 'react-router-dom'
function Contact() {
    return (
        <>
        <div className="text-start">
                      <Link to="/EditUser" className="text-uppercase text-muted" data-bs-toggle="modal" data-bs-target="#user-modal">Contact 
                      <i className=" dripicons-document-edit" /></Link>
                    </div>
                    <ul className="list-group text-start list-group-flush">
                      <li className="list-group-item ps-sm-1 "><i className=" uil-mobile-android me-1 fs-4" /> Mobile</li>
                      <li className="list-group-item ps-sm-1"><i className=" uil-phone me-1 fs-4" /> Phone</li>
                      <li className="list-group-item ps-sm-1"><i className=" uil-home-alt me-1 fs-4" /> Panipat, Haryana, 132106</li>
                      <li className="list-group-item ps-sm-1"><i className=" mdi mdi-skype me-1 fs-4" /></li>
                    </ul>
        </>
    )
}

export default Contact
