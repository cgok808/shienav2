import {
  Contact,
  Featured,
  Footer,
  Intro,
  Services,
  Sidebar,
  Studio,
  Testimonials,
} from "./components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Sidebar />
      <Intro />
      <Services />
      <Studio />
      <Featured />
      <Testimonials />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
