import Spinner from './Spinner';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
const  Tag = () => {
    const API_KEY = 'oSEdTrKjMcheX5weKN43DsSQRhP0Ptaj'
    const[gif,setGif] = useState('');
    const[loading,setLoading] = useState(false);
    const[tag,setTag] = useState('car');
    async function fetchData(){
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
    function changeHandler(event){
        setTag(event.target.value);
    }
  return (
    <div className='w-1/2 min-h-[450px] items-center bg-blue-500 border-black flex flex-col  justify-around gap-y-5 mt-[15px] rounded-md'>
        <h1 className='text-2xl underline font-bold'>Searched GIF</h1>

        {
            loading?(<Spinner/>):(        <img src={gif} width="450"/>
)
        }



        <input className='w-10/12 rounded-lg py-1 bg-white mb-[3px] opacity-75 bg-slae-500 text-center' onChange={changeHandler} value={tag}></input>
        <button className='w-10/12 rounded-lg py-1 bg-white opacity-75 bg-slae-500' onClick={clickHandler}>Generate</button>
    </div>
  )
}
export default Tag