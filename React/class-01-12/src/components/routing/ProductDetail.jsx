import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ProductDetail = () => {
const {id} = useParams();

  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setPost(data);


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPost();
  }, [])

  // console.log(post);
  
  return (
    <>
    <h1>Detil Page</h1>
    {/* <img src={post?.thumbnail} />  */}
{
  Array.isArray(post.images) ? (
<img src={post.images[0]} alt="" />
  ):(
 <img src={post?.thumbnail} />
  )
}
    <h2>{post?.title}</h2>
    <p>{post.description}</p>
    </>
  )
}

export default ProductDetail