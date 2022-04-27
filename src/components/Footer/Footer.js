import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        //Footer Start
        <div class="footer">
            <div className="copyright">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="copy-text">
                            <p> 2022 &copy; <Link to="/">BUMI'S CUISINE</Link>. All Rights Reserved</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="footer-about">
                            <div className="footer-social">
                                <Link to="/contact"><i className="fab fa-twitter"></i></Link>
                                <Link to="/contact"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="/contact"><i className="fab fa-youtube"></i></Link>
                                <Link to="/contact"><i className="fab fa-instagram"></i></Link>
                                <Link to="/contact"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer;