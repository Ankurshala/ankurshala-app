import React from 'react'
import { IonIcon } from '@ionic/react';

import './teacher-dashboardf.css'

const TeacherDashboardf = () => {
    // const [activeItem, setActiveItem] = useState(null);

    // const handleMouseOver = (item) => {
    //     setActiveItem(item);
    // };

    // const handleMenuToggle = () => {
    //     const navigation = document.querySelector(".navigation");
    //     const main = document.querySelector(".main");

    //     navigation.classList.toggle("active");
    //     main.classList.toggle("active");
    // };

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
            {/* ======================= Cards ================== */}
            <div className="cardBox">
              <div className="card">
                <div>
                  <div className="numbers">1,504</div>
                  <div className="cardName">Daily Class Views</div>
                </div>
                <div className="iconBx">
                  <IonIcon name="eye-outline" />
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">80</div>
                  <div className="cardName">Total Student</div>
                </div>
                <div className="iconBx">
                  <IonIcon name="cart-outline" />
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">284</div>
                  <div className="cardName">Doubts Solved</div>
                </div>
                <div className="iconBx">
                  <IonIcon name="chatbubbles-outline" />
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">INR 7,842</div>
                  <div className="cardName">Earning</div>
                </div>
                <div className="iconBx">
                  <IonIcon name="cash-outline" />
                </div>
              </div>
            </div>
            {/* ================ Order Details List ================= */}
            <div className="details">
              <div className="recentOrders">
                <div className="cardHeader">
                  <h2>Recent Class</h2>
                  <a href="#" className="btn">View All</a>
                </div>
                <table>
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Price</td>
                      <td>Payment</td>
                      <td>Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Star Refrigerator</td>
                      <td>$1200</td>
                      <td>Paid</td>
                      <td><span className="status delivered">Delivered</span></td>
                    </tr>
                    <tr>
                      <td>Dell Laptop</td>
                      <td>$110</td>
                      <td>Due</td>
                      <td><span className="status pending">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Apple Watch</td>
                      <td>$1200</td>
                      <td>Paid</td>
                      <td><span className="status return">Return</span></td>
                    </tr>
                    <tr>
                      <td>Addidas Shoes</td>
                      <td>$620</td>
                      <td>Due</td>
                      <td><span className="status inProgress">In Progress</span></td>
                    </tr>
                    <tr>
                      <td>Star Refrigerator</td>
                      <td>$1200</td>
                      <td>Paid</td>
                      <td><span className="status delivered">Delivered</span></td>
                    </tr>
                    <tr>
                      <td>Dell Laptop</td>
                      <td>$110</td>
                      <td>Due</td>
                      <td><span className="status pending">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Apple Watch</td>
                      <td>$1200</td>
                      <td>Paid</td>
                      <td><span className="status return">Return</span></td>
                    </tr>
                    <tr>
                      <td>Addidas Shoes</td>
                      <td>$620</td>
                      <td>Due</td>
                      <td><span className="status inProgress">In Progress</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* ================= New Customers ================ */}
              <div className="recentCustomers">
                <div className="cardHeader">
                  <h2>Recent Student</h2>
                </div>
                <table>
                  <tbody><tr>
                      <td width="60px">
                        <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt="" /></div>
                      </td>
                      <td>
                        <h4>David <br /> <span>Italy</span></h4>
                      </td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt="" /></div>
                      </td>
                      <td>
                        <h4>Amit <br /> <span>India</span></h4>
                      </td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt="" /></div>
                      </td>
                      <td>
                        <h4>David <br /> <span>Italy</span></h4>
                      </td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt="" /></div>
                      </td>
                      <td>
                        <h4>Amit <br /> <span>India</span></h4>
                      </td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt="" /></div>
                      </td>
                      <td>
                        <h4>David <br /> <span>Italy</span></h4>
                      </td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt="" /></div>
                      </td>
                      <td>
                        <h4>Amit <br /> <span>India</span></h4>
                      </td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt="" /></div>
                      </td>
                      <td>
                        <h4>David <br /> <span>Italy</span></h4>
                      </td>
                    </tr>
                    <tr>
                      <td width="60px">
                        <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt="" /></div>
                      </td>
                      <td>
                        <h4>Amit <br /> <span>India</span></h4>
                      </td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
        {/* =========== Scripts =========  */}
        {/* ====== ionicons ======= */}
      </div>
  )
}


export default TeacherDashboardf
