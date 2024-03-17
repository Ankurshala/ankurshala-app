import React from 'react';
import { IonIcon } from '@ionic/react';

import './account-setting.css'

const AccountSetting = (props) => {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Teacher Admin Dashboard</title>
        {/* =============== Navigation ================ */}
        <div className="container">
          <div className="navigation">
            <ul>
              <li>
                <a href="#">
                  <span className="icon">
                    <img src="/external/bgremoveremovebgpreview1i173-yq8j-200w.png" alt="bgremoveremovebgpreview1I173" />
                  </span>
                  <span className="title">AnkurShala</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <IonIcon name="home-outline" />
                  </span>
                  <span className="title">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <IonIcon name="people-outline" />
                  </span>
                  <span className="title">Student</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <IonIcon name="chatbubble-outline" />
                  </span>
                  <span className="title">Messages</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <IonIcon name="help-outline" />
                  </span>
                  <span className="title">Help</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <IonIcon name="settings-outline" />
                  </span>
                  <span className="title">Settings</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <IonIcon name="lock-closed-outline" />
                  </span>
                  <span className="title">Payment</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <IonIcon name="log-out-outline" />
                  </span>
                  <span className="title">Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
          {/* ========================= Main ==================== */}
          <div className="main">
            <div className="topbar">
              <div className="toggle">
                <IonIcon name="menu-outline" />
              </div>
              <div className="search">
                <label>
                  <input type="text" placeholder="Search here" />
                  <IonIcon name="search-outline" />
                </label>
              </div>
              <div className="user">
                <img src="assets/imgs/customer01.jpg" alt="" />
              </div>
            </div>
            <div class="profile-photo">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Avatar" class="image" />
                <div class="middle">
                    <div class="text">Edit Image</div>
                </div>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="First Name" name="First name" id="First name" required />
                <label for="First name" class="form__label">First Name</label>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Last Name" name="Last name" id="Last name" required />
                <label for="Last name" class="form__label">Last Name</label>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Father Name" name="Father name" id="Father name" required />
                <label for="Father name" class="form__label">Father Name</label>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Mother Name" name="Mother name" id="Mother name" required />
                <label for="Mother name" class="form__label">Mother Name</label>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Address" name="Address" id="Address" required />
                <label for="Address" class="form__label">Address</label>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="School Name" name="Last name" id="School name" required />
                <label for="School name" class="form__label">School Name</label>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Class" name="Class" id="Class" required />
                <label for="Class" class="form__label">Class</label>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Education Board" name="Education Board" id="Education Board" required />
                <label for="Education Board" class="form__label">Education Board</label>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Mobile Number" name="Mobile Number" id="Mobile Number" required />
                <label for="Mobile Number" class="form__label">Mobile Number</label>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="E-Mail Id" name="E-Mail Id" id="E-Mail Id" required />
                <label for="E-Mail Id" class="form__label">E-Mail Id</label>
            </div>
            <div class="btnclass">
                <button id="btn">
                    <p id="btnText">Submit</p>
                    <div class="check-box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                </button>
            </div>
          </div>
        </div>
        {/* =========== Scripts =========  */}
        {/* ====== ionicons ======= */}
      </div>
  )
}

export default AccountSetting