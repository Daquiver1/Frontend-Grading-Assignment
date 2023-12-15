import classNames from 'classnames';
import styles from './help-and-support.module.scss';
import { SideBar } from '../side-bar/side-bar';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

export interface HelpAndSupportProps {
    className?: string;
}




export const HelpAndSupport = ({ className }: HelpAndSupportProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navbar />
        <SideBar />
        <div className={styles.HS1} />
        <div className={styles.HS}>
            <section className="contact-form">
                <h2 className={styles.HEAD}>Contact Technical Support</h2>
                <form className={styles['HS-form']}>
                    <label htmlFor="name" className={styles.label}>Name:</label>
                    <input type="text" id="name" name="name" className={styles.Input} />

                    <label htmlFor="email" className={styles.label}>Email:</label>
                    <input type="email" id="email" name="email" className={styles.Input} />

                    <label htmlFor="message" className={styles.label}>Message:</label>
                    <textarea id="message" name="message" className={styles.Input}></textarea>

                    <button type="submit" className={styles.btn}>Submit</button>
                </form>
            </section></div>
        <div className={styles.FQ}>
            <section className={styles.faq}>
                <h2 className={styles.H2}>Frequently Asked Questions</h2>
                <ul className={styles.UL}>
                    <li className={styles.LI}>
                        <strong>Q:</strong> How can I report a missing grade?
                        <br />
                        <strong>A:</strong> You can report a missing grade on the Missing Grade Form page.
                    </li>
                    <li className={styles.LI}>
                        <strong>Q:</strong>How can I see my  missing grade?<br />
                        <strong>A:</strong>You can see your grades on the Grade  page by clicking on its tab .</li>
                    <li className={styles.LI}>
                        <strong>Q:</strong>How can I get a lecturer&apos;s contact?<br />
                        <strong>A:</strong>You can view the lecturer&apos;s contact on the Instructor Contact page.</li>
                    {}
                </ul>
            </section>
        </div>
        <Footer />
    </div>;
};
