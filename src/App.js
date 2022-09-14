import './App.scss';
import "bootstrap/dist/css/bootstrap.css";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Layout } from './components/layout/Layout';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { Manufacturing } from './pages/Manufacturing';
import { About } from './pages/About';
import { Product } from './pages/Product';
import { ProjectDetails } from './pages/ProjectDetails';
import { FAQs } from './pages/FAQs';
import { CategoryInner } from './pages/CategoryInner';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Product />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/category" element={<CategoryInner />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
