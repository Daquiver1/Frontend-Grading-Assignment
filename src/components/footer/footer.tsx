import classNames from 'classnames';
import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return <div className={classNames(styles.root, className)}>
        <footer className="footer">
            <div className="container">
                <p>
                    <div>
                        <div className={styles.whatsapp}>
                            <div className={styles.book} />
                            <div className={styles.app1} />
                            <div className={styles.tweet} />
                            <div className={styles.gram} />
                            <h1 className={styles.uni}>University of Ghana</h1>
                        </div>
                        &copy; 2023 Your Company. All rights reserved.</div></p>
            </div>
        </footer>

    </div>;
};
