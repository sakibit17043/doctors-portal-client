import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <h1 className='text-2xl font-bold  text-purple-600'>Welcome to your dashboard</h1>
          <Outlet></Outlet>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 mr-5 w-48 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to='/dashboard'>My Appointments</Link></li>
            <li><Link to='/dashboard/myreviews'>My Reviews</Link></li>
            <li><Link to='/dashboard/mycomment'>My Comments</Link></li>
            {admin && 
            <>
              <li><Link to='/dashboard/users'>All Users</Link></li>
              <li><Link to='/dashboard/addDoctor'>Add doctor</Link></li>
              <li><Link to='/dashboard/manageDoctors'>Manage doctors</Link></li>
            </>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;