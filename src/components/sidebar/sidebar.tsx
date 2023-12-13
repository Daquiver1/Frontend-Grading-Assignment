import classNames from 'classnames';
import styles from './sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}


export const Sidebar = ({ className }: SidebarProps) => {
    return <div className={classNames(styles.root, className)} title="">
        <div className={styles.did}>
            <div className={styles.di}>
                <div className={styles.vi} />
                <div className={styles.iv}>
                    <a href="/home"><h2 className={styles.button}>Home</h2></a>
                </div>
                <div className={styles.iv}>
                    <a href="/instructorContact"><h2 className={styles.button}>Contact Us</h2></a>
                </div>
                <div className={styles.iv}>
                    <a href="/helpAndSupport"><h2 className={styles.button}>Help </h2></a>
                </div>
                <div className={styles.iv}>
                    <a href="/gradeReport"><h2 className={styles.button}>Grade Report</h2></a>
                </div>
                <div className={styles.iv}>
                    <a href="/missingGradeForm"><h2 className={styles.button}> Form</h2></a>
                </div>
                <div className={styles.iv}>
                    <a href="/login"><h2 className={styles.button}>Login</h2></a>
                </div>
                <div className={styles.iv}>
                    <a href="/dashboard"><h2 className={styles.button}>Overview</h2></a>
                </div>
            </div>
            <div className={styles.ki} />
        </div>
    </div>;
};
