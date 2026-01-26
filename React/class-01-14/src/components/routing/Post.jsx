import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setPosts(data.products);


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])
  return (
    <>
      <div className="container-xxl my-5 d-flex justify-content-center gap-4 flex-wrap">

        {
          posts?.map((p, i) => (
            <Card key={i+p.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={p.thumbnail} />
              <Card.Body>
                <Card.Title>{p?.title || "card title"}</Card.Title>
                <Card.Text className='d-flex justify-content-between'>
                 {p?.price || "description"}
               <span>  {p?.rating || "rating rate"} rating</span>
                </Card.Text>
                <Card.Text>
                 {p?.description.slice(0,30)+"..." || "description"}
                </Card.Text>
               <NavLink className="text-decoration-none" to={`/posts/${p.id}`}> <Button variant="dark" className='d-block w-100  '>View Detail</Button> </NavLink>
              </Card.Body>
            </Card>
          ))
        }




      </div>
    </>
  )
}

export default Post