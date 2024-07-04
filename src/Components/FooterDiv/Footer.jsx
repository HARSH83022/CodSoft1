import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer p-20 mb-4 bg-blue-500 rounded-10 grid grid-cols-5 m-auto items-start justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-25 text-white pb-6">
            <strong>Job</strong>
          </h1>
        </div>
        <p className="text-white pb-3 opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>
      <div className="grid">
        <span className="divTitle text-18 font-semibold pb-6 text-white">
          Company
        </span>
        <ul className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100">About Us</li>
          <li className="text-white opacity-70 hover:opacity-100">Features</li>
          <li className="text-white opacity-70 hover:opacity-100">News</li>
          <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
        </ul>
      </div>

      <div className="grid">
        <span className="divTitle text-18 font-semibold pb-6 text-white">
          Resource
        </span>
        <ul className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100">Account</li>
          <li className="text-white opacity-70 hover:opacity-100">
            Support Center
          </li>
          <li className="text-white opacity-70 hover:opacity-100">Feedback</li>
          <li className="text-white opacity-70 hover:opacity-100">
            Contact Us
          </li>
        </ul>
      </div>
      <div className="grid">
        <span className="divTitle text-18 font-semibold pb-6 text-white">
          Support
        </span>
        <ul className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Promo
          </li>{" "}
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Req Demo
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Carrers</li>
        </ul>
      </div>

      <div className="grid">
        <span className="divTitle text-18 font-semibold pb-6 text-white">
          Contact Info
        </span>
        <div>
          <small className="text-14 text-white">
            harshmishra83022@gmail.com
          </small>

          <div className="icons flex gap-4 py-4">
            <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full text-blueColor" />
            <BsFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full text-blueColor" />
            <AiOutlineTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full text-blueColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
