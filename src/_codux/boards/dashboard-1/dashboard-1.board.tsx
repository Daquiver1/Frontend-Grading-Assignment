import { createBoard } from '@wixc3/react-board';
import { Dashboard1 } from '../../../components/dashboard-1/dashboard-1';

export default createBoard({
    name: 'Dashboard1',
    Board: () => <Dashboard1 />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 681,
        canvasWidth: 1072
    }
});
