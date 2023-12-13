import classNames from 'classnames';
import styles from './landing-page.module.scss';
import { Navigation } from '../navigation/navigation';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

export interface LandingPageProps {
    className?: string;
}





export const LandingPage = ({ className }: LandingPageProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navigation />
        <div className={styles.vive}>
            <Sidebar />
            <div className={styles.vit}>
                <h1 className={styles.fi}>WELCOME </h1>
                <h2 className={styles.ji}>Key Features:</h2>
                <h3 className={styles.vite}>1. Real-Time Grade Updates: Stay informed about academic progress with real-time updates on grades, assignments, and overall performance. The app ensures that users are always up-to-date, fostering a proactive approach to learning.</h3>
                <h3 className={styles.vite}>2. User-Friendly Interface: GradeReport boasts an intuitive and user-friendly interface, making it accessible to users of all ages. Navigation is seamless, allowing students, parents, and teachers to effortlessly access the information they need.</h3>
                <h3 className={styles.vite}>3. Security and Privacy: GradeReport prioritizes the security and privacy of user data. Robust encryption and authentication measures are in place to safeguard sensitive information, ensuring a secure and trustworthy environment.</h3>
            </div>
        </div>
        <div className={styles.vide}>
            <h1 className={styles.he}>OVERVIEW
            </h1>
            <h2 className={styles.se}>Empowering Academic Success  In the dynamic landscape of education, keeping track of academic performance is essential for students, parents, and educators alike. Introducing GradeReport, an innovative and user-friendly app designed to streamline the process of monitoring and managing grades. This comprehensive application offers a range of features to enhance the educational experience  for all stakeholders.</h2>
        </div>
        <Footer />
    </div>;
};
