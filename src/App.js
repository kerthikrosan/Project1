import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Services from "./pages/Services";
import PayNowButton from "./pages/PayNowButton";
import PaymentPage from "./pages/PaymentPage";
import Footer from "./components/Footer";
import SampleArt from "./pages/SampleArt";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <Header />
                <Main />
                <About />
                <Services />
                <PayNowButton />
                <Footer />
              </Fragment>
            }
          />
          <Route path="/payment/page" element={<PaymentPage />} />
          <Route path="/sample/art" element={<SampleArt />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
