import axios from "axios";
import React from "react";
import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs'
import baseURL from "../../utils/constant";


const List = ({ id, task, setUpdateUI, updateMode }) => {
    const deleteTask = () => {
        axios.delete(`${baseURL}/delete/${id}`).then((res) => {
            console.log(res);
            setUpdateUI((prevState) => !prevState)
        })
    }

    return (
        <li className="app__task_li">
            {task}
            <div className="app_task_li__icons">
                < BiEditAlt className="app__icon" onClick={() => updateMode(id, task)} />
                <BsTrash className="app__icon" onClick={deleteTask} />
            </div>
        </li>

    )
}

export default List;