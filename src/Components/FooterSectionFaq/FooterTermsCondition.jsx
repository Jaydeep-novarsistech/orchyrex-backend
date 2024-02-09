import React, { useEffect } from "react";
import Services from "../HomeComponent/Services";
import Footer from "../HomeComponent/Footer";
import Navbar from "../HomeComponent/Navbar";
import { Link } from "react-router-dom";

const FooterTermsCondition = ({ alphaUser, setAlphaUser }) => {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <div className="max-w-[1240px] lg:mx-auto mx-8 mt-[8rem]  my-10">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Terms and Conditions
          </h2>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Welcome to orchyrex.com!</h3>
            <p>
              These terms and conditions govern your use of the orchyrex
              website, accessible at{" "}
              <Link to="https://orchyrex.com/" className="text-blue-500">
                https://orchyrex.com/
              </Link>
              . By continuing to use this website, you agree to comply with and
              be bound by these terms. If you do not agree with any part of
              these terms, please refrain from using orchyrex.com.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Interpretation</h3>
            <p>
              <strong>Client, You, Your:</strong> refer to the user of this
              website.
            </p>
            <p>
              <strong>The Company, Ourselves, We, Our, Us:</strong> refer to
              orchyrex.
            </p>
            <p>
              <strong>Party, Parties, or Us:</strong> refer collectively to the
              Client and orchyrex.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Cookies</h3>
            <p>
              By accessing orchyrex.com, you agree to the use of cookies as
              outlined in the orchyrex Privacy Policy. Cookies enhance user
              experience and facilitate the functionality of specific website
              areas. Some affiliates/advertising partners may also use cookies.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">License</h3>
            <p>
              Unless stated otherwise, orchyrex and/or its licensors hold the
              intellectual property rights for all materials on orchyrex.com.
              You may access these materials for personal use, subject to the
              restrictions specified in these terms and conditions.
            </p>
            <p>
              You must not:
              <ul className="list-disc pl-4">
                <li>Republish material from orchyrex.com</li>
                <li>Sell, rent, or sub-license material from orchyrex.com</li>
                <li>
                  Reproduce, duplicate, or copy material from orchyrex.com
                </li>
                <li>Redistribute content from orchyrex.com</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">
              User-Generated Content (Comments)
            </h3>
            <p>
              Certain sections of the website allow users to post and exchange
              opinions and information. Orchyrex does not filter, edit, publish,
              or review Comments before their presence on the website. Comments
              solely reflect the views of the individual posting them. Orchyrex
              is not liable for any Comments but reserves the right to monitor
              and remove those deemed inappropriate, offensive, or violating
              these Terms and Conditions.
            </p>
            <p>
              Users warrant and represent that:
              <ul className="list-disc pl-4">
                <li>
                  They are entitled to post Comments on the website with all
                  necessary licenses and consents.
                </li>
                <li>
                  Comments do not infringe on any third-party intellectual
                  property rights.
                </li>
                <li>
                  Comments do not contain defamatory, libelous, offensive,
                  indecent, or unlawful material.
                </li>
                <li>
                  Comments will not be used for solicitation, promotion, or
                  presentation of commercial or unlawful activities.
                </li>
              </ul>
            </p>
            <p>
              Users grant orchyrex a non-exclusive license to use, reproduce,
              and edit their Comments.
            </p>
          </section>

          {/* Continue similarly for other sections */}

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Disclaimer</h3>
            <p>
              To the maximum extent permitted by applicable law, orchyrex
              excludes all representations, warranties, and conditions related
              to the website and its use. Nothing in this disclaimer will limit
              or exclude liability for death, personal injury, fraud, or any
              liabilities not permitted under applicable law.
            </p>
            <p>
              As long as the website and its services remain free of charge,
              orchyrex will not be liable for any loss or damage arising from
              the use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Reservation of Rights</h3>
            <p>
              Orchyrex reserves the right to request the removal of any links to
              our website and to amend these terms and conditions. Continuous
              linking to our website implies agreement with and adherence to
              these terms.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">
              Removal of Links from Our Website
            </h3>
            <p>
              If you find any offensive links on our website, please inform us,
              and we will consider your request. We are not obligated to respond
              or remove links but will assess each request.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Disclaimer</h3>
            <p>
              To the maximum extent permitted by applicable law, orchyrex
              excludes all representations, warranties, and conditions related
              to the website and its use. Nothing in this disclaimer will limit
              or exclude liability for death, personal injury, fraud, or any
              liabilities not permitted under applicable law.
            </p>
            <p>
              As long as the website and its services remain free of charge,
              orchyrex will not be liable for any loss or damage arising from
              the use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Entire Agreement</h3>
            <p>
              These terms and conditions, including the Privacy Policy,
              constitute the entire agreement between you and orchyrex regarding
              your use of orchyrex.com.
            </p>
          </section>
        </div>
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default FooterTermsCondition;
