import React from "react";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-lime-950">
      <footer className="footer p-5 w-11/12 mx-auto text-neutral-content">
        <nav>
          {/* <h6 className="footer-title">MAC Cosmetics</h6> */}
          <img src={logo} alt="" />
          <a className="text-2xl font-bold">MAC-Cosmetics Industries Ltd.</a>
          <a>Copyright © 2023 - All right reserved by Toys Industries Ltd</a>
        </nav>
        <nav >
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav>
          <h6 className="footer-title">CONTACT US</h6>
          <a className="link link-hover">34/4 block-3,Uttora,Dhaka</a>
          <a className="link link-hover">MAC@gmail.com</a>
          <a className="link link-hover">+00327843209</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
