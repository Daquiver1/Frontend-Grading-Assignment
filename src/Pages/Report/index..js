import { Space, Table, Typography } from "antd";
import AppHeader from '../../components/AppHeader';
import PageContent from '../../components/PageContent';
import SideMenu from '../../components/SideMenu';
import AppFooter from "../../components/AppFooter";


function Report(){
    return (
        <div className="App">
        <AppHeader />
        <Space className='SideMenuAndPageContent'>
        <SideMenu/>
        <div>
        <Space direction="vertical">
            <Typography.Text>
                <h3>Report Content</h3>
            </Typography.Text>
            <Space direction="horizontal">
                <Space direction="horizontal">
                    <DetailedGrades />
                </Space>
            </Space>
        </Space>
        </div>
        </Space>
        <AppFooter />
        </div>
    );
}

const DetailedGrades = () => {
    return(
        <div style={{marginTop: '30px', marginLeft: '30px'}}>
            <FilterGrades/>
            <Space direction="horizontal">
    
            <div style={{marginRight: '30px'}}>    
                <Table
                columns={[
                    {
                        title:'Mathematics',
                        dataIndex:'main',
                    },
                    {
                        title: '',
                        dataIndex: 'score'
                    }
                ]}
                dataSource={[
                    {main:'Assignments', score:'34%'},
                    {main:'Quizzes', score:'56%'},
                    {main:'Interim Assessment', score:'78%'},
                    {main:'Exams', score:'72%'}
                ]}
                />
            </div>
                <div style={{marginRight: '30px'}}>
                    <Table
                    columns={[
                        {
                            title:'Statistics',
                            dataIndex:'main',
                        },
                        {
                            title: '',
                            dataIndex: 'score'
                        }
                    ]}
                    dataSource={[
                        {main:'Assignments', score:'77%'},
                        {main:'Quizzes', score:'80%'},
                        {main:'Interim Assessment', score:'55%'},
                        {main:'Exams', score:'67%'}
                    ]}
                    />
                    </div>
                <div style={{marginRight: '30px'}}>
                    <Table
                    columns={[
                        {
                            title:'Programming',
                            dataIndex:'main',
                        },
                        {
                            title: '',
                            dataIndex: 'score'
                        }
                    ]}
                    dataSource={[
                        {main:'Assignments', score:'66%'},
                        {main:'Quizzes', score:'88%'},
                        {main:'Interim Assessment', score:'75%'},
                        {main:'Exams', score:'83%'}
                    ]}
                    />
                </div>
                <div style={{marginRight: '30px'}}>
                    <Table
                    columns={[
                        {
                            title:'Software',
                            dataIndex:'main',
                        },
                        {
                            title: '',
                            dataIndex: 'score'
                        }
                    ]}
                    dataSource={[
                        {main:'Assignments', score:'55%'},
                        {main:'Quizzes', score:'66%'},
                        {main:'Interim Assessment', score:'74%'},
                        {main:'Exams', score:'90%'}
                    ]}
                    />
                </div>
            </Space>
    </div>
    )
}

const FilterGrades = () => {
    return(
        <div className="filter">
            <select name="timeLine">
                <option value='Semester'>Semester</option>
                <option value='Academic Year'>Academic Year</option>
            </select>
        </div>
    )
}

export default Report;