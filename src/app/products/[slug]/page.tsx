
"use client"

import Toastity from '@/app/components/addtocarttoastify';
import Header from '@/app/components/header';
import TopBar from '@/app/components/navbar';
import { Button } from '@/components/ui/button';

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs';
import { FaMinus, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

let stars = [<FaStar key={0}/>,<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>]

function SlugPage({ params}: {params:{slug:string}} ) {
    const products =   useSelector((state:any)=>state.product)   
    const items:any = products.find((item:any)=>item.slug === params.slug);
    //    useState 
    const dispatch = useDispatch();
 
 const [cartItem,setcartItem] = useState({
        id:items.id,
        title:items.title,
        image: items.image,
        slug:items.slug,
        price:items.price, 
        size: items.size,
        color:items.color,
        description:items.description,
        qty: items.qty,
        discount: items.discount,
   
    })
 
  
    return (
      <>
      <TopBar/>
          <Header/>
      
      <div className='mt-24 flex flex-col lg:flex-row justify-around'>
         <div className='sm:space-y-3 space-x-3 sm:space-x-0 p-2 sm:p-0  order-2 sm:order-1 w-full lg:w-[200px] flex lg:flex-col items-center justify-start'>
           <Image src={items.image[0]} className='w-[70%]' alt={items.title} width={100} height={100}></Image>
           <Image src={items.image[0]} className='w-[70%]' alt={items.title} width={100} height={100}></Image>
           <Image src={items.image[0]} className='w-[70%]' alt={items.title} width={100} height={100}></Image>
         </div>
         {/* mid div */}
         <div className=' lg:w-[500px] flex justify-center mt-4 sm:mt-0  order-1 sm:order-2'>
         <Image src={items.image[0]} className='w-[80%]' alt={items.title} width={100} height={100}></Image>
         </div>
         {/* all text  */}
         <div className=' lg:w-[500px] space-y-2 p-3 sm:p-0 mt-3 sm:mt-0 order-3'>
            <h1 className='text-xl font-bold lg:text-3xl'>{items.title}</h1>
             {/* stars */}
             <p className='flex justify-start items-center text-yellow-400'>{stars}</p>
             {/* price */}
            <div className='flex space-x-3'>
             <p className='font-bold'>{cartItem.price * cartItem.qty} </p>
             <p className='font-bold text-gray-400 line-through'>
              {cartItem.discount >0 && (cartItem.price -(cartItem.price*cartItem.discount) / 100 )* cartItem.qty} </p>
             </div>
             {/* des */}
             <p>{items.description}</p>
             {/* color */}
             <p className='text-gray-400'>Select Colors</p>
             <div className='space-x-3'>
               {
                items.color.map((item:any,i:any)=>{
                    return <button key={i} onClick={()=>setcartItem({...cartItem,color:item})} className='w-[37px] active:outline h-[37px] rounded-full ' style={{backgroundColor:item}}></button>
                })
               }
             
             </div>
             {/* size */}
             <p className='text-gray-400'>Select Size</p>
             <div className='space-x-3'>
                 {
                    items.size.map((item:any,i:any)=>{
                        return <button key={i} 
                        onClick={()=>setcartItem({...cartItem,size:item})}
                        className='w-[70px] active:outline h-[37px] rounded-[16px] bg-gray-500'>{item}</button>
                    })
                 }
                
             </div>
        
             {/* INcreament decreament */}
              <div className='flex justify-start items-center pt-10'>
              <button 
               onClick={()=>setcartItem({ ...cartItem,qty:cartItem.qty <= 1? 1 :  --cartItem.qty})}
              className='w-10'><FaMinus/></button>
             <span className='w-4'>{cartItem.qty}</span>
             <button onClick={(()=>setcartItem({...cartItem,qty:++cartItem.qty}))} className='w-10'><BsPlus/></button>
              {/* add to cart */}
              {/* <Button onClick={()=>dispatch(addtocart(cartItem))} className='lg:w-[300px]'>Add to cart</Button> */}
              <Toastity cartItem={cartItem}/>
              </div>
             
         </div>
      </div>
      </>
  )
}

export default SlugPage;