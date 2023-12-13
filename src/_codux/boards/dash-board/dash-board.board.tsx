import { createBoard } from '@wixc3/react-board';
import { DashBoard } from '../../../components/dash-board/dash-board';

export default createBoard({
    name: 'DashBoard',
    Board: () => <DashBoard />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 2303,
        canvasHeight: 955,
        windowWidth: 1024
    }
});
