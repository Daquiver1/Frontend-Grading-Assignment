import { Menu } from 'antd';
import { AppstoreOutlined, ProjectOutlined, CommentOutlined, FormOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

function SideMenu(){
    const navigate = useNavigate()
    return (
        <div className="SideMenu">
            <Menu 
            onClick={(item)=>{
                //item.key is the url
                navigate(item.key)
            }}
            items={[
                {
               label: 'Dashboard',
               icon: <AppstoreOutlined />,
               key: '/dashboard' 
            },
            {
                label: 'Grade Report',
                icon: <ProjectOutlined />,
                key: '/grade-report'
            },
            {
                label: 'Missing Grade Form',
                icon: <FormOutlined />,
                key: '/missing-grade-form'
            },
            {
                label: 'Instructor Contact',
                icon: <UserOutlined />,
                key: '/instructor-contact'
            },
            {
                label: 'Help and Support',
                icon: <CommentOutlined />,
                key: '/help-and-support'
            }
            ]}></Menu>
        </div>
    )
}

export default SideMenu;