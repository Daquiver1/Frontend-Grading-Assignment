import { createBoard } from '@wixc3/react-board';
import { HelpAndSupportPage } from '../../../components/help-and-support-page/help-and-support-page';

export default createBoard({
    name: 'HelpAndSupportPage',
    Board: () => <HelpAndSupportPage />,
    isSnippet: true,
});
