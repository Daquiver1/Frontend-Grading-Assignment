import classNames from 'classnames';
import styles from './navigation.module.scss';

export interface NavigationProps {
    className?: string;
}


export const Navigation = ({ className }: NavigationProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.navBar}>
            <h2 className={styles.h2}>GRADE MASTERS</h2>
        </div>
    </div>;
};
