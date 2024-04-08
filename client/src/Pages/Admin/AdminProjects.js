import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import {message} from 'antd';
import axios  from "axios";

function AdminProjects() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type, setType] = React.useState("add");
    const onFinish = async(values) =>{
        try{
            dispatch(ShowLoading());
            let response
            if(selectedItemForEdit){
                response = await axios.post("/api/portfolio/update-project",{
                    ...values,
                    _id: selectedItemForEdit._id,
                })
            }else{
                response = await axios.post(
                    "/api/portfolio/add-project",
                    values
    
                );
            }

            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
                
            }else{
                message.error(response.data.message);
            }
        } catch(error){
            dispatch(HideLoading());
            message.error(error.message);

        }
    };

    const onDelete = async (item) =>{
      try{
        dispatch(ShowLoading());
        const response = await axios.post("/api/portfolio/delete-project",{
            _id: item._id,

        });
        dispatch(HideLoading());
        if(response.data.success){
            message.success(response.data.message);
            dispatch(HideLoading());
            dispatch(ReloadData(true));
        }else{
            message.error(response.data.message);
        }
      }catch(error){
        dispatch(HideLoading());
        message.error(error.message);
      } 
    };
    return (
        <div>
            <div className="flex justify-end">
               <button className="bg-primary px-5 py-2 text-white mb-5"
               onClick={() =>{
                setSelectedItemForEdit(null);
                setShowAddEditModal(true);
                setType("add");
               }}>Add Project</button> 

            </div>
            <div className="grid grid-cols-3 gap-5 md:flex flex-col">
                {projects.map((project) => (
                    <div className="shadow border p-5 border-gray-400 flex flex-col gap-5 ">
                        <h1 className="text-primary text-xl font-bold">{project.title}</h1>
                        <hr></hr>
                        <div className="flex justify-center">
                        <img src={project.image} alt="" className="h-60 w-fit"/></div>
                        <h1>Technology: {project.technologies?.join(', ')}</h1>

                        <h1>Link: {project.link}</h1>
                        <h1>{project.description}</h1>
                        <div className="flex justify-end gap-5 mt-5">
                            <button className="bg-red-500 text-white px-5 py-2 "
                            onClick={()=>{
                                onDelete(project);
                            }}
                            >Delete</button>
                            <button className="bg-primary text-white px-5 py-2 "
                            onClick={() =>{
                                setSelectedItemForEdit(project);
                                setShowAddEditModal(true);
                                setType("edit");
                            }}
                            >Edit</button>


                        </div>
                    </div>
                ))}

            </div>

            {(type==="edit" || selectedItemForEdit)&&(<Modal
                visible={showAddEditModal}
                title={selectedItemForEdit ? "Edit Project" : "Add Project"}
                footer = {null}
                onCancel={() => {
                    setShowAddEditModal(false);
                    setSelectedItemForEdit(null);
                }}
            >
                <Form layout="vertical" onFinish={onFinish}
                initialValues={{
                    ...selectedItemForEdit,
                    technologies : selectedItemForEdit?. technologies?.join(" , "),
                } || {}}
                >
                    <Form.Item name="title" label="Title">
                        <input placeholder="Title" />
                    </Form.Item>
                    <Form.Item name="image" label="Image URL">
                        <input placeholder="Image URL" />
                    </Form.Item>
                    <Form.Item name="link" label="Link">
                        <input placeholder="Link" />
                    </Form.Item>
                    <Form.Item name="technologies" label="Technologies">
                        <textarea placeholder="Technologies" />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                        <textarea placeholder="Description" />
                    </Form.Item>
                    <div className="flex justify-end">
                        <button className="border-primary text-primary px-5 py-2" type="button"
                        onClick={() => {
                            setShowAddEditModal(false);
                            setSelectedItemForEdit(null);

                            
                        }}
                        >
                            Cancel</button>
                        <button className="bg-primary text-white px-5 py-2">
                            {selectedItemForEdit ? "Update" : "Add"}
                        </button>
                    </div>
                </Form>
            </Modal>)}
            {(type==="add" || selectedItemForEdit)&&(<Modal
                visible={showAddEditModal}
                title={selectedItemForEdit ? "Edit Project" : "Add Project"}
                footer = {null}
                onCancel={() => {
                    setShowAddEditModal(false);
                    setSelectedItemForEdit(null);
                }}
            >
                <Form layout="vertical" onFinish={onFinish}
                initialValues={{
                    ...selectedItemForEdit,
                    technologies : selectedItemForEdit?. technologies?.join(" , "),
                } || {}}
                >
                    <Form.Item name="title" label="Title">
                        <input placeholder="Title" />
                    </Form.Item>
                    <Form.Item name="image" label="Image URL">
                        <input placeholder="Image URL" />
                    </Form.Item>
                    <Form.Item name="link" label="Link">
                        <input placeholder="Link" />
                    </Form.Item>
                    <Form.Item name="technologies" label="Technologies">
                        <textarea placeholder="Technologies" />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                        <textarea placeholder="Description" />
                    </Form.Item>
                    <div className="flex justify-end">
                        <button className="border-primary text-primary px-5 py-2" type="button"
                        onClick={() => {
                            setShowAddEditModal(false);
                            setSelectedItemForEdit(null);

                            
                        }}
                        >
                            Cancel</button>
                        <button className="bg-primary text-white px-5 py-2">
                            {selectedItemForEdit ? "Update" : "Add"}
                        </button>
                    </div>
                </Form>
            </Modal>)}
        </div>
    )
}

export default AdminProjects