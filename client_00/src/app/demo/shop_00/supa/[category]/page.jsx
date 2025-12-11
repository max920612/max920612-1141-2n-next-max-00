'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Wrapper from '../../_wrapper/Shop_00';
import Product_00 from '../../_components/Product_00';

import { supabase } from '@/db/clientSupabase';

const FetchShopByCategory_00 = () => {
    const [shop_00, setShop_00] = useState([]);
    const params = useParams();
    const category = params.category;
    //console.log('category', category);

    const fetchShopFromSupabase = async () => {
        try{
          let { data, error } = await supabase
          .from('category2_00')
          .select('*, shop2_00(*)')
          .eq('cname', category);
            console.log('data', data[0].shop2_00);
            if(data.length !== 0){
                setShop_00(data[0].shop2_00);
            }
        }catch(err){
            console.log(err);
        }
    };

    useEffect(()=>{
        fetchShopFromSupabase();
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
