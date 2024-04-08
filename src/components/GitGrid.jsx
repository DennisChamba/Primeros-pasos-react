import React, {useEffect, useState} from "react";
import { getGifts } from "../helpers/getGifts";
import { GifElement } from "./GifElement";
import useFetchGifs from "../hooks/useFetchGifs";



export const GitGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs( category );

  /*
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async() =>{
    const images = await getGifts(category)
    setImages(images)
    // console.log(images)
    setIsLoading(false)
  }

  useEffect(()=>{
    getImages()
  }, [ ])
  */

  return (
    <> 
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando......</h2>)
      }

      <div className="card-grid">
        {
          images.map((image)=>(
              //<li key={id}>{title}</li>
              <GifElement 
                key={image.id}
                {...image}        
              />
          ))
        }
      </div>
    </>
  );
};
