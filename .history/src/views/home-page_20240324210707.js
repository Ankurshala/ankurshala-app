// export default HomePage
import React, { useEffect } from 'react';
import './home-page.css'

const HomePage = (props) => {
  return (
    <div>
    {/*  *****   Link To Font Awsome Icons   *****  */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    {/*  *****   Link To Owl Carousel   *****  */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>AnkurShala</title>
    {/*   *** Website Container Starts ***   */}
    <div className="website-container">
      {/*   *** Home Section Starts ***   */}
      <section className="home" id="home">
        {/*   === Main Navbar Starts ===   */}
        <nav className="main-navbar">
          <a href="#" className="logo">
            <img src="/external/bgremoveremovebgpreview1i173-yq8j-200w.png" alt="bgremoveremovebgpreview1I173" />
          </a>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
          <a href="#" className="get-started-btn-container">
            <button className="get-started-btn btn">Get Started</button>
          </a>
          <div className="menu-btn">
            <span />
          </div>
        </nav>
        {/*   === Main Navbar Ends ===   */}
        {/*   === Banner Starts ===   */}
        <div className="banner">
          <div className="banner-desc">
            <h2>Start Learning With Our Experts, Anywhere, Anytime</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <form className="search-bar">
              <input type="search" placeholder="Search Your Course" />
              <i className="fa-solid fa-search" />
            </form>
          </div>
          <div className="banner-img">
            <div className="banner-img-container">
              <img src="/external/student.png" />
              <div className="states">
                <div className="total-courses">
                  <div className="icon">
                    <i className="fa-solid fa-book" />
                  </div>
                  <div className="desc">
                    <span>284+</span>
                    <span>Total Courses</span>
                  </div>
                </div>
                <div className="courses-ratings">
                  <span>4.7<i className="fa-solid fa-star" /></span>
                  <span>Ratings (58k)</span>
                </div>
              </div>
              <div className="pattern">
                <img src="/external/pattern.png" />
              </div>
            </div>
          </div>
        </div>
        {/*   === Banner Ends ===   */}
      </section>
      {/*   *** Home Section Ends ***   */}
      {/*   *** Partners Section Starts ***   */}
      <section className="partners">
        <h3>Our trusted partners around the world</h3>
        <div className="owl-carousel owl-theme partners-slider">
          <div className="item brand-item">
            <img src="/external/matoontapa.png" />
          </div>
          <div className="item brand-item">
            <img src="/external/khostan.png" />
          </div>
          <div className="item brand-item">
            <img src="/external/etimadya.png" />
          </div>
          <div className="item brand-item">
            <img src="/external/torghar.png" />
          </div>
          <div className="item brand-item">
            <img src="/external/nadershakot.png" />
          </div>
          <div className="item brand-item">
            <img src="/external/almarah.png" />
          </div>
        </div>
      </section>
      {/*   *** Partners Section Ends ***   */}
      {/*   *** Services Section Starts ***   */}
      <section className="services" id="services">
        {/*   *** Services Header Starts ***   */}
        <header className="section-header">
          <h1>Why Choose Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </header>
        {/*   *** Services Header Ends ***   */}
        {/*   *** Services Contents Starts ***   */}
        <div className="services-contents">
          <div className="service-box">
            <div className="service-icon">
              <i className="fa-solid fa-calendar" />
            </div>
            <div className="service-desc">
              <h2>Flexible Timing</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <i className="fa-solid fa-users" />
            </div>
            <div className="service-desc">
              <h2>Expert Teachers</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <i className="fa-solid fa-clock" />
            </div>
            <div className="service-desc">
              <h2>24/7 Live Support</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        {/*   *** Services Contents Ends ***   */}
      </section>
      {/*   *** Services Section Ends ***   */}
      {/*   *** Courses Section Starts ***   */}
      <section className="courses" id="courses">
        {/*   *** Courses Header Starts ***   */}
        <header className="section-header">
          <div className="header-text">
            <h1>Choose Your Favourite Course</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <button className="courses-btn btn">View All</button>
        </header>
        {/*   *** Courses Header Ends ***   */}
        {/*   *** Courses Contents Starts ***   */}
        <div className="course-contents">
          <div className="course-card">
            <img src="/external/course-1.jpg" />
            <div className="category">
              <div className="subject"><h3>Design</h3></div>
              <img src="/external/teacher-1.jpg" />
            </div>
            <h2 className="course-title">Learn Figma: This is some dummy text demonistrating the title</h2>
            <div className="course-desc">
              <span><i className="fa-solid fa-video" /> 45 Videos</span>
              <span><i className="fa-solid fa-users" /> 2154+ Students</span>
            </div>
            <div className="course-ratings">
              <span>4.9 <i className="fa-solid fa-star" /></span>
              <span><b>$</b>120.00</span>
            </div>
          </div>
          <div className="course-card">
            <img src="/external/course-1.jpg" />
            <div className="category">
              <div className="subject"><h3>Design</h3></div>
              <img src="/external/teacher-1.jpg" />
            </div>
            <h2 className="course-title">Learn Figma: This is some dummy text demonistrating the title</h2>
            <div className="course-desc">
              <span><i className="fa-solid fa-video" /> 45 Videos</span>
              <span><i className="fa-solid fa-users" /> 2154+ Students</span>
            </div>
            <div className="course-ratings">
              <span>4.9 <i className="fa-solid fa-star" /></span>
              <span><b>$</b>120.00</span>
            </div>
          </div>
          <div className="course-card">
            <img src="/external/course-1.jpg" />
            <div className="category">
              <div className="subject"><h3>Design</h3></div>
              <img src="/external/teacher-1.jpg" />
            </div>
            <h2 className="course-title">Learn Figma: This is some dummy text demonistrating the title</h2>
            <div className="course-desc">
              <span><i className="fa-solid fa-video" /> 45 Videos</span>
              <span><i className="fa-solid fa-users" /> 2154+ Students</span>
            </div>
            <div className="course-ratings">
              <span>4.9 <i className="fa-solid fa-star" /></span>
              <span><b>$</b>120.00</span>
            </div>
          </div>
          <div className="course-card">
            <img src="/external/course-1.jpg" />
            <div className="category">
              <div className="subject"><h3>Development</h3></div>
              <img src="/external/teacher-1.jpg" />
            </div>
            <h2 className="course-title">Learn JavaScript: This is some dummy text demonistrating the title</h2>
            <div className="course-desc">
              <span><i className="fa-solid fa-video" /> 45 Videos</span>
              <span><i className="fa-solid fa-users" /> 2154+ Students</span>
            </div>
            <div className="course-ratings">
              <span>4.9 <i className="fa-solid fa-star" /></span>
              <span><b>$</b>120.00</span>
            </div>
          </div>
          <div className="course-card">
            <img src="/external/course-1.jpg" />
            <div className="category">
              <div className="subject"><h3>Development</h3></div>
              <img src="/external/teacher-1.jpg" />
            </div>
            <h2 className="course-title">Learn JavaScript: This is some dummy text demonistrating the title</h2>
            <div className="course-desc">
              <span><i className="fa-solid fa-video" /> 45 Videos</span>
              <span><i className="fa-solid fa-users" /> 2154+ Students</span>
            </div>
            <div className="course-ratings">
              <span>4.9 <i className="fa-solid fa-star" /></span>
              <span><b>$</b>120.00</span>
            </div>
          </div>
          <div className="course-card">
            <img src="/external/course-1.jpg" />
            <div className="category">
              <div className="subject"><h3>Development</h3></div>
              <img src="/external/teacher-1.jpg" />
            </div>
            <h2 className="course-title">Learn JQuery: This is some dummy text demonistrating the title</h2>
            <div className="course-desc">
              <span><i className="fa-solid fa-video" /> 45 Videos</span>
              <span><i className="fa-solid fa-users" /> 2154+ Students</span>
            </div>
            <div className="course-ratings">
              <span>4.9 <i className="fa-solid fa-star" /></span>
              <span><b>$</b>120.00</span>
            </div>
          </div>
        </div>
        {/*   *** Courses Contents Ends ***   */}
      </section>
      {/*   *** Courses Section Ends ***   */}
      {/*   *** Courses Categories Section Starts ***   */}
      <section className="categories" id="categories">
        {/*   === Categories Section Header Starts ===   */}
        <header className="section-header">
          <h1>Brouse Courses By Categories</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </header>
        {/*   === Categories Section Header Ends ===   */}
        {/*   === Categories Section Contents Starts ===   */}
        <div className="categories-contents">
          <div className="category-item">
            <div className="category-icon">
              <i className="fa-solid fa-palette" />
            </div>
            <div className="category-desc">
              <h3>Designing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="category-item">
            <div className="category-icon">
              <i className="fa-solid fa-code" />
            </div>
            <div className="category-desc">
              <h3>Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="category-item">
            <div className="category-icon">
              <i className="fa-solid fa-bullhorn" />
            </div>
            <div className="category-desc">
              <h3>Marketing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="category-item">
            <div className="category-icon">
              <i className="fa-solid fa-camera" />
            </div>
            <div className="category-desc">
              <h3>Photography</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        {/*   === Categories Section Contents Ends ===   */}
      </section>
      {/*   *** Courses Categories Section Ends ***   */}
      {/*   *** Teacher Section Starts ***   */}
      <section className="instructor">
        <div className="instructor-container">
          <h2>Become an instructor with AnkurShala</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button className="teacher-btn btn">Your Details</button>
        </div>
      </section>
      {/*   *** Teacher Section Ends ***   */}
      {/*   *** Testimonials Section Starts ***   */}
      <section className="testimonials" id="testimonials">
        {/*   === Testimonials Section Header Starts ===   */}
        <header className="section-header">
          <h1>Testimonials</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </header>
        {/*   === Testimonials Section Header Ends ===   */}
        {/*   === Testimonials Contents Starts ===   */}
        <div className="owl-carousel owl-theme testimonials-slider">
          <div className="item testimonials-item">
            <div className="profile">
              <div className="profile-image">
                <img src="images/testimonials/student-1.jpg" />
              </div>
              <div className="profile-desc">
                <span>Person Name</span>
                <span>Description</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <div className="quote">
              <i className="fa fa-quote-left" />
            </div>
            <div className="ratings">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
          <div className="item testimonials-item">
            <div className="profile">
              <div className="profile-image">
                <img src="images/testimonials/student-1.jpg" />
              </div>
              <div className="profile-desc">
                <span>Person Name</span>
                <span>Description</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <div className="quote">
              <i className="fa fa-quote-left" />
            </div>
            <div className="ratings">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
          <div className="item testimonials-item">
            <div className="profile">
              <div className="profile-image">
                <img src="images/testimonials/student-1.jpg" />
              </div>
              <div className="profile-desc">
                <span>Person Name</span>
                <span>Description</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <div className="quote">
              <i className="fa fa-quote-left" />
            </div>
            <div className="ratings">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
          <div className="item testimonials-item">
            <div className="profile">
              <div className="profile-image">
                <img src="images/testimonials/student-1.jpg" />
              </div>
              <div className="profile-desc">
                <span>Person Name</span>
                <span>Description</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <div className="quote">
              <i className="fa fa-quote-left" />
            </div>
            <div className="ratings">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
          <div className="item testimonials-item">
            <div className="profile">
              <div className="profile-image">
                <img src="images/testimonials/student-1.jpg" />
              </div>
              <div className="profile-desc">
                <span>Person Name</span>
                <span>Description</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <div className="quote">
              <i className="fa fa-quote-left" />
            </div>
            <div className="ratings">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
        </div>
        {/*   === Testimonials Contents Ends ===   */}
      </section>
      {/*   *** Testimonials Section Ends ***   */}
      {/*   *** Footer Section Starts ***   */}
      <section className="footer" id="footer">
        {/*   === Footer Contents Starts ===   */}
        <div className="footer-contents">
          <div className="footer-col footer-col-1">
            <div className="col-title">
              <img src="images/home/logo.png" />
            </div>
            <div className="col-contents">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </div>
          </div>
          <div className="footer-col footer-col-2">
            <div className="col-title">
              <h3>Contact</h3>
            </div>
            <div className="col-contents">
              <div className="contact-row">
                <span>Address</span>
                <span>1234 Street, Colifornia, USA</span>
              </div>
              <div className="contact-row">
                <span>Phone</span>
                <span>+012 987 23456</span>
              </div>
              <div className="contact-row">
                <span>Website</span>
                <span>AnkurShala</span>
              </div>
              <div className="contact-row">
                <span>Email</span>
                <span>AnkurShala</span>
              </div>
            </div>
          </div>
          <div className="footer-col footer-col-3">
            <div className="col-title">
              <h3>Quick Links</h3>
            </div>
            <div className="col-contents">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Courses</a>
              <a href="#">Categories</a>
              <a href="#">Testimonials</a>
            </div>
          </div>
          <div className="footer-col footer-col-4">
            <div className="col-title">
              <h3>Newsletter</h3>
            </div>
            <div className="col-contents">
              <form className="newsletter">
                <input type="email" placeholder="Your Email" />
                <button className="newsletter-btn btn" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        {/*   === Footer Contents Ends ===   */}
        <div className="copy-rights">
          <p>Created By <b>AnkurShala</b> All Rights Reserved</p>
        </div>
      </section>
      {/*   *** Footer Section Ends ***   */}
    </div>
  </div>
  )
}

export default HomePage;
