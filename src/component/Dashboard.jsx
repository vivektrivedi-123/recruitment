import React from 'react'
import Navigation from '../common/Navigation';
import Topbar from '../common/Topbar';

function Dashboard() {
    return (
    <>
    <div className="wrapper">
    <div id="leftside" >
    <Navigation />
    </div>
  <div className="content-page">
    <div className="content">
      <div className="navbar-custom">
        <div id="top-bar" >
            <Topbar/>
            </div>
        <ul className="nav nav-tabs nav-bordered ">
          <li className="nav-item ">
            <a href="#dash " data-bs-toggle="tab " aria-expanded="true " className="nav-link active ">
              <i className="uil uil-dashboard me-1 " />
              <span className="d-none d-md-block "> My Dashboard </span>
            </a>
          </li>
          <li className="nav-item ">
            <a href="#emp " data-bs-toggle="tab " aria-expanded="false " className="nav-link ">
              <i className="dripicons-user-group me-1 " />
              <span className="d-none d-md-block "> Employees </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="page-title-box ">
        <div className="tab-pane show active" id="dash">
          {/* interviews for me */}
          <div className="row m-0 py-3">
            <div className="col-lg-8">
              <div className="card widget-flat">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <h4 className="m-0 font-20"> Interviews <a href="#" className="dropzone">
                          For Me</a>
                      </h4>
                      <h5 className="text-muted fw-normal mt-0"> Today </h5>
                    </div>
                    <div className="col-md-8 col-12">
                      <ul className="nav nav-tabs nav-bordered mb-3" style={{float: 'right'}}>
                        <li className="nav-item">
                          <a href="#feedback" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                            <i className="uil uil-comment-alt-redo d-md-none d-block" style={{fontSize: 17}} />
                            <span className="d-none d-md-block text-muted fw-normal mt-0"> Feedback Due </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#today" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                            <i className="uil uil-calender d-md-none d-block" style={{fontSize: 17}} />
                            <span className="d-none d-md-block text-muted fw-normal mt-0"> Today </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#upcoming" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                            <i className="mdi mdi-page-next-outline d-md-none d-block" style={{fontSize: 17}} />
                            <span className="d-none d-md-block text-muted fw-normal mt-0"> Upcoming </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#completed" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                            <i className="uil uil-comment-alt-verify d-md-none d-block" style={{fontSize: 17}} />
                            <span className="d-none d-md-block text-muted fw-normal mt-0"> Completed </span>
                          </a>
                        </li>
                      </ul>
                      {/* feedback/today... option ends*/}
                    </div>
                    {/* col-md-8 ends */}
                    {/* feedback/today... option-selected */}
                    <div className="tab-content p-2">
                      <div className="tab-pane text-center pt-3" id="feedback">
                        <h5 className="text-muted fw-normal mt-1"> No Feedback Due </h5>
                      </div>
                      <div className="tab-pane show active text-center pt-3" id="today">
                        <i className="uil uil-calender" />
                        <h5 className="text-muted fw-normal mt-1"> No Interviews today </h5>
                      </div>
                      <div className="tab-pane text-center pt-3" id="upcoming">
                        <h5 className="text-muted fw-normal mt-1"> No Upcoming </h5>
                      </div>
                      <div className="tab-pane text-center pt-3" id="completed">
                        <h5 className="text-muted fw-normal mt-1"> Completed </h5>
                      </div>
                    </div>
                    {/* feedback/today... option-selected ends */}
                  </div>
                  {/* row ends*/}
                </div>
                {/*  card-body */}
              </div>
              {/* card widget-flat */}
              <div className="card widget-flat">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="m-0"> My Referrals <a href="#" style={{fontSize: 15}}> (View All) </a> </h4>
                    </div>
                    <div className="col-md-12 text-center p-2">
                      <img src="assets/images/Calendar-Time.png" alt />
                      <h5 className="text-muted fw-normal mt-1"> No Referrals </h5>
                      <p style={{color: '#bbbbbb'}}> You haven't referred anyone to the organization just yet. Give it a go.</p>
                      <a href="#"> Refer a candidate </a>
                    </div>
                    {/*col-md-12 */}
                  </div>
                  {/*row */}
                </div>
                {/*card-body */}
              </div>
              {/*card widget-flat */}
              <div className="card widget-flat">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="m-0"> My Referrals <a href="#" style={{fontSize: 15}}> (View All) </a> </h4>
                    </div>
                    <div className="col-md-12 text-center p-2">
                      <img src="assets/images/Calendar-Time.png" alt />
                      <h5 className="text-muted fw-normal mt-1"> No Referrals </h5>
                      <p style={{color: '#bbbbbb'}}> You haven't referred anyone to the organization just yet. Give it a go.</p>
                      <a href="#"> Refer a candidate </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  col-lg-8 */}
            <div className="col-lg-4 dashboard-right">
              <div className="row bg-heading-list">
                <div className="col-md-6 bg-heading">
                  <i className="icon-task bg-heading-icon" />
                  <h5>My Open Tasks</h5>
                </div>
                <div className="col-md-6 bg-heading-count">
                  <a role="button">
                    0
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-heading-list">
              <div className="bg-heading">
                <div className="bg-heading-icon"><i className="icon-candidates" /></div>
                <h5>Candidates summary</h5>
              </div>
              <div className="bg-heading-body">
                <div className="bg-heading-item has-heading-count">
                  New Candidates
                  <div className="bg-heading-count float-right">
                    <a role="button">
                      0
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*col-lg-4 dashboard-right */}
        </div>
        {/* row  */}
        {/* interviews for me ends */}
      </div>
      <div className="end-bar ">
        <div className="rightbar-title ">
          <a href="javascript:void(0); " className="end-bar-toggle float-end ">
            <i className="dripicons-cross noti-icon " />
          </a>
          <h5 className="m-0 ">Settings</h5>
        </div>
        <div className="rightbar-content h-100 " data-simplebar>
          <div className="p-3 ">
            <div className="alert alert-warning " role="alert ">
              <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
            </div>
            {/* Settings */}
            <h5 className="mt-3 ">Color Scheme</h5>
            <hr className="mt-1 " />
            <div className="form-check form-switch mb-1 ">
              <input className="form-check-input " type="checkbox " name="color-scheme-mode " defaultValue="light " id="light-mode-check " defaultChecked />
              <label className="form-check-label " htmlFor="light-mode-check ">Light Mode</label>
            </div>
            <div className="form-check form-switch mb-1 ">
              <input className="form-check-input " type="checkbox " name="color-scheme-mode " defaultValue="dark " id="dark-mode-check " />
              <label className="form-check-label " htmlFor="dark-mode-check ">Dark Mode</label>
            </div>
            {/* Width */}
            <h5 className="mt-4 ">Width</h5>
            <hr className="mt-1 " />
            <div className="form-check form-switch mb-1 ">
              <input className="form-check-input " type="checkbox " name="width " defaultValue="fluid " id="fluid-check " defaultChecked />
              <label className="form-check-label " htmlFor="fluid-check ">Fluid</label>
            </div>
            <div className="form-check form-switch mb-1 ">
              <input className="form-check-input " type="checkbox " name="width " defaultValue="boxed " id="boxed-check " />
              <label className="form-check-label " htmlFor="boxed-check ">Boxed</label>
            </div>
            {/* Left Sidebar*/}
            <h5 className="mt-4 ">Left Sidebar</h5>
            <hr className="mt-1 " />
            <div className="form-check form-switch mb-1 ">
              <input className="form-check-input " type="checkbox " name="theme " defaultValue="default " id="default-check " />
              <label className="form-check-label " htmlFor="default-check ">Default</label>
            </div>
            <div className="form-check form-switch mb-1 ">
              <input className="form-check-input " type="checkbox " name="theme " defaultValue="light " id="light-check " />
              <label className="form-check-label " htmlFor="light-check ">Light</label>
            </div>
            <div className="form-check form-switch mb-3 ">
              <input className="form-check-input " type="checkbox " name="theme " defaultValue="dark " id="dark-check " defaultChecked />
              <label className="form-check-label " htmlFor="dark-check ">Dark</label>
            </div>
            <div className="form-check form-switch mb-1 ">
              <input className="form-check-input " type="checkbox " name="compact " defaultValue="fixed " id="fixed-check " defaultChecked />
              <label className="form-check-label " htmlFor="fixed-check ">Fixed</label>
            </div>
            <div className="form-check form-switch mb-1 ">
              <input className="form-check-input " type="checkbox " name="compact " defaultValue="condensed " id="condensed-check " />
              <label className="form-check-label " htmlFor="condensed-check ">Condensed</label>
            </div>
            <div className="form-check form-switch mb-1 ">
              <input className="form-check-input " type="checkbox " name="compact " defaultValue="scrollable " id="scrollable-check " />
              <label className="form-check-label " htmlFor="scrollable-check ">Scrollable</label>
            </div>
            <div className="d-grid mt-4 ">
              <button className="btn btn-primary " id="resetBtn ">Reset to Default</button>
              <a href="https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/ " className="btn btn-danger mt-3 " target="_blank "><i className="mdi mdi-basket me-1 " /> Purchase Now</a>
            </div>
          </div>
          {/* end padding*/}
        </div>
      </div>
      <div className="rightbar-overlay " />
      {/* /End-bar */}
    </div>
    {/*content */}
  </div>
  {/*content-page */}
</div>
{/* wrapper */}

        </>
    )
}

export default Dashboard
