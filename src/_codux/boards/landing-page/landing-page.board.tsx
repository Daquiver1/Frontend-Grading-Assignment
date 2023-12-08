import { createBoard } from '@wixc3/react-board';
import { LandingPage } from '../../../components/landing-page/landing-page';

export default createBoard({
    name: 'LandingPage',
    Board: () => <LandingPage />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1110,
        canvasWidth: 1521
    }
});
