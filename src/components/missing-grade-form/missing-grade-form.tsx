import classNames from 'classnames';
import styles from './missing-grade-form.module.scss';
import { Navigation } from '../navigation/navigation';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

export interface MissingGradeFormProps {
    className?: string;
}


export const MissingGradeForm = ({ className }: MissingGradeFormProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navigation />
        <div className={styles.fle}>
            <Sidebar />
            <div className={styles.MGF}>
                <h2 className={styles.h2}>Report Missing Grades </h2>
                <form className={styles.form}><label className={styles.label}>Course name:</label><input type="text" className={styles.input} />
                    <label className={styles.label}>Instructor name:</label>
                    <input type="text" className={styles.input} />
                    <label className={styles.label}>Expected grade:</label>
                    <input type="text" className={styles.input} />
                    <label className={styles.label}>Explanation:</label>
                    <textarea className={styles.input} />
                    <button className={styles.btn}>Button</button>
                </form>
            </div>
        </div>
        <Footer />
    </div>;
};
