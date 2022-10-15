import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { Home } from "./pages/Home";
// import { HomeTwo } from "./pages/HomeTwo";
import { Header } from "./components/layout/Header";
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

sessionStorage.setItem("categorySlug", "");
sessionStorage.setItem("subCategorySlug", "");

function App() {
    return (
        <div className="App">
            <LanguageProvider>
                <SearchProvider>
                    <CategoryProvider>
                        <ProductProvider>
                            <ProjectProvider>
                                <Header />
                                <Routes>
                                    <Route
                                        path="/contact"
                                        element={<Contact />}
                                    />
                                    {
                                        // window.innerWidth > 992 ?
                                        //     <Route path="/" element={<HomeTwo />} /> :
                                        //     <Route path="/" element={<Home />} />
                                    }
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
                                    <Route path="/about" element={<About />} />
                                    <Route
                                        path="/details"
                                        element={<Product />}
                                    />
                                    <Route path="/faqs" element={<FAQs />} />
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
                        </ProductProvider>
                    </CategoryProvider>
                </SearchProvider>
            </LanguageProvider>
        </div>
    );
}

export default App;
