import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './login-page.module.scss';
import { Navbar } from '../navbar/navbar';

export interface LoginPageProps {
    className?: string;
}



export const LoginPage = ({ className }: LoginPageProps) => {

    const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {

    if (studentId === '12345678' && pin === '00000') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid Student ID or PIN');
    }
  };

    return (
        <div className={classNames(styles.root, className)}>
            
            <div className={styles.LG}>
                <h2 className={styles.lg}>Login Required</h2>
                <Navbar />
                <form className={styles.form}>
                    <label htmlFor="studentId" className={styles.label}>
                        Student ID:
                    </label>
                    <input type="text" id="studentId" className={styles.Input} value={studentId}
            onChange={(e) => setStudentId(e.target.value)} />

                    <label htmlFor="pin" className={styles.label}>
                        PIN:
                    </label>
                    <input type="password" id="pin" className={styles.Input} value={pin}
            onChange={(e) => setPin(e.target.value)}/>

                    <a href="/home"><button type="button" className={styles['login-btn']} onClick={handleLogin}>
                        Login
                    </button></a>
                </form>
            </div>
        </div>
    );
};
