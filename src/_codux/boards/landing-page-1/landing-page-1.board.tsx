import { createBoard } from '@wixc3/react-board';
import { LandingPage1 } from '../../../components/landing-page-1/landing-page-1';

export default createBoard({
    name: 'LandingPage1',
    Board: () => <LandingPage1 />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 638,
        canvasWidth: 1078
    }
});
