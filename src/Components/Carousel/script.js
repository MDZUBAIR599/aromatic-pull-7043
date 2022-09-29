import left_image from "../../Assets/slider/left_image.png";
import middle_image from "../../Assets/slider/middle_image.png";
import right_image from "../../Assets/slider/right_image.png";
import right_arrow from "../../Assets/slider/right_arrow.png";
import left_arrow from "../../Assets/slider/left_arrow.png";
import table_image from "../../Assets/slider/table_image.png";


export const next=()=>{
    let i =1
    const data = [left_image,right_image,table_image, middle_image]
    const arr =[left_image,right_image,table_image, middle_image]
    if (i > 4) {
      i = 0;
    }
    let image = document.getElementById("matches")
    let poster = document.getElementById("table_image")
    image.setAttribute('src', arr[i]);
    poster.setAttribute("src", data[i]);
  
    i++;
  }
  
  export const  changelft=()=>{
    // const lft = [left_image,right_image,table_image, 
    let i =1
    const data = [left_image,right_image,table_image, middle_image]
    const arr =[left_image,right_image,table_image, middle_image,left_image,left_image,left_image,left_image]
    if (i > 4) {
      i = 0;
    }
    let image = document.getElementById("matches")
    let poster = document.getElementById("table_image")
    image.setAttribute('src', arr[i]);
    poster.setAttribute("src", data[i]);
  
    i++;
  }

  

    
