import { useState } from "react";
import Modal from "./Modal";
import EditFoodForm from "./EditFoodForm";

function FoodListItem({ item, onUpdate, onDelete }) {
  const { imgUrl, title, calorie, content } = item;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleEditFormSubmit = (data) => {
    onUpdate(item.id, data)
    setIsEditModalOpen(false);
  }

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <button onClick={() => setIsEditModalOpen(true)}>수정</button>
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}>
        <EditFoodForm 
          food={item} 
          onSubmit={handleEditFormSubmit} />
      </Modal>
      <button onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
}

export default FoodListItem;
