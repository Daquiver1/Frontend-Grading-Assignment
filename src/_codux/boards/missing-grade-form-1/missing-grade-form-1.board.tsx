import { createBoard } from '@wixc3/react-board';
import { MissingGradeForm1 } from '../../../components/missing-grade-form-1/missing-grade-form-1';

export default createBoard({
    name: 'MissingGradeForm1',
    Board: () => <MissingGradeForm1 />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 684,
        canvasWidth: 1158
    }
});
