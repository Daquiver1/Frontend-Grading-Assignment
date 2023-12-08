import classNames from 'classnames';
import styles from './sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sidebar = ({ className }: SidebarProps) => {
    return <div className={classNames(styles.root, className)} title="">
        <div className={styles.di}>
            <div className={styles.vi} />
            <div className={styles.iv}>
                <h2 className={styles.button}>Home</h2>
            </div>
            <div className={styles.iv}>
                <h2 className={styles.button}>Contact Us</h2>
            </div>
            <div className={styles.iv}>
                <h2 className={styles.button}>Help and Support</h2>
            </div>
            <div className={styles.iv}>
                <h2 className={styles.button}>Grade Report</h2>
            </div>
            <div className={styles.iv}>
                <h2 className={styles.button}> Form</h2>
            </div>
            <div className={styles.iv}>
                <h2 className={styles.button}>Login</h2>
            </div>
            <div className={styles.iv}>
                <h2 className={styles.button}>Overview</h2>
            </div>
        </div></div>;
};
