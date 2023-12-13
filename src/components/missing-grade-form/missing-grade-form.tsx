import classNames from 'classnames';
import styles from './missing-grade-form.module.scss';
import { Navigation } from '../navigation/navigation';
import { Footer } from '../footer/footer';

export interface MissingGradeFormProps {
    className?: string;
}

export const MissingGradeForm = ({ className }: MissingGradeFormProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navigation />
            <div className={styles.fle}>
                <div className={styles.MGF}>
                    <div className="back">
                        <a href="/home">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className={classNames('bi', 'bi-arrow-left-circle', styles.bck)}
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                                />
                            </svg>
                        </a>
                    </div>
                    <h2 className={styles.h2}>Report Missing Grades </h2>
                    <form className={styles.form}>
                        <label className={styles.label}>Course name:</label>
                        <input type="text" className={styles.input} />
                        <label className={styles.label}>Instructor name:</label>
                        <input type="text" className={styles.input} />
                        <label className={styles.label}>Expected grade:</label>
                        <input type="text" className={styles.input} />
                        <label className={styles.label}>Explanation:</label>
                        <textarea className={styles.input} />
                        <button className={styles.btn}>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};
