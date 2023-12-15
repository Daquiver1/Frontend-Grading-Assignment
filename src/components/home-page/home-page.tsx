import classNames from 'classnames';
import styles from './home-page.module.scss';
import { Navbar } from '../navbar/navbar';
import { SideBar } from '../side-bar/side-bar';
import { Footer } from '../footer/footer';
import { LandingPage1 } from '../landing-page-1/landing-page-1';


export interface HomePageProps {
    className?: string;
}


export const HomePage = ({ className }: HomePageProps) => {
    return (
            <div className={classNames(styles.root, className)}>

                <Navbar className={styles.NAVBAR} />
                <SideBar />
                <div>
                    <LandingPage1 className={styles.landingPg} />
                </div>

                <div className={styles.overview}>
                    <h2 className={styles.h2}>Overview</h2>
                    <h3 className={styles.h3}>Welcome to the Missing Grade Reporting System, your one-stop solution to track and report missing grades. This system empowers students to take control of their academic profiles, ensuring that no grades slip through the cracks.</h3></div>

                <Footer />
            </div>
    );
};
