import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { DropdownSubItem } from "./DropdownSubItem";
import styles from "../styles/NavItem.module.scss";

import arrow from "../icons/arrow-down.svg";
import arrowW from "../icons/arrow-down-w.svg";
import empty from "../images/empty-rect.png";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { CategoryContext } from "../contexts/CategoryContext";
import { Link } from "react-router-dom";

export const NavItem = ({ title, slug }) => {
    const { lang } = useContext(LanguageContext);
    const { getInnerPage } = useContext(CategoryContext);
    const [subCategories, setSubCategories] = useState([]);
    const [subActive, setSubActive] = useState(false);
    const [img, setImg] = useState(empty);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchSubCategories = async () => {
            await axios(
                process.env.REACT_APP_API_URL +
                    `/api/categories/${slug}?lang=${lang}`,
                { cancelToken: cancelToken.token }
            )
                .then((res) => {
                    setSubCategories(res.data.data);
                })
                .catch((err) => {
                    if (axios.isCancel(err)) {
                        console.log(err);
                    }
                });
        };
        fetchSubCategories();
        return () => {
            cancelToken.cancel();
        };
    }, [slug, lang]);

    const handleSubs = () => {
        setSubActive(!subActive);
    };

    return (
        <>
            <li
                onClick={() => {
                    handleSubs();
                }}
                className={styles.navItem}
            >
                {title}
                {subCategories.length !== 0 ? (
                    <img
                        alt="arrow"
                        src={window.innerWidth > 768 ? arrow : arrowW}
                    />
                ) : null}
                {subCategories.length !== 0 ? (
                    <div className={styles.dropdownContent}>
                        <div className={styles.dropdownItem}>
                            <img src={img} alt="nav" />
                        </div>
                        {subCategories.length !== 0 && window.innerWidth > 768
                            ? subCategories.map((item) => {
                                  return (
                                      <Link
                                          to="/category"
                                          key={item.id}
                                          onClick={() => {
                                              getInnerPage(item.slug);
                                          }}
                                          className={styles.dropdownItem}
                                          onMouseEnter={() => {
                                              if (item.image) {
                                                  setImg(
                                                      process.env
                                                          .REACT_APP_API_URL +
                                                          "/storage/" +
                                                          item.image
                                                  );
                                              } else {
                                                  setImg(empty);
                                              }
                                          }}
                                          onMouseLeave={() => {
                                              setImg(empty);
                                          }}
                                      >
                                          <h4>{item.name}</h4>
                                          <ul>
                                              <DropdownSubItem
                                                  key={item.id}
                                                  slug={item.slug}
                                              />
                                          </ul>
                                      </Link>
                                  );
                              })
                            : null}
                    </div>
                ) : null}
            </li>
            {subCategories.length !== 0 && window.innerWidth < 768 && subActive
                ? subCategories.map((item) => {
                      return (
                          <div className={styles.navItem} key={item.id}>
                              <h4>{item.name}</h4>
                          </div>
                      );
                  })
                : null}
        </>
    );
};
