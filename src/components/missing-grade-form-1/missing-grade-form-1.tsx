import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './missing-grade-form-1.module.scss';
import { Navbar } from '../navbar/navbar';
import { SideBar } from '../side-bar/side-bar';
import { Footer } from '../footer/footer';

export interface MissingGradeForm1Props {
    className?: string;
}


export const MissingGradeForm1 = ({ className }: MissingGradeForm1Props) => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        setIsSubmitted(true);
      };

    return <div className={classNames(styles.root, className)}>
        <Navbar />
        <SideBar />
        <div className={styles.MGF}>
            <h2 className={styles.h2}>Report Missing Grades </h2>
            <form className={styles.form} onSubmit={handleSubmit}><label className={styles.label}>Course name:</label><input type="text" className={styles.input} />
                <label className={styles.label}>Instructor name:</label>
                <input type="text" className={styles.input} />
                <label className={styles.label}>Expected grade:</label>
                <input type="text" className={styles.input} />
                <label className={styles.label}>Explanation:</label>
                <textarea className={styles.input} />
                <button className={styles.btn}>Button</button>
            </form>
            {isSubmitted && <p className="confirmation-message">Report submitted successfully!</p>}
        </div>
        <Footer />
    </div>;
};
