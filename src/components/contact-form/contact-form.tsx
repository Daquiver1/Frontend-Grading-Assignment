import classNames from 'classnames';
import styles from './contact-form.module.scss';
import { Navbar } from '../navbar/navbar';
import { SideBar } from '../side-bar/side-bar';

export interface ContactFormProps {
    className?: string;
}


export const ContactForm = ({ className }: ContactFormProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navbar />
        <SideBar />
        <div className={styles.CF}>
            <div className={styles.F} />
        </div>
    </div>;
};
