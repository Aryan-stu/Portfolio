import React from "react";
import { Form } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios  from "axios";
import {message} from 'antd';


function AdminContact() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const onFinish = async(values) => {
        try{
            dispatch(ShowLoading());
            const response = await axios.post("/api/portfolio/update-contact",{
                ...values,
                _id: portfolioData.contact._id,
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                
            }else{
                message.error(response.data.message);
            }
        } catch(error){
            dispatch(HideLoading());
            message.error(error.message);

        }
    };
    return (<div>
        <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.contact}>
            <Form.Item name="Name" label="Name: ">
                <input placeholder="contact" />
            </Form.Item>
            <Form.Item name="Age" label="Age: ">
                <input placeholder="contact" />
            </Form.Item>
            <Form.Item name="Gender" label="Gender: ">
                <input placeholder="contact" />
            </Form.Item>
            <Form.Item name="Email" label="Email: ">
                <input placeholder="contact" />
            </Form.Item>
            <Form.Item name="Mobile" label="Mobile: ">
                <input placeholder="contact" />
            </Form.Item>
            <Form.Item name="cvUrl" label="CV: ">
                <input placeholder="contact" />
            </Form.Item>
            <Form.Item name="Address" label="Address: ">
                <input placeholder="contact" />
            </Form.Item>


            <div className="flex justify-end w-full">
                <button className="px-10 py-2 bg-primary text-white font-semibold" type="submit">SAVE</button>

            </div>
        </Form>
    </div>)
}

export default AdminContact
