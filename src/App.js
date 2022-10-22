import {
  Contact,
  Featured,
  Footer,
  Intro,
  Services,
  Sidebar,
  Testimonials,
} from "./components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Sidebar />
      <Intro />
      <Services />
      <Featured />
      <Testimonials />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
