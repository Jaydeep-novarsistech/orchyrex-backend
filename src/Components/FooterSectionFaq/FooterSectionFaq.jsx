// src/App.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function FooterSectionFaq() {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
    // Reset the selected sub-item when a main navigation item is clicked
    setSelectedSubItem(null);
  };

  const handleSubItemClick = (subItem) => {
    setSelectedSubItem(subItem);
  };

  const isNavItemActive = (navItem) => selectedNavItem === navItem;

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <ul>
          <li
            className={`mb-4 ${
              isNavItemActive("about-orchyrex") ? "has-sub-items" : ""
            }`}
          >
            <Link
              to="#about-orchyrex"
              onClick={() => handleNavItemClick("about-orchyrex")}
              className={`no-underline font-bold hover:text-yellow-500 ${
                isNavItemActive("about-orchyrex") ? "text-yellow-500" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span>
                  {isNavItemActive("about-orchyrex")
                    ? "About Orchyrex"
                    : "⯈ About Orchyrex"}
                </span>
                {isNavItemActive("about-orchyrex") && <span>⯆</span>}
              </div>
            </Link>
            {isNavItemActive("about-orchyrex") && (
              <ul className="ml-4">
                <li>
                  <Link
                    to="#about-history"
                    onClick={() => handleSubItemClick("about-history")}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#about-careers"
                    onClick={() => handleSubItemClick("about-careers")}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="#about-values"
                    onClick={() => handleSubItemClick("about-values")}
                  >
                    Values
                  </Link>
                </li>
                <li>
                  <Link
                    to="#about-team"
                    onClick={() => handleSubItemClick("about-team")}
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`mb-4 ${
              isNavItemActive("careers") ? "has-sub-items" : ""
            }`}
          >
            <Link
              to="#careers"
              onClick={() => handleNavItemClick("careers")}
              className={`no-underline font-bold hover:text-yellow-500 ${
                isNavItemActive("careers") ? "text-yellow-500" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span>
                  {isNavItemActive("careers") ? "Careers" : "⯈ Careers"}
                </span>
                {isNavItemActive("careers") && <span>⯆</span>}
              </div>
            </Link>
            {isNavItemActive("careers") && (
              <ul className="ml-4">
                <li>
                  <Link
                    to="#open-positions"
                    onClick={() => handleSubItemClick("open-positions")}
                  >
                    Open Positions
                  </Link>
                </li>
                <li>
                  <Link
                    to="#apply-now"
                    onClick={() => handleSubItemClick("apply-now")}
                  >
                    Apply Now
                  </Link>
                </li>
                <li>
                  <Link
                    to="#employee-benefits"
                    onClick={() => handleSubItemClick("employee-benefits")}
                  >
                    Employee Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    to="#internships"
                    onClick={() => handleSubItemClick("internships")}
                  >
                    Internships
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* ... Other list items ... */}
        </ul>
      </div>
      <div className="flex-1 p-4">
        {selectedSubItem && (
          <div>
            <h2 className="text-gray-800">{selectedSubItem}</h2>
            <p className="leading-6">
              Insert content related to {selectedSubItem} here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FooterSectionFaq;
