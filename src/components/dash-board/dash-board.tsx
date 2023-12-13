import classNames from 'classnames';
import styles from './dash-board.module.scss';
import { Navigation } from '../navigation/navigation';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

export interface DashBoardProps {
    className?: string;
}

export const DashBoard = ({ className }: DashBoardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navigation />
            <div className={styles.cut}>
                <Sidebar />
                <div className={styles.ut}>
                    <div className={styles.vid}>
                        <h1 className={styles.bro}>CURRENT GRADES</h1>
                        <div className={styles.sa}>
                            <h2 className={styles.h2}>DCIT203 DIGITAL AND LOGIC SYSTEMS DESIGN   :   B</h2>
                            <h2 className={styles.h2}>DCIT205 MULTI MEDIA AND WEB DESIGN   :     B</h2>
                            <h2 className={styles.h2}>DCIT207 COMPUTER ORGANIZATION &amp; ARCHITECTURE   :   B</h2>
                            <h2 className={styles.h2}>DCIT209 E-BUSINESS ARCHITECTURES    :    B</h2>
                            <h2 className={styles.h2}>CBAS ACADEMIC WRITING  II  :    B</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.up}>
                <h1>MISSING GRADE ALERT!!!!!</h1>
                <h2 className={styles.tis}>DCIT201 PROGRAMMING I :  N/A</h2>
            </div>
            <Footer />


        </div>
    );
};
