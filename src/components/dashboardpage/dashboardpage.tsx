import classNames from 'classnames';
import styles from './dashboardpage.module.scss';
import { Navigation } from '../navigation/navigation';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

export interface DashboardpageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */



export const Dashboardpage = ({ className }: DashboardpageProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navigation />
        <div className={styles.dive}>
            <Sidebar />
        </div>
        <Footer />
    </div>;
};
