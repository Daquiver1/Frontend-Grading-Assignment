import classNames from 'classnames';
import styles from './instructor-contact-page.module.scss';
import { Navigation } from '../navigation/navigation';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

export interface InstructorContactPageProps {
    className?: string;
}





export const InstructorContactPage = ({ className }: InstructorContactPageProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navigation />
        <div className={styles.cas}>
            <Sidebar />
            <div className={styles.vid}>
                <h1 className={styles.frt}>Course Instructors Info</h1>
                <div className={styles.tw}>
                    <div className={styles.divi}><h2 className={styles.vii}>DCIT  201

                        <h3 className={styles.h3}>MR. Adu Osei</h3><h3 className={styles.h3}>0245456734</h3><h3 className={styles.h3}>aduosei@gmail.com</h3>
                    </h2>
                        <h2 className={styles.vii}>DCIT  205<h3 className={styles.h3}> Dwumfour Abdullai Aziz</h3><h3 className={styles.h3}> 0260541219</h3><h3 className={styles.h3}> adwumfour@ug.edu.gh  </h3>
                        </h2></div>
                </div>
            </div></div>
        <div className={styles.liv}>
            <div className={styles.mii}>
                <h2 className={styles.vii}>DCIT  255<h3 className={styles.h3}>Mark Atta Mensah</h3><h3 className={styles.h3}> 0208603871</h3><h3 className={styles.h3}> mamensah@ug.edu.gh</h3>
                </h2>
                <h2 className={styles.vii}>DCIT  285<h3 className={styles.h3}>Solomon Kofi Yeboah</h3><h3 className={styles.h3}>0244765183</h3><h3 className={styles.h3}>kofiyeboah3@ug.edu.gh</h3>
                </h2>
            </div>
            <div className={styles.mii}>
                <h2 className={styles.vii}>DCIT  245<h3 className={styles.h3}>Dr.Nancy Myles</h3><h3 className={styles.h3}>0596040919</h3><h3 className={styles.h3}>nancymyles@ug.edu.gh</h3>
                </h2>
                <h2 className={styles.vii}>DCIT  275<h3 className={styles.h3}>Fiifi Kumson Anderson</h3><h3 className={styles.h3}>05016040924</h3><h3 className={styles.h3}>fiifikumson@ug.edu.gh</h3>
                </h2>
            </div></div>
        <Footer />
    </div>;
};
