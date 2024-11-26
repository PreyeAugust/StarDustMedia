import React from "react";
import "./service.css";
import { FaBook } from "react-icons/fa";
import { GiLaurelsTrophy } from "react-icons/gi";
import { FaAngrycreative } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { RiContractLine } from "react-icons/ri";

export default function serviceSec2() {
  return (
    <div>
      <div id="service-section">
        <h2 className="font-serif lg:text-center sm:text-center">Our Services</h2>

        <div className="cards">
          <div className="card">
            <FaBook className="Icon" />
            <div className="content">
              <h3>Educational Publishing</h3>
              <p>Educational Comic Books</p>
              <p>Custom Book Designs</p>
              <p>Premium Printing</p>
            </div>
          </div>

          <div className="card">
            <GiLaurelsTrophy className="Icon" />
            <div className="content">
              <h3>Event Planning & Management</h3>
              <p>Childrens Events</p>
              <p>Festival & Carnival</p>
              <p>Event Consultancy/Management</p>
            </div>
          </div>

          <div className="card">
            <FaAngrycreative className="Icon" />
            <div className="content">
              <h3>Creative Services</h3>
              <p>Book Reading Club</p>
              <p>Branding & Strategy</p>
              <p>Multimedia</p>
            </div>
          </div>

          <div className="card">
            <SiBrandfolder className="Icon" />
            <div className="content">
              <h3>Consultancy Branding</h3>
              <p>Business Development</p>
              <p>Marketing and PR</p>
              <p>Educational Consultancy</p>
            </div>
          </div>

          <div className="card">
            <RiContractLine className="Icon" />
            <div className="content">
              <h3>General Contract</h3>
              <p>Project Management</p>
              <p>Procurement</p>
              <p>Quality Assurance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
