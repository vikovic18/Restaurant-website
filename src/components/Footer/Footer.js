import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './footer.css'

function Footer() {
  return (
//Footer Start
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3">
                    <div class="footer-about">
                        <h3>About Us</h3>
                        <p>
                            we are WFD restaurant, we offer quality and affordable local and international dishes.
                            Here, we give our customers 100% satisfaction. Try us today and your taste-buds will never be the same again.
                        </p>
                        <div className="footer-social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-youtube"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="footer-contact">
                        <h3>Get In Touch</h3>
                        <p><i className="fa fa-map-marker-alt"></i>123 Street, Lagos, Nigeria</p>
                        <p><i className="fa fa-phone-alt"></i>+23470 5849 8008</p>
                        <p><i className="fa fa-envelope"></i>contact@wfd.com</p>
                        <p><i className="far fa-clock"></i>Mon - Fri, 9AM - 10PM</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="footer-links">
                        <h3>Useful Links</h3>
                        <a href="">Lorem ipsum</a>
                        <a href="">tempus posuere </a>
                        <a href="">velit id accumsan</a>
                        <a href="">ut porttitor</a>
                        <a href="">Nam pretium</a>
                        <a href="">accumsan</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container footer-newsletter">
            <p>
                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros 
            </p>
            <div className="row form">
                <div className="col-sm-4">
                    <input className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-sm-4">
                    <input className="form-control" placeholder="Your Email" />
                </div>
                <div className="col-sm-4">
                    <button class="btn">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="copy-text">
                            <p>&copy; <a href="#">WFD RESTAURANT</a>. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="copy-menu">
                            <a href="">About</a>
                            <a href="">Terms</a>
                            <a href="">Privacy</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;