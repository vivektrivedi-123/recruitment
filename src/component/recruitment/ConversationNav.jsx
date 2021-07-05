import React from 'react'

function ConversationNav() {
    return (
        <>
                   <ul className="nav nav-tabs nav-bordered">
                  <li className="nav-item">
                    <a href="#Summary" data-bs-toggle="tab" aria-expanded="false" className="nav-link bg-transparent active">
                      <i className="mdi mdi-home-variant d-md-none d-block" />
                      <span className="d-none d-md-block">Summary</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#Profile" data-bs-toggle="tab" aria-expanded="true" className="nav-link bg-transparent">
                      <i className="mdi mdi-account-circle d-md-none d-block" />
                      <span className="d-none d-md-block">Profile</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#Emails" data-bs-toggle="tab" aria-expanded="false" className="nav-link bg-transparent">
                      <i className="mdi mdi-settings-outline d-md-none d-block" />
                      <span className="d-none d-md-block">Emails</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#Comments" data-bs-toggle="tab" aria-expanded="false" className="nav-link bg-transparent">
                      <i className="mdi mdi-settings-outline d-md-none d-block" />
                      <span className="d-none d-md-block">Comments</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#Interviews" data-bs-toggle="tab" aria-expanded="false" className="nav-link bg-transparent">
                      <i className="mdi mdi-settings-outline d-md-none d-block" />
                      <span className="d-none d-md-block">Interviews</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#Tasks" data-bs-toggle="tab" aria-expanded="false" className="nav-link bg-transparent">
                      <i className="mdi mdi-settings-outline d-md-none d-block" />
                      <span className="d-none d-md-block">Tasks</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#Timeline" data-bs-toggle="tab" aria-expanded="false" className="nav-link bg-transparent">
                      <i className="mdi mdi-settings-outline d-md-none d-block" />
                      <span className="d-none d-md-block">Timeline</span>
                    </a>
                  </li>
                </ul>
        </>
    )
}

export default ConversationNav
