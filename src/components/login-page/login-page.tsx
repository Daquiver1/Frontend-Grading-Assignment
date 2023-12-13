import classNames from 'classnames';
import styles from './login-page.module.scss';

export interface LoginPageProps {
    className?: string;
}


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
                <input type="password" className={styles.put} />
                <label className={styles.nam}></label>
                <label className={styles.label}></label>
                <button type="submit" className={styles.butto}><a href="/home">Login</a></button>
            </form></div>

    </div>;
};
