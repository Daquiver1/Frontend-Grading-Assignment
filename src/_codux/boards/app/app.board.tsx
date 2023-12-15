import { createBoard } from '@wixc3/react-board';
import App from '../../../App';


export default createBoard({
    name: 'App',
    Board: () => (
        <App />

    ),
    environmentProps: {
        canvasWidth: 1006,
        canvasHeight: 977,
        windowWidth: 1024,
        windowHeight: 768,
        canvasMargin: {
            right: 0, bottom: 5, left: 0,
        }
    },
});
