import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import LunchPrepPage from "./components/LunchPrepPage";
import SustainabilityPage from "./components/SustainabilityPage";
import EatItPage from "./components/EatItPage";
import ReviewPage from "./components/ReviewPage";
import LocationPage from "./components/LocationPage";

function App() {
  return (
    <div className="d-flex flex-column flex-nowrap">
      <HomePage />
      <LunchPrepPage />
      <SustainabilityPage />
      <EatItPage />
      <ReviewPage />
      <LocationPage />
      <Footer />
    </div>
  );
}

export default App;
