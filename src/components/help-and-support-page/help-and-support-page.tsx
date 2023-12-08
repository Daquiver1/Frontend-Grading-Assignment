import classNames from 'classnames';
import styles from './help-and-support-page.module.scss';

export interface HelpAndSupportPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HelpAndSupportPage = ({ className }: HelpAndSupportPageProps) => {
    return <div className={classNames(styles.root, className)}>HelpAndSupportPage</div>;
};
