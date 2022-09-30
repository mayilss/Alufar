import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Manufacturing } from "./pages/Manufacturing";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { ProjectDetails } from "./pages/ProjectDetails";
import { FAQs } from "./pages/FAQs";
import { CategoryInner } from "./pages/CategoryInner";

import { ProjectProvider } from "./contexts/ProjectContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import { ProductProvider } from "./contexts/ProductContext";
import { SearchResults } from "./pages/SearchResults";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
    return (
        <div className="App">
            <LanguageProvider>
                <SearchProvider>
                    <CategoryProvider>
                        <ProductProvider>
                            <Layout>
                                <ProjectProvider>
                                    <Routes>
                                        <Route
                                            path="/contact"
                                            element={<Contact />}
                                        />
                                        <Route path="/" element={<Home />} />
                                        <Route
                                            path="/projects"
                                            element={<Projects />}
                                        />
                                        <Route
                                            path="/projectdetails"
                                            element={<ProjectDetails />}
                                        />
                                        <Route
                                            path="/manufacturing"
                                            element={<Manufacturing />}
                                        />
                                        <Route
                                            path="/about"
                                            element={<About />}
                                        />
                                        <Route
                                            path="/details"
                                            element={<Product />}
                                        />
                                        <Route
                                            path="/faqs"
                                            element={<FAQs />}
                                        />
                                        <Route
                                            path="/searchresults"
                                            element={<SearchResults />}
                                        />
                                        <Route
                                            path="/category"
                                            element={<CategoryInner />}
                                        />
                                    </Routes>
                                </ProjectProvider>
                            </Layout>
                        </ProductProvider>
                    </CategoryProvider>
                </SearchProvider>
            </LanguageProvider>
        </div>
    );
}

export default App;
