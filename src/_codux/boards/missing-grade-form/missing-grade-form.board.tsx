import { createBoard } from '@wixc3/react-board';
import { MissingGradeForm } from '../../../components/missing-grade-form/missing-grade-form';

export default createBoard({
    name: 'MissingGradeForm',
    Board: () => <MissingGradeForm />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1236,
        canvasHeight: 1201,
        windowWidth: 1024
    }
});
