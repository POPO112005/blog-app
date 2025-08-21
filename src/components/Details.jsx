import { useParams } from "react-router";
import {useEffect, useState} from "react";
import Articles from "../data/Articles";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router";
const Details = () => {
  const {id} = useParams();
  const [title, setTitle] = useState(null);
  const [image_url, setImage_url] = useState(null);
  const [content, setContent] = useState(null);
  const [author, setAuthor] = useState(null);
  const linkTo = useNavigate();
  useEffect(()=>{
    const article = Articles.find((article)=>article.id === parseInt(id));
    setTitle(article.title);
    setImage_url(article.image_url);
    setContent(article.content);
    setAuthor(article.author);
  },[]);
  return (
    <>
    
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-8 ">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="w-full">
        <img src={image_url} alt={title} className="mb-8" />
      </div>
      <p className="self-start text-sm mb-4 font-bold">Author: {author}</p>
      <p className="mb-8">{content}</p>

       
      
    </div>
    <div className="fixed right-40 top-23 flex justify-end items-start">
      <div className="p-4">
        <IoMdClose 
          className="text-2xl cursor-pointer"
          onClick={()=>linkTo("/blogs")}
        />
      </div>
    </div>
    </>
  )
}

export default Details