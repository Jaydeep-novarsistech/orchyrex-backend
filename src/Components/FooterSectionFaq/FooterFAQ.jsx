import React, { useEffect } from "react";
import Services from "../HomeComponent/Services";
import Footer from "../HomeComponent/Footer";
import Navbar from "../HomeComponent/Navbar";
import { Link } from "react-router-dom";

const FooterFAQ = ({ alphaUser, setAlphaUser }) => {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <div className="max-w-[1240px] lg:mx-auto mx-8 mt-[8rem]  my-10">
          <>
            <div className="container mx-auto p-4">
              <p className="text-2xl font-bold mb-4">About Orchyrex</p>
              <p className="mb-4">Welcome to Orchyrex,</p>
              <p className="mb-4">
                Established in 2023 amidst the vibrant streets of Mohalla
                Atarpura in Gajraula, Amroha, Uttar Pradesh, Orchyrex is more
                than just a clothing brand. We are a celebration of style,
                individuality, and the essence of the modern spirit.
              </p>
              <p className="mb-4">Our Journey:</p>
              <p className="mb-4">
                Born from a passion for weaving together threads of innovation
                and fashion, Orchyrex has embarked on a journey to redefine the
                way you dress and express yourself. Our journey started with a
                simple yet powerful belief - that clothing should resonate with
                your personality, empowering you with confidence and comfort.
              </p>
              <p className="mb-4">Crafting Style and Substance:</p>
              <p className="mb-4">
                At Orchyrex, we meticulously craft each garment with precision
                and care. Our designs are a fusion of contemporary aesthetics
                and timeless elegance, catering to diverse tastes and
                preferences. From chic urban wear to classic ensembles, our
                collections are curated to inspire and elevate your style
                quotient.
              </p>
              <p className="mb-4">Beyond Fashion:</p>
              <p className="mb-4">
                More than just a clothing brand, Orchyrex represents a
                lifestyle. We embrace diversity, inclusivity, and the richness
                of individual expression. Our commitment
              </p>
            </div>

            <p className="text-2xl font-bold mb-4">About Orchyrex</p>
            <p className="mb-4">
              extends beyond the garments we create; we aspire to foster a
              community where everyone feels seen, heard, and celebrated.
            </p>
            <p className="mb-4">Our Promise:</p>
            <p className="mb-4">
              We pledge unwavering dedication to quality, innovation, and
              customer satisfaction. Every stitch, fabric, and design detail is
              infused with our commitment to delivering products that exceed
              your expectations.
            </p>
            <p className="mb-4">Join Our Journey:</p>
            <p className="mb-4">
              Whether you're discovering us for the first time or have been part
              of our story since the beginning, we invite you to explore our
              collections, embrace your uniqueness, and embark on this stylish
              journey with Orchyrex.
            </p>
            <p className="mb-4">
              Thank you for choosing Orchyrex. Let's redefine fashion, together.
              make on-reacting language.
            </p>
            <p className="text-2xl font-bold mb-4">Contact us</p>
            <p className="mb-4">How to Contact Orchyrex:</p>
            <p className="mb-4">
              By Email: <a href="mailto:info@orchyrex.com">info@orchyrex.com</a>
            </p>
            <p className="mb-4">By Phone:</p>
            <p className="mb-4">
              +91 9111720303 (Mon-Sat 08:00 am to 08:00 pm, excluding gazetted
              holidays)
            </p>
            <p className="mb-4">
              +91 7536051360 (Mon-Sat 08:00 am to 08:00 pm, excluding gazetted
              holidays)
            </p>
            <p className="mb-4">By Post:</p>
            <p className="mb-4">Mohalla Atarpura, Gajraula Amroha (U.P), Pin Code - 244235</p>
            <p className="mb-4">Grievance Officer:</p>
            <p className="mb-4">Mrs. Kanupriya Sharma</p>
            <p className="mb-4">Phone: +91 9111720303</p>
            <p className="mb-4">
              Postal Address: Scheme No. 92, BN House, 1st floor EC-52, Vijay
              Nagar, Indore, Madhya Pradesh 452010.
            </p>
            <p className="text-2xl font-bold mb-4">Refund and Return policy</p>
            <p className="mb-4">1. What is your return policy?</p>
            <p className="mb-4 font-bold">Return Policy:</p>
            <p className="mb-4">
              We are committed to ensuring your satisfaction with our products.
              We offer a no-questions-asked return policy, allowing you to
              return merchandise within 35 days of delivery.
            </p>
            <p className="mb-4 font-bold">Eligibility:</p>
            <p className="mb-4">
              To be eligible for a refund, the merchandise must be unused and have all price tags intact. Please note that some items, such as masks, items, and products with a broken seal, are excluded from our return policy. Certain items may have specific terms and conditions, which will be product-specific.
            </p>
            <p className="mb-4 font-bold">Return Process:</p>
            <p className="mb-4">
              You can initiate a return online from the comfort of your home or
              at the nearest offline store. For Cash on Delivery orders, the
              refund will be initiated once we receive the bank account details
              from the customer.
            </p>

            <div className="mb-4">
              <p>
                - **Affiliate:** Denotes an entity controlling, controlled by,
                or under common control with a party, where "control" implies
                ownership of 50% or more of shares or securities.
              </p>
              <p>...</p>
            </div>

            {/* Section 2 */}
            <div className="mb-4">
              <p className="text-2xl font-bold mb-2">
                **Changes to this Privacy Policy**
              </p>
              <p>
                We may periodically update our Privacy Policy. You will be
                notified of any changes through email or prominent notices on
                our service before the modifications take effect. Please review
                this Privacy Policy periodically for updates.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-4">
              <p className="text-2xl font-bold mb-2">**Contact Us**</p>
              <p>
                If you have inquiries about this Privacy Policy, please feel
                free to reach out to us:
              </p>
              <ul className="list-disc pl-8">
                <li>
                  By email:{" "}
                  <a href="mailto:info@orchyrex.com">info@orchyrex.com</a>
                </li>
                <li>
                  By visiting this page on our website:{" "}
                  <a href="https://orchyrex.com/contact-us/">Contact Us</a>
                </li>
                <li>By phone number: +91 9111720303</li>
                <li>By mail: Mohalla Atarpura, Gajraula Amroha (U.P) , Pin Code - 244235</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-4">
              <p className="text-2xl font-bold mb-2">
                **Collecting and Using Your Personal Data**
              </p>
              <p className="mb-2">*Types of Data Collected*</p>

              {/* Subsection 4.1 */}
              <div className="mb-2">
                <p className="text-2xl font-bold mb-2">**Personal Data**</p>
                <p>
                  While using our service, we may request you to provide certain
                  personally identifiable information, including but not limited
                  to:
                </p>
                <ul className="list-disc pl-8">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                </ul>
              </div>

              {/* Subsection 4.2 */}
              <div className="mb-2">
                <p className="text-2xl font-bold mb-2">**Usage Data**</p>
                <p>
                  Collected automatically during service use, including
                  information such as IP address, browser type, pages visited,
                  time and date of visit, and unique device identifiers.
                </p>
              </div>

              {/* Subsection 4.3 */}
              <div className="mb-2">
                <p>*Information from Third-Party Social Media Services*</p>
                <p>
                  We allow registration and login through Third-Party Social
                  Media Services like Google, Facebook, Instagram, Twitter, and
                  LinkedIn. If you choose this option, we may collect associated
                  personal data.
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Transfer of Your Personal Data
              </h2>
              <p>
                Your data may be processed outside your jurisdiction, and by
                using our service, you
              </p>
              <p className="mb-4">consent to this transfer.</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Security of Your Personal Data
              </h2>
              <p>
                While we employ commercially acceptable security measures, no
                method of
              </p>
              <p className="mb-4">
                transmission or electronic storage is entirely secure. We cannot
                guarantee absolute security.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Children's Privacy</h2>
              <p>
                Our service is not directed at children under 13. If we become
                aware of unintentional
              </p>
              <p className="mb-4">
                data collection from minors, we take steps to remove such
                information.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Links to Other Websites
              </h2>
              <p>
                Our service may contain links to third-party websites. We are
                not responsible for
              </p>
              <p className="mb-4">
                their content or privacy practices. Please review their privacy
                policies.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
              <p>
                If you have questions, contact us through the provided channels:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  By email:{" "}
                  <a href="mailto:info@orchyrex.com">info@orchyrex.com</a>
                </li>
                <li>By phone: +91 9111720303</li>
                <li>By mail: Mohalla Atarpura, Gajraula Amroha (U.P) , Pin Code - 244235</li>
              </ul>
              <p>
                Or visit our{" "}
                <a href="https://orchyrex.com/contact-us/">Contact Us</a> page.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Terms and Conditions</h2>
              <p>Welcome to orchyrex.com!</p>
              <p>
                These terms and conditions govern your use of the orchyrex
                website, accessible at{" "}
                <a href="https://orchyrex.com/">https://orchyrex.com/</a>.
              </p>
              <p>
                By continuing to use this website, you agree to comply with and
                be bound by these terms. If you do not agree with any part of
                these terms, please refrain from using orchyrex.com.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Interpretation</h2>
              <p>In these Terms and Conditions:</p>
              <ul className="list-disc ml-6">
                <li>
                  "Client," "You," and "Your" refer to the user of this website.
                </li>
                <li>
                  "The Company," "Ourselves," "We," "Our," and "Us" refer to
                  orchyrex.
                </li>
                <li>
                  "Party," "Parties," or "Us" refer collectively to the Client
                  and orchyrex.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Cookies</h2>
              <p>
                By accessing orchyrex.com, you agree to the use of cookies as
                outlined in the orchyrex Privacy Policy. Cookies enhance user
                experience and facilitate the functionality of specific website
                areas. Some affiliates/advertising partners may also use
                cookies.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">License</h2>
              <p>
                Unless stated otherwise, orchyrex and/or its licensors hold the
                intellectual property rights for all materials on orchyrex.com.
                You may access these materials for personal use, subject to the
                restrictions specified in these terms and conditions.
              </p>
              <p>You must not:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Republish material from orchyrex.com</li>
                <li>Sell, rent, or sub-license material from orchyrex.com</li>
                <li>
                  Reproduce, duplicate, or copy material from orchyrex.com
                </li>
                <li>Redistribute content from orchyrex.com</li>
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                User-Generated Content (Comments)
              </h2>
              <p>
                Certain sections of the website allow users to post and exchange
                opinions and
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                User-Generated Content (Comments)
              </h2>
              <p>
                Orchyrex does not filter, edit, publish, or review Comments
                before their presence on the website. Comments solely reflect
                the views of the individual posting them. Orchyrex is not liable
                for any Comments but reserves the right to monitor and remove
                those deemed inappropriate, offensive, or violating these Terms
                and Conditions.
              </p>
              <p>Users warrant and represent that:</p>
              <ul className="list-disc ml-6 mb-4">
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
              <p>
                Users grant orchyrex a non-exclusive license to use, reproduce,
                and edit their Comments.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Hyperlinking to our Content
              </h2>
              <p>
                Certain organizations may link to our website without prior
                written approval, including government agencies, search engines,
                news organizations, and online directory distributors. Orchyrex
                may consider link requests from other types of organizations,
                provided they meet specific criteria.
              </p>
              <p>
                Approved organizations may hyperlink to our website using our
                corporate name, uniform resource locator, or other relevant
                descriptions within the context of their site.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">iFrames</h2>
              <p>
                Without prior approval, you may not create frames around our
                webpages that alter the visual presentation of our website.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Content Liability</h2>
              <p>
                We are not responsible for any content appearing on your
                website. By using our website, you agree to defend and protect
                us against all claims arising on your website.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Reservation of Rights</h2>
              <p>
                Orchyrex reserves the right to request the removal of any links
                to our website and to amend these terms and conditions.
                Continuous linking to our website implies
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Agreement and Adherence
              </h2>
              <p>
                Users agree to and adhere to these terms in using orchyrex.com.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Removal of Links from Our Website
              </h2>
              <p>
                If you find any offensive links on our website, please inform
                us, and we will consider your request. We are not obligated to
                respond or remove links but will assess each request.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Disclaimer</h2>
              <p>
                To the maximum extent permitted by applicable law, orchyrex
                excludes all representations, warranties, and conditions related
                to the website and its use. Nothing in this disclaimer will
                limit or exclude liability for death, personal injury, fraud, or
                any liabilities not permitted under applicable law.
              </p>
              <p>
                As long as the website and its services remain free of charge,
                orchyrex will not be liable for any loss or damage arising from
                the use of this website. These terms and conditions, including
                the Privacy Policy, constitute the entire agreement between you
                and orchyrex regarding your use of orchyrex.com.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Offers</h2>
              <p>
                <strong>Q.1 What is the T&amp;C for Flat 60% off?</strong>
              </p>
              <p>
                Discount Details:A Flat 60% off is applicable, but only on
                selected styles.
              </p>
              <p>
                Promo Code: No promo code is required. The discounted prices
                will automatically be applied on the Checkout page.
              </p>
              <p>
                Return Policy: The return criteria for styles will apply as per
                the return policy of Orchyrex.com.
              </p>
              <p>
                Offer Period: The offer is valid from 12th Jan to 15th Jan,
                making it a limited-period offer.
              </p>
            </div>

            <div className="mb-4">
              <p>
                <strong>Terms & Conditions:</strong> Orchyrex Pvt. Ltd. reserves
                the right to amend the terms and conditions at any time for
                Orchyrex.com. This means that the terms of the offer are subject
                to change, and users should be aware of any updates or
                modifications.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Q. 2 What is the T&amp;C for Flat 40% off on selected lines?
              </h2>
              <p>
                Discount Details: Flat 40% off is applicable, but only on
                selected styles.
              </p>
              <p>
                Promo Code: No promo code is required. The discounted prices
                will automatically be applied on the Checkout page.
              </p>
              <p>
                Return Policy: The return criteria for styles will apply as per
                Orchyrex.com's return policy.
              </p>
              <p>
                Offer Period: The promotion is a limited period offer, implying
                that the discounted prices will be available for a specific
                duration. However, the exact duration is not specified in the
                provided information.
              </p>
              <p>
                <strong>Terms & Conditions:</strong> Orchyrex Pvt. Ltd. reserves
                the right to amend the terms and conditions at any time for
                Orchyrex.com. This means that the terms of the offer are subject
                to change, and users should be aware of any updates or
                modifications.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Q. 3 What is the T&amp;C for Up to 60% off?
              </h2>
              <p>
                Discount Details: Up to 60% off is applicable, but only on
                selected styles.
              </p>
              <p>
                Promo Code: No promo code is required. The discounted prices
                will automatically be applied on the Checkout page.
              </p>
              <p>
                Return Policy: The return criteria for styles will apply as per
                Orchyrex.com's return policy.
              </p>
              <p>
                Offer Period: The promotion is a limited period offer, meaning
                that the discounted prices are available for a specific
                duration. However, the exact duration is not specified in the
                provided information.
              </p>
              <p>
                <strong>Terms & Conditions:</strong> Orchyrex Pvt. Ltd. reserves
                the right to amend the terms and conditions at any time for
                Orchyrex.com. This indicates that the terms of the offer are
                subject to change, and users should be aware of any updates or
                modifications.
              </p>
            </div>

            <div className="mb-4">
              <p>
                <strong>Terms & Conditions:</strong> Orchyrex Pvt. Ltd. reserves
                the right to amend the terms and conditions at any time for
                Orchyrex.com. This means that the terms of the offer are subject
                to change, and users should be aware of any updates or
                modifications.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Q. 4 What is the T&amp;C for Flat ₹990?
              </h2>
              <p>
                Discount Details: Flat ₹990 off is applicable, but only on
                selected styles.
              </p>
              <p>
                Promo Code: No promo code is required. The discounted prices
                will be automatically applied on the Checkout page.
              </p>
              <p>
                Return Policy: Products under this promotion are not eligible
                for return. This means that once purchased, these items cannot
                be returned.
              </p>
              <p>
                Employee Discount: The employee discount is not applicable for
                products under this promotion. It seems that additional
                discounts, such as employee discounts, do not apply to the items
                included in this specific promotion.
              </p>
              <p>
                Offer Period: The promotion is a limited period offer,
                indicating that the discounted prices are available for a
                specific duration. However, the exact duration is not specified
                in the provided information.
              </p>
              <p>
                <strong>Terms & Conditions:</strong> Orchyrex Pvt. Ltd. reserves
                the right to amend the terms and conditions at any time for
                Orchyrex.com. This implies that the terms of the offer are
                subject to change, and users should be aware of any updates or
                modifications.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Q. 5 What is the T&amp;C for Up to 50% off?
              </h2>
              <p>
                Discount Details: Up to 50% off is applicable, but only on
                selected styles.
              </p>
              <p>
                Promo Code: No promo code is required. The discounted prices
                will automatically be applied on the Checkout page.
              </p>
              <p>
                Return Policy: The return criteria for styles will apply as per
                Orchyrex.com's return policy. It suggests that the return policy
                for these discounted styles is the same as the standard return
                policy for the website.
              </p>
              <p>
                Offer Period: The promotion is a limited period offer,
                indicating that the discounted prices are available for a
                specific duration. However, the exact duration is not specified
                in the provided information.
              </p>
              <p>
                <strong>Terms & Conditions:</strong> Orchyrex Pvt. Ltd. reserves
                the right to amend the terms and conditions at any time for
                Orchyrex.com. This implies that the terms of the offer are
                subject to change, and users should be aware of any updates or
                modifications.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Q. 6 What is the T&amp;C for Flat 50% off?
              </h2>
              <p>Flat 50% off is applicable only on selected styles.</p>
              <p>
                Additional 10% discount is applicable only on festivals. No
                promo code is required.
              </p>
              <p>
                Return criteria for styles are applicable as per the return
                policy.
              </p>
            </div>

            <div className="mb-4">
              <p>● Limited period offers only.</p>
              <p>
                ● Orchyrex Pvt. Ltd. reserves the right to amend the terms &amp;
                conditions at any time. Terms are subject to change for
                orchyrex.com.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Q.7 How do I apply a promotional code to my order?
              </h2>
              <p>● Navigate to your shopping cart.</p>
              <p>
                ● Input the unique promotional code into the designated 'Enter
                promotion code' field.
              </p>
              <p>● Click on the 'Apply' button.</p>
              <p>
                ● Verify that the discount is reflected in the order summary box
                and observe the change in the estimated total.
              </p>
              <p>
                If you encounter any issues or have questions, please don't
                hesitate to contact us.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Q.8 Why is my promotional code not working?
              </h2>
              <p>
                If your promotion code is valid, it should appear as a discount
                in the order summary in your cart.
              </p>
              <p>
                To check your cart, please click on ‘Cart’ at the top right
                corner of the homepage.
              </p>
              <p>
                If your promotional discount isn’t showing, please follow these
                steps:
              </p>
              <p>
                ● Our promotional codes have expiry dates, so ensure it has not
                expired.
              </p>
              <p>
                ● Read the terms and conditions for the promotion code. The
                products you want might not be eligible, and some codes or
                offers can’t be used with others.
              </p>
              <p>
                ● Check you’ve entered the code correctly, ensuring there are no
                empty spaces.
              </p>
              <p>
                ● Check if the code has any capitals and double-check O vs 0, l
                vs I, etc. If you can, copy and paste it into the ‘Enter
                promotion code’ box.
              </p>
              <p>
                If you’re still unsure why your code isn’t working, please
                contact us. Click here for our contact details.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                Q. 9 What is the T&amp;C for vouchers/promos on the site?
              </h2>
              <p>● Coupon Code</p>
              <p>FIRST</p>
              <p>● Discount Details</p>
              <p>- Rs 1000 off on a minimum purchase of Rs 3000.</p>
              <p>● Applicability</p>
              <p>- Applicable on your first online purchase.</p>
              <p>- One-time use only.</p>
              <p>● Validity</p>
              <p>
                - Valid for 7 days from the date of customer registration. This
                means the coupon must be used within 7 days after the user
                registers on the website.
              </p>
              <p>● Restrictions</p>
              <p>
                - This voucher cannot be clubbed with any other offer. It cannot
                be combined with other promotions or discounts.
              </p>
              <p>● Terms &amp; Conditions</p>
              <p>
                - It's advisable to stay informed about any updates or
                modifications to the terms.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Payments</h2>
              <p>Q. 1 What payment methods do you accept?</p>
              <p>
                ● We welcome payments through a variety of channels, including
                credit/debit cards, net banking, and various digital wallets.
              </p>
              <p>Q. 2 Can I pay using a gift card?</p>
              <p>
                ● At present, gift cards are not accepted as a payment method on
                our website. However, we are actively exploring options to
                incorporate this feature in the future.
              </p>
              <p>Q. 3 When will you take payment for my order?</p>
              <p>
                ● When opting for online payment, your payment will be
                authorized upon order submission. For Cash on Delivery (COD)
                orders, you can conveniently settle the payment in cash directly
                to the delivery person.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Size guide</h2>
              <p>Q.1 Where can I find the size guides for your products?</p>
              <p>
                ● Unlock the secrets of perfect fit! Find size guides discreetly
                placed on each product page, or delve into the hidden sanctuary
                here. Your journey to sartorial bliss begins – because finding
                your size isn't just a quest, it's an odyssey! you can also find
                the size guide here.
              </p>
            </div>
          </>
        </div>
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default FooterFAQ;
