import classNames from 'classnames';
import styles from './login-page.module.scss';

export interface LoginPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const LoginPage = ({ className }: LoginPageProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.log}>
            <div className={styles.viv} />
            <h1 className={styles.wel}>Hello !</h1>
        </div>
        <div className={styles.fgm}>
            <h2 className={styles.vh}>Login Here</h2>
            <form className={styles.from}><label className={styles.nam}>Student ID</label><input type="text" className={styles.put} />
                <label className={styles.nam}>PIN</label>
                <input type="text" className={styles.put} />
                <label className={styles.nam}></label>
                <label className={styles.label}></label>
                <button type="submit" className={styles.butto}>Login</button>
            </form></div>

    </div>;
};
