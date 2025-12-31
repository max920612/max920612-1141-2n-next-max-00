import SingleItem from './SingleItem_00';

const Items = ({ items, editItem, removeItem }) => {
  return (
    <div className='items'>
      {items?.map((item) => {
        return <SingleItem key={item.id} item={item} editItem={editItem} removeItem={removeItem} />;
      })}
    </div>
  );
};
export default Items;
