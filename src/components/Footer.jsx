import React from "react";
import { footerAddress } from "../constants/Config";
import { footerLinks } from "../constants/Config";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-5 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">SCCL and Associates</h2>

          <div className="flex flex-col">
            <p className="text-lg">Address</p>
            <p> {footerAddress.addressLine1}</p>
            <p>
              {footerAddress.addressLine2}{" "}
              <a
                href="https://maps.app.goo.gl/gAjegVKN5yXyeXdt5"
                target="_blank"
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material-outlined/96/EBA03D/near-me.png"
                  alt="near-me"
                  style={{ display: "inline-block" }}
                />
              </a>
            </p>
          </div>

          <br />
          <p className="text-lg">Contact</p>
          <p>{footerAddress.email}</p>
          {footerAddress.email2 && <p>{footerAddress.email2}</p>}
          <p>{footerAddress.mobile}</p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href} className="mb-2">
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            {/* <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a> */}
            <a
              href="https://www.linkedin.com/company/sccl-and-associates/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://x.com/scclassociates"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Additional Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Resources</h2>
          <ul>
            <li className="mb-2">
              <a href="#terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; 2024 SCCL and Associates. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
