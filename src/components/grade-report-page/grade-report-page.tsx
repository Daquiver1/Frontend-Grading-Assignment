import classNames from 'classnames';
import styles from './grade-report-page.module.scss';

export interface GradeReportPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GradeReportPage = ({ className }: GradeReportPageProps) => {
    return <div className={classNames(styles.root, className)}>GradeReportPage</div>;
};
