import React from "react";
import "./App.css";
import CaseReview from "./components/CaseReview";
import ClaimForm from "./components/ClaimForm";
import InfoBanner from "./components/InfoBanner";

function App() {
  return (
    <div className="container">
      <div className="left-panel">
        <CaseReview />
        <InfoBanner />
      </div>
      <div className="right-panel">
        <ClaimForm />
      </div>
    </div>
  );
}

export default App;
