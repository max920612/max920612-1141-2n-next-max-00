'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Wrapper from '../../_wrapper/Shop_00';
import Product_00 from '../../_components/Product_00';

const FetchShopByCategory_00 = () => {
    const [shop_00, setShop_00] = useState([]);
    const params = useParams();
    const category = params.category;
    console.log('category', category);

    const fetchShopFromNode = async () => {
        try{
            const response = await fetch(`http://localhost:5000/api/shop_00/${category}`);
            const data = await response.json();
            console.log('shop_00 data', data);
            if(data.length !== 0){
                setShop_00(data);
            }
        }catch(err){
            console.log(err);
        }
    };

    useEffect(()=>{
        fetchShopFromNode();
    }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4 style={{ textAlign: 'center' }}>max920612, 213410300</h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_00?.map((item)=>{
                const { pid, pname, price, img_url } = item;
                return (<Product_00 
                key={pid}
                img_url={img_url}
                pname={pname}
                price={price}/>
                );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchShopByCategory_00;
