import { useState } from "react";

function TaskShow({task , onDelete}) {   
const handleDeleteClick = () => {
   onDelete(task.id)
}

console.log(task);
    return (
        <div className="task-show">
            <h3 className="basliklar">Göreviniz</h3>
            <p>{task.basket}</p>
            <h3 className="basliklar">Yapılacaklar</h3>
            <p>{task.task}</p>
            <div>
               <button onClick={handleDeleteClick} className="sil">Sil</button> 
               <button className="guncelle">Güncelle</button> 
            </div>
        </div>
    );
}
export default TaskShow;