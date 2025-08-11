import Spinner from './Spinner';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
const  Random = () => {
    const API_KEY = 'oSEdTrKjMcheX5weKN43DsSQRhP0Ptaj'
    const[gif,setGif] = useState('');
    const[loading,setLoading] = useState(false);
    async function fetchData(){
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        setLoading(true);
      const {data} =  await axios.get(url);
     
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
    useEffect(()=>{
        fetchData();  

    },[])

    function clickHandler(){
        fetchData();
    }
  return (
    <div className='w-1/2 min-h-[450px] items-center justify-around bg-green-500 border-black flex flex-col gap-y-5 mt-[15px] rounded-md'>
        <h1 className='text-2xl underline font-bold'>Random GIF</h1>

        {
            loading?(<Spinner/>):(        <img src={gif} width="450"/>
)
        }
        <button className='w-10/12 rounded-lg py-1 mb-2 bg-white opacity-75 bg-slae-500' onClick={clickHandler}>Generate</button>
    </div>
  )
}
export default Random