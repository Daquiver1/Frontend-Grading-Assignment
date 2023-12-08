import { createBoard } from '@wixc3/react-board';
import { Dashboardpage } from '../../../components/dashboardpage/dashboardpage';

export default createBoard({
    name: 'Dashboardpage',
    Board: () => <Dashboardpage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1514,
        canvasHeight: 1152
    }
});
