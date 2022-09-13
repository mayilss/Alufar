import { AlSysCard } from "./AlSysCard";
import { Title } from "./Title";
import styles from '../styles/HomeAlSys.module.scss';

export const HomeAlSys = () => {
    return (
        <div className="container my-5">
            <div className={styles.wrapper}>
                <Title content="Alüminium sistemlər" />
                <div className="row py-4">
                    <div className="col-3">
                        <AlSysCard />
                    </div>
                    <div className="col-3">
                        <AlSysCard />
                    </div>
                    <div className="col-3">
                        <AlSysCard />
                    </div>
                    <div className="col-3">
                        <AlSysCard />
                    </div>
                </div>
            </div>
        </div>
    );
}