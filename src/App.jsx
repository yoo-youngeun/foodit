import { useState } from 'react';
import FoodList from './components/FoodList';
import mockItems from './mock.json';
import Modal from './components/Modal';
import CreateFoodForm from './components/CreateFoodForm';

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState('createdAt');
  const [keyword, setKeyword] = useState('');
  const [isCreateFoodOpen, setIsCreateFoodOpen] = useState(false);

  const handleLatestClick = () => setOrder('createdAt');

  const handleCalorieClick = () => setOrder('calorie');

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const resultItems = items
    .sort((a, b) => b[order] - a[order])
    .filter(
      (item) => item.title.includes(keyword) ||
                item.content.includes(keyword)
    )

  const handleCreate = (data) => {
    console.log(data);
    setIsCreateFoodOpen(false);
    
    setItems([...items, {
        "id": items.length + 1,
        "imgUrl": "",
        "title": data.title,
        "content": data.content,
        "createdAt": Date.now(),
        "updatedAt": Date.now(),
        "calorie": data.calorie
      }
    ]);
  }

  const handleUpdate = (id, data) => {
    const index = items.findIndex((item) => item.id === id);
    const now = new Date();
    const newItem = {
      ...items[index],
      ...data,
      "updatedAt": now.valueOf()
    };

    const newItems = [
      ...items.slice(0, index),
      newItem,
      ...items.slice(index + 1)
    ];
    setItems(newItems);
  }

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <div>
      <input onChange={handleKeywordChange} />
      <button onClick={handleLatestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <button onClick={() => setIsCreateFoodOpen(true)}>추가하기</button>
      <Modal 
        isOpen={isCreateFoodOpen}
        onClose={() => setIsCreateFoodOpen(false)}>
          <h2>추가하기</h2>
          <CreateFoodForm onSubmit={handleCreate}/>
        </Modal>
      <FoodList items={resultItems} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;
