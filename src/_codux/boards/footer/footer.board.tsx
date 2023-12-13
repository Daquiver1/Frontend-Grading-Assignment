import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 920,
        canvasWidth: 1437
    }
});
