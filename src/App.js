import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./Components/MainComponents/Main";
import MainSectionHome from "./Components/HomeComponent/MainSectionHome";
import ProductDetail from "./Components/AllProduct/ProductDetail";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductCardBag from "./Components/ProductCartBag/ProductCartBag";
import CommingSoon from "./Components/HomeComponent/CommingSoon";
import ProductContextProvider from "./context/UserContextProvider";
import FavouriteList from "./Components/FavouriteList/FavouriteList";
// import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import LoginForm from "./Components/FormsAll/Login";
import SignupForm from "./Components/FormsAll/Signup";
import FooterPrivacyPolicy from "./Components/FooterSectionFaq/FooterPrivacyPolicy";
import FooterTermsCondition from "./Components/FooterSectionFaq/FooterTermsCondition";
import FooterAboutUs from "./Components/FooterSectionFaq/FooterAboutUs";
// import Tester from './Tester';
import FormalShirtDetailTypes from "./Components/AllProductDetailTypes/FormalShirtDetailTypes";
import CasualShirtAll from "./Components/AllProductDetailTypes/CasualShirtAll";
import PartyWearShirt from "./Components/AllProductDetailTypes/PartyWearShirt";
import TshirtAll from "./Components/AllProductDetailTypes/T-shirtAll";
import ContactInformation from "./Components/FooterSectionFaq/ContactUshelp";
import Delivery from "./Components/FooterSectionFaq/Delivery";
import ReturnAndRefaundPolicy from "./Components/FooterSectionFaq/ReturnAndRefaundPolicy";
import OrderSummary from "./Components/Order-Summury/OrderSummary";
import SimilarProduct from "./Components/AllProduct/SimilarProduct";
import UserRegistration from "./Components/FormsAll/UserRegistration";
import FooterOfferAndPayment from "./Components/FooterSectionFaq/FooterOfferAndPayment";
import SizeGuid from "./Components/FooterSectionFaq/SizeGuid";
import UserInformation from "./Components/UserProfile/UserInformation";
import "react-toastify/dist/ReactToastify.css";
import UserOrderDetails from "./Components/UserOrderDetails/UserOrderDetails";
import ChecksShirtAll from "./Components/AllProductDetailTypes/ChecksShirtAll";
import PlainShirtAll from "./Components/AllProductDetailTypes/PlainShirtAll";
import PrintedShirtAll from "./Components/AllProductDetailTypes/PrintedShirtAll";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import FooterFAQ from "./Components/FooterSectionFaq/FooterFAQ";
import ForgotPassword from "./Components/FormsAll/ForgotPassword";
import Shirt from "./Components/AllProductDetailTypes/Shirt";
import DeleteUser from "./Components/UserProfile/DeleteUser";

const App = () => {
  const [alphaUser, setAlphaUser] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setAlphaUser(true);
  }, []);

  return (
    <div>
      <ProductContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <MainSectionHome
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />
          <Route
            path="/main"
            element={<Main alphaUser={alphaUser} setAlphaUser={setAlphaUser} />}
          />
          <Route
            path="/show-now-main"
            element={
              <ProductDetail
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />
          <Route path="/Similar-product" element={<SimilarProduct />} />
          <Route
            path="/product-details/:_id"
            element={
              <ProductDetails
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />

          <Route
            path="/product-cart"
            element={
              <ProtectedRoute alphaUser={alphaUser} setAlphaUser={setAlphaUser}>
                <ProductCardBag
                  alphaUser={alphaUser}
                  setAlphaUser={setAlphaUser}
                />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/product-cart" element={<ProductCardBag/>} />  */}
          <Route
            path="/favourite-list"
            element={
              <ProtectedRoute alphaUser={alphaUser} setAlphaUser={setAlphaUser}>
                <FavouriteList
                  alphaUser={alphaUser}
                  setAlphaUser={setAlphaUser}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-summary"
            element={
              <ProtectedRoute alphaUser={alphaUser} setAlphaUser={setAlphaUser}>
                <OrderSummary
                  alphaUser={alphaUser}
                  setAlphaUser={setAlphaUser}
                />
              </ProtectedRoute>
            }
          />

          <Route path="/comming-soon" element={<CommingSoon />} />
          {/* <Route path='/tester' element={<Tester />} /> */}
          <Route
            path="/user-information"
            element={
              <UserInformation
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />

          <Route
            path="/login-form"
            element={
              <LoginForm alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ForgotPassword
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />
          <Route
            path="/signup-form"
            element={
              <SignupForm alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
            }
          />
          <Route path="/user-registration" element={<UserRegistration />} />

          {/* shirt catrogry */}
          <Route
            path="/formal-shirt"
            element={
              <FormalShirtDetailTypes
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />
          <Route
            path="/shirt"
            element={
              <Shirt alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
            }
          />
          <Route
            path="/casual-shirt"
            element={
              <CasualShirtAll
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />
          <Route
            path="/party-wear-shirt"
            element={
              <PartyWearShirt
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />
          <Route
            path="/tshirt"
            element={
              <TshirtAll alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
            }
          />
          {/* <Route
  path={["/t-shirt", "/tshirt"]}
  element={<TshirtAll alphaUser={alphaUser} setAlphaUser={setAlphaUser} />}
/> */}

          <Route
            path="/checks-shirt"
            element={
              <ChecksShirtAll
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />
          <Route
            path="/plain-shirt"
            element={
              <PlainShirtAll
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />
          <Route
            path="/printed-shirt"
            element={
              <PrintedShirtAll
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />

          {/* footersection components */}
          <Route path="/privacy-policy" element={<FooterPrivacyPolicy />} />
          <Route path="/terms-condition" element={<FooterTermsCondition />} />

          <Route
            path="/about-us"
            element={
              <FooterAboutUs
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />
          <Route
            path="/faq-section"
            element={
              <FooterFAQ alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
            }
          />
          <Route
            path="/Size-guide"
            element={
              <SizeGuid alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
            }
          />
          <Route
            path="/contact-us"
            element={
              <ContactInformation
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />
          <Route
            path="/Delivery"
            element={
              <Delivery alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
            }
          />
          <Route
            path="/Return-and-refund"
            element={
              <ReturnAndRefaundPolicy
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />
          <Route
            path="/Offer-and-payment"
            element={
              <FooterOfferAndPayment
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />

          <Route
            path="/user-order-details"
            element={
              <UserOrderDetails
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />

          <Route
            path="/delete-account"
            element={
              <DeleteUser
                alphaUser={alphaUser}
                setAlphaUser={setAlphaUser}
              />
            }
          />

          {/* <Route path='/razorpay-payment' element={<RazorPayIntegration />} /> */}
        </Routes>
      </ProductContextProvider>

      <ScrollButton />
      {/* <FooterSectionFaq/> 
    <
      {/* <Tester/> */}
    </div>
  );
};

export default App;

export const ProtectedRoute = ({ alphaUser, setAlphaUser, children }) => {
  if (alphaUser) {
    return children;
  } else {
    const token = localStorage.getItem("token");
    if (token) return children;
    else return <Navigate to={"/login-form"} />;
  }
};
