import { createBoard } from '@wixc3/react-board';
import { InstructorContactPage } from '../../../components/instructor-contact-page/instructor-contact-page';

export default createBoard({
    name: 'InstructorContactPage',
    Board: () => <InstructorContactPage />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 889,
        canvasWidth: 1332
    }
});
