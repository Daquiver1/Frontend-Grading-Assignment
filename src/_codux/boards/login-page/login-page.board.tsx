import { createBoard } from '@wixc3/react-board';
import { LoginPage } from '../../../components/login-page/login-page';
import LoginPage_module from '../../../components/login-page/login-page.module.scss';
import Classnames from 'classnames';


export default createBoard({
    name: 'LoginPage',
    Board: () => <LoginPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 828,
        canvasHeight: 655,
        canvasWidth: 830
    }
});
