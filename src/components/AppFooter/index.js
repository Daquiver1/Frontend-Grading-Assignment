import { Typography } from 'antd';

function AppFooter(){
    return (
        <div className="AppFooter">
            <Typography.Link href='tel:+123456789'>+123456789</Typography.Link>
            <Typography.Link href='#'>Contact Us</Typography.Link>
            <Typography.Link href='#'>Help & Support</Typography.Link>
        </div>
    )
}

export default AppFooter;