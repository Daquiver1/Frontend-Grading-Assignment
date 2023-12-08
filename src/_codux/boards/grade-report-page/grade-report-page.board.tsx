import { createBoard } from '@wixc3/react-board';
import { GradeReportPage } from '../../../components/grade-report-page/grade-report-page';

export default createBoard({
    name: 'GradeReportPage',
    Board: () => <GradeReportPage />,
    isSnippet: true,
});
