import classNames from 'classnames';
import styles from './dashboard-1.module.scss';
import { Navbar } from '../navbar/navbar';
import { SideBar } from '../side-bar/side-bar';
import { Footer } from '../footer/footer';

export interface Dashboard1Props {
    className?: string;
}

const currentGrades = [
    { course: 'DCIT201 PROGRAMMING I', grade: ' A' },
    { course: 'DCIT203 DIGITAL AND LOGIC SYSTEMS DESIGN', grade: '      B+' },
    { course: 'DCIT205 MULTI MEDIA AND WEB DESIGN', grade: 'A' },
    { course: 'DCIT207 COMPUTER ORGANIZATION & ARCHITECTURE', grade: 'B' },
    { course: 'DCIT209 E-BUSINESS ARCHITECTURES', grade: 'A+' },



];

const missingGradeAlerts = [
    { course: 'UGRC 110 ACADEMIC WRITING I', message: 'Missing Grade: Please submit your assignment' },

];


export const Dashboard1 = ({ className }: Dashboard1Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <SideBar />
            <div className={styles.DB}>
                <h2 className={styles.h2}>Dashboard</h2>
                <div className={styles['current-grades']}>
                    <h3 className={styles.h3}>Current Grades</h3>
                    <ul className={styles.ul}>
                        {currentGrades.map((grade, index) => (
                            <li key={index} className={styles.li}>
                                {grade.course}: {grade.grade}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles['missing-grade-allert']}>
                    <h3 className={styles.h3}>Missing Grade Alerts</h3>
                    <ul className={styles.h3}>
                        {missingGradeAlerts.map((alert, index) => (
                            <li key={index} className={styles.li}>
                                <span className={classNames('course', styles.MC)}>{alert.course}:</span> {alert.message}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />

        </div>
    );
};
