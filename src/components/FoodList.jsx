import FoodListItem from './FoodListItem';

function FoodList({ items, onUpdate, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <FoodListItem item={item} onUpdate={onUpdate} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default FoodList;
