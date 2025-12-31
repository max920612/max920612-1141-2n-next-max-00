'use client';

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

import Form_00 from './_components/Form_00';
import Items_00 from './_components/Items_00';

import Wrapper from '../_assets/wrapper/Grocery_00';

const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    let list = localStorage.getItem('list');
    // 修改處：加入 try-catch 防止 "undefined" 字串導致崩潰
    if (list) {
      try {
        list = JSON.parse(list);
      } catch (error) {
        list = [];
      }
    } else {
      list = [];
    }
    return list;
  }
  return []; // Return default for server-side
};

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const GroceryPage_00 = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedList = getLocalStorage();
    if(storedList.length > 0) {
      setItems(storedList);
    }
  }, []);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
      setItems(newItems);
      setLocalStorage(newItems);
    toast.success('Item added successfully!');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.warning('item deleted');
  };

  return (
    <Wrapper>
      <section className='section-center'>
        <ToastContainer position='top-center' autoClose = {3000} />
        <Form_00 addItem ={addItem}/>
        <Items_00 items={items} editItem={editItem} removeItem={removeItem} />
      </section>
    </Wrapper>
  );
};
export default GroceryPage_00;
