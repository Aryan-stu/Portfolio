import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import Experiences from './Experiences';
import AdminProjects from './AdminProjects';
import AdminContact from './AdminContact';

const { TabPane } = Tabs;

function Admin() {
    const { portfolioData } = useSelector((state) => state.root);

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            window.location.href = "/admin-login";
        }
    },[])
    const p = "</>";
    return (
        <div>
            <div className="p-5 bg-primary flex justify-between">
                <h1 className="text-secondary text-4xl font-semibold">A</h1>
                <h1 className="text-white text-4xl font-semibold">{p}</h1>
                <h1 className="text-tertiary text-4xl font-semibold">S</h1>
            </div>
            <div className='flex justify-between'>
            <h1 className='text-2xl px-5 py-2 text-secondary font-semibold flex gap-10 items-center'>Portfolio Admin</h1>
            <h1 className='underline text-primary px-5 py-2 text-xl cursor-pointer'
            onClick={()=>{
                localStorage.removeItem("token");
                window.location.href = "/admin-login";
            }}
            >Logout</h1>
            </div>
            {portfolioData && 
            <div className='px-5'>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab="Inro" key="1">
                        <AdminIntro />
                    </TabPane>
                    <TabPane tab="About" key="2">
                        <AdminAbout />
                    </TabPane>
                    <TabPane tab="Experiences" key="3">
                        <Experiences />
                    </TabPane>
                    <TabPane tab="Projects" key="4">
                        <AdminProjects />
                    </TabPane>
                    <TabPane tab="Contact" key="5">
                        <AdminContact />
                    </TabPane>


                </Tabs>
            </div>}

        </div>
    )
}

export default Admin