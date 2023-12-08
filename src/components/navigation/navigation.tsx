import classNames from 'classnames';
import styles from './navigation.module.scss';

export interface NavigationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navigation = ({ className }: NavigationProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.navBar}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/University_of_Ghana.png?20200927212755" alt="" className={styles.img} />
            <h2 className={styles.h2}>Here to find your missing  grades</h2>
        </div>
    </div>;
};
