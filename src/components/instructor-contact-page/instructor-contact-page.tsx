import classNames from 'classnames';
import styles from './instructor-contact-page.module.scss';
import { Navigation } from '../navigation/navigation';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

export interface InstructorContactPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */



export const InstructorContactPage = ({ className }: InstructorContactPageProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navigation />
        <div>
            <Sidebar />
        </div>
        <Footer />
    </div>;
};
