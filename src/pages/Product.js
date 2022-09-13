import { Button } from '../components/Button';

import styles from '../styles/Product.module.scss';

import prod from '../images/product.png'
import empty from '../images/empty-rect.png'

export const Product = () => {
    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className="row">
                        <div className="col-sm-5 col-12">
                            <div className={styles.imgHolder}>
                                <img src={prod} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-7 col-12">
                            <div className={styles.contentHolder}>
                                <h2>F 50</h2>
                                <p>
                                    • Dekoratif kapak alternatifleri, standart ve özel açılara uygun özel profiller ile dikkat çekici estetige sahip cepheler tasarlanabilir, <br />
                                    • Drenaj (Kondens) kanalı sayesinde maksimum hava ve su tahliye performansı,<br />
                                    • Maksimum bina yüksekligi 100 m.• 6 – 50 mm arası cam kombinasyonu,<br />
                                    • Bütün fitillerin EPDM olması sayesinde uzun ömürlülük,• Pratik ve sorunsuz detay çözümleri. <br />
                                    • Isı Geçirgenlik (Uf): 6.8 W/m²K
                                </p>
                                <div className={styles.btnHolder}>
                                    <Button content="Kataloqlara bax" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.similar}>
                    <h2>Oxşar məhsullar</h2>
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className={styles.similarItem}>
                                <img src={empty} alt="" />
                                <h4>Lorem, ipsum.</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className={styles.similarItem}>
                                <img src={empty} alt="" />
                                <h4>Lorem, ipsum.</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className={styles.similarItem}>
                                <img src={empty} alt="" />
                                <h4>Lorem, ipsum.</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className={styles.similarItem}>
                                <img src={empty} alt="" />
                                <h4>Lorem, ipsum.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}