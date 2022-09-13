import '../styles/ProjectDetails.scss';

import Masonry from "react-masonry-css";

import empty from '../images/empty.png';
import asan1 from '../images/asan1.png';
import asan2 from '../images/asan2.png';
import asan3 from '../images/asan3.png';
import asan4 from '../images/asan4.png';
import { Button } from '../components/Button';

export const ProjectDetails = () => {
    return (
        <div className="pd-wrapper">
            <div className='pd-banner'>
                <img src={empty} alt="pd banner" />
                <div className='pd-contentWrapper'>
                    <div className="pd-content">
                        <h2>Asan Xidmət</h2>
                        <div className='pd-text'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum, culpa. Dolorem, obcaecati facilis rem saepe
                                sapiente magnam deserunt tempore consequatur quaerat possimus
                                ullam, rerum quisquam harum maxime asperiores voluptatem doloribus.
                            </p>
                            <p>
                                Tarix: 12 Aprel 2020 <br />
                                Müştəri: Asan xidmət
                            </p>
                        </div>
                    </div>
                    <div className="pd-btnHolder">
                        <Button content='Sonraki proyekt' />
                    </div>
                </div>
            </div>
            <div className="container">
                <Masonry
                    breakpointCols={2}
                    className="my-masonry-grid my-4"
                    columnClassName="my-masonry-grid_column">
                    {[
                        <img width={"100%"} alt="gallery" src={asan1} />,
                        <img width={"100%"} alt="gallery" src={asan2} />,
                        <img width={"100%"} alt="gallery" src={asan3} />,
                        <img width={"100%"} alt="gallery" src={asan4} />,
                    ]}
                </Masonry>
            </div>
        </div>
    );
}