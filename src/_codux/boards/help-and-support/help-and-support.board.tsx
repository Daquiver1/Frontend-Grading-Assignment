import { createBoard } from '@wixc3/react-board';
import { HelpAndSupport } from '../../../components/help-and-support/help-and-support';

export default createBoard({
    name: 'HelpAndSupport',
    Board: () => <HelpAndSupport />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 727,
        canvasWidth: 957,
        windowHeight: 717
    }
});
