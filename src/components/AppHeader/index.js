import { Badge, Image,Space, Typography } from 'antd';
import { MailOutlined, BellFilled } from '@ant-design/icons';

function AppHeader(){
    return (
        <div className="AppHeader">
            
            <Image width={295} src={require('./cs_icon.png')}></Image>
            <Space>
                <Badge count={15} dot color='rgba(53, 162, 235, 5)'>
                <MailOutlined style={{fontSize: 24}}/>
                </Badge>
                <Badge count={3} color='rgba(53, 162, 235, 5)'>
                <BellFilled style={{fontSize: 24}}/>
                </Badge>
            </Space>
        </div>
    )
}

export default AppHeader;