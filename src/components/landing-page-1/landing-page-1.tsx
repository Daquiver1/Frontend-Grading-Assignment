import classNames from 'classnames';
import styles from './landing-page-1.module.scss';

export interface LandingPage1Props {
    className?: string;
}


export const LandingPage1 = ({ className }: LandingPage1Props) => {
    return <div className={classNames(styles.root, className)}>
        <div>
            <h2 className={styles.Heading}>Welcome<h2 className={styles.Heading}>To</h2>
            </h2>
            <h3 className={styles.subHeading}>The Missing Grade System</h3></div>
        <p className={styles.par}>Your grades are asured</p>
        <a href="/missingGradeForm" className={styles['btn-link']}><button className={styles.button}>Get Started</button></a>
    </div>;
};
