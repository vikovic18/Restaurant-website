import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './footer.css'

function Footer() {
  return (
//Footer Start
    <div class="footer">
        <div className="copyright">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="copy-text">
                            <p> 2022 &copy; <a href="#">WFD RESTAURANT</a>. All Rights Reserved</p>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-3">
                    <div class="footer-about">
                        <div className="footer-social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-youtube"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>            

                </div>
            
        </div>
    </div>
  )
}

export default Footer;