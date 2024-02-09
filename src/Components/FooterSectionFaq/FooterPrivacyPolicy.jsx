import React, { useEffect } from "react";
import Services from "../HomeComponent/Services";
import Footer from "../HomeComponent/Footer";
import Navbar from "../HomeComponent/Navbar";
import { Link } from "react-router-dom";

const FooterPrivacyPolicy = ({ alphaUser, setAlphaUser }) => {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <div className="max-w-[1240px] lg:mx-auto mx-8 mt-[8rem]  my-10">
          <p className="text-center font-bold text-3xl uppercase">
            Privacy Policy for orchyrex
          </p>
          <section className="mb-8">
            <p>
              <strong>Last updated:</strong> January 11, 2024
            </p>
            <p>
              This Privacy Policy outlines our approach to collecting, using,
              and disclosing your information when you utilize our services,
              shedding light on your privacy rights and the legal safeguards in
              place.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">
              Interpretation and Definitions
            </h3>
            <p>In this document:</p>
            <ul className="list-disc pl-4">
              <li>
                Words with initial capitalization carry specific meanings.
              </li>
              <li>
                Definitions remain consistent, whether used in singular or
                plural.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Definitions</h3>
            <p>For the context of this Privacy Policy:</p>
            <ul className="list-disc pl-4">
              <li>
                <strong>Account:</strong> Refers to a unique account established
                for you to access our service.
              </li>
              <li>
                <strong>Affiliate:</strong> Denotes an entity controlling,
                controlled by, or under common control with a party, where
                "control" implies ownership of 50% or more of shares or
                securities.
              </li>
              {/* Continue similarly for other definitions */}
              <li>
                <strong>Changes to this Privacy Policy:</strong> We may
                periodically update our Privacy Policy. You will be notified of
                any changes through email or prominent notices on our service
                before the modifications take effect. Please review this Privacy
                Policy periodically for updates.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>
              If you have inquiries about this Privacy Policy, please feel free
              to reach out to us:
            </p>
            <ul className="list-disc pl-4">
              <li>By email: info@orchyrex.com</li>
              <li>
                By visiting this page on our website:{" "}
                <Link
                  to="https://orchyrex.com/contact-us/"
                  className="text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>By phone number: +91 9111720303</li>
              <li>By mail: Mohalla Atarpura, Gajraula Amroha (U.P)</li>
            </ul>
          </section>

          {/* ... (Continue similarly for other sections) */}

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Children's Privacy</h3>
            <p>
              Our service is not directed at children under 13. If we become
              aware of unintentional data collection from minors, we take steps
              to remove such information.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Links to Other Websites</h3>
            <p>
              Our service may contain links to third-party websites. We are not
              responsible for their content or privacy practices. Please review
              their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>
              If you have questions, contact us through the provided channels:
            </p>
            <ul className="list-disc pl-4">
              <li>By email: info@orchyrex.com</li>
              <li>
                By visiting this page on our website:{" "}
                <Link
                  to="https://orchyrex.com/contact-us/"
                  className="text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>By phone: +91 9111720303</li>
              <li>By mail: Mohalla Atarpura, Gajraula Amroha (U.P)</li>
            </ul>
          </section>
        </div>
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default FooterPrivacyPolicy;
