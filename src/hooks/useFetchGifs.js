import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifts"


export default function useFetchGifs( category ) {


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

  return {
    images,
    isLoading
  }
}






