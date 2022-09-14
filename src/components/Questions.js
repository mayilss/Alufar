import { useState } from 'react';

import styles from '../styles/Questions.module.scss';

import plus from '../icons/plus.svg';
import minus from '../icons/minus.svg';

export const Questions = () => {

    const [isOpened, setIsOpened] = useState(false);

    const questionHandler = () => {
        setIsOpened(!isOpened);
    }

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.question}>
                    <button onClick={() => { questionHandler() }}>
                        <img src={isOpened ? minus : plus} alt="plus" />
                    </button>
                    <p>Matrisa nədir?</p>
                </div>
                {isOpened ? (<div className={styles.answer}>
                    <p>
                        Alüminium profillərin istehsalında tətbiq edilməsi üçün nəzərdə 
                        tutulmuş metal presləmək (ekstruziya) üçün alət. Matrisa müstəqil 
                        istehsal aləti deyil, o pres avadanlığının çıxarıla bilən tərkib 
                        hissəsidir, hansı ki, profilin arzu olunan həndəsədən asılı olaraq 
                        dəyişir. Matrisa bilavasitə arzu olunan profil formasının basılması 
                        (sıxılması) üçün nəzərdə tutulmuş dəlikləri, ölçüsü və forması olan 
                        polad diskdir.
                    </p>
                </div>) : ""}
            </div>
        </div>
    );
}

