import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import styles from "../styles/NavItem.module.scss";

import arrow from "../icons/arrow-down.svg";
import arrowW from "../icons/arrow-down-w.svg";

export const NavItem = ({ title, slug, image }) => {
    const [subCategories, setSubCategories] = useState([]);
    const [subActive, setSubActive] = useState(false);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        const fetchSubCategories = async () => {
            await axios(
                process.env.REACT_APP_API_URL +
                    `/api/categories/${slug}?lang=az`,
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
    }, [slug]);

    const handleSubs = () => {
        setSubActive(!subActive);
    };

    return (
        <>
            <li className={styles.navItem}>
                {title}
                {subCategories.length !== 0 ? (
                    <img
                        onClick={() => {
                            handleSubs();
                        }}
                        alt="arrow"
                        src={window.innerWidth > 768 ? arrow : arrowW}
                    />
                ) : null}
                {subCategories.length !== 0 ? (
                    <div className={styles.dropdownContent}>
                        {image ? (
                            <div className={styles.dropdownItem}>
                                <img
                                    src={
                                        process.env.REACT_APP_API_URL +
                                        "/storage/" +
                                        image
                                    }
                                    alt="nav"
                                />
                            </div>
                        ) : null}
                        {subCategories.length !== 0 && window.innerWidth > 768
                            ? subCategories.map((item) => {
                                  return (
                                      <div
                                          key={item.id}
                                          className={styles.dropdownItem}
                                      >
                                          <h4>{item.name}</h4>
                                      </div>
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
