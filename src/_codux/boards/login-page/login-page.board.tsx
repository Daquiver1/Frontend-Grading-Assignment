import { createBoard } from '@wixc3/react-board';
import { LoginPage } from '../../../components/login-page/login-page';

export default createBoard({
    name: 'LoginPage',
    Board: () => <LoginPage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1518,
        canvasHeight: 791,
        windowWidth: 1024,
        windowHeight: 768
    }
});
