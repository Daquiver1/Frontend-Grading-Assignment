// Landing Page
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar';
import DashboardLayout from '../../components/shared/DashboardLayout';

const DashboardPage = () => {
    return (
      <DashboardLayout title={"Dashboard"}>
        <p>Content Here</p>
      </DashboardLayout>
    );
  };
  
  export default DashboardPage;  