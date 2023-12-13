import classNames from 'classnames';
import styles from './help-and-support-page.module.scss';
import { Navigation } from '../navigation/navigation';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

export interface HelpAndSupportPageProps {
    className?: string;
}


export const HelpAndSupportPage = ({ className }: HelpAndSupportPageProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navigation />
        <div className={styles.siv}>
            <Sidebar />
            <div className={styles.sev}>
                <h1 className={styles.hed}>HELP AND SUPPORT

                </h1>
                <h1 className={styles.gs}>Getting Started:</h1>
                <h3 className={styles.gr}>1.Downloading and Installing: Visit the App Store or Google Play Store and search for &quot;UG GradeReport.&quot; Download and install the app on your device. Create an account by following the on-screen instruction</h3>
                <h1 className={styles.gs}>User Roles:</h1>
                <h3 className={styles.gr}>1. Understanding User Roles: Learn about the roles (student, parent, educator) and their unique features. Switch seamlessly between user profiles for a personalized experience.</h3>
                <h1 className={styles.gs}>Navigating the App:</h1>
                <h3 className={styles.gr}>1.Exploring the Dashboard: Get familiar with the main dashboard and menu options. Decode icons and symbols used throughout the app.</h3>
            </div>
        </div>
        <div className={styles.tis}>
            <h1 className={styles.ye}>Frequently Asked Questions</h1>
            <h3 className={styles.viv}>These are the most commonly asked questions</h3>
            <h1 className={styles.mi}>Q : How do i contact lecturers?</h1>
            <h3 className={styles.lee}>A: Visit the Contact Us page</h3>
            <h1 className={styles.mi}>Q : Can i change my password?</h1>
            <h3 className={styles.lee}>A :  Yes you can</h3>
            <h1 className={styles.mi}>Q :  How do i change my email ?</h1>
            <h3 className={styles.lee}>A : Log into Sakai for that</h3>
        </div>
        <Footer />
    </div>;
};
