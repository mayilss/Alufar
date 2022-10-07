import { ProjectCard } from "../components/ProjectCard";
import { SimpleTitle } from "../components/SimpleTitle";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { SearchContext } from "../contexts/SearchContext";
import { useEffect } from "react";

import axios from "axios";
import { LanguageContext } from "../contexts/LanguageContext";
import { useState } from "react";
import { Footer } from "../components/layout/Footer";

export const SearchResults = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);

    const { valueChanged } = useContext(SearchContext);
    const { getProductInner } = useContext(ProductContext);
    const { lang } = useContext(LanguageContext);

    const navigate = useNavigate();

    useEffect(() => {
        setValue(sessionStorage.getItem("searchValue"));
    }, [valueChanged]);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchSearchResults = async () => {
            await axios(
                process.env.REACT_APP_API_URL +
                    `/api/products?lang=${lang}&item=4&search=${value}`
            )
                .then((res) => {
                    setResults(res.data.data);
                })
                .catch((err) => {
                    if (axios.isCancel(err)) {
                        return;
                    }
                });
        };
        console.log(value);
        fetchSearchResults();
        return () => {
            cancelToken.cancel();
        };
    }, [lang, value]);

    return (
        <main className="container py-5">
            <SimpleTitle title="Axtarış nəticələri" />
            <div className="row mt-5">
                {results.products &&
                    results.products.map((item) => {
                        return (
                            <div
                                onClick={() => {
                                    getProductInner(item.slug);
                                    navigate("/details");
                                }}
                                key={item.id}
                                className="col-md-3 col-sm-6 col-12"
                            >
                                <ProjectCard
                                    img={
                                        process.env.REACT_APP_API_URL +
                                        "/storage/" +
                                        item.image.slice(
                                            2,
                                            item.image.length - 2
                                        )
                                    }
                                    title={item.title}
                                />
                            </div>
                        );
                    })}
            </div>
            <Footer />
        </main>
    );
};
