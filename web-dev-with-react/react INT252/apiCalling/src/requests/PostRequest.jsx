import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const PostRequest = () => {
  const user = {
    name: 'some new name',
    username: 'alpha'
  }
  const [data, setData] = useState('');
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(user)
  })
  .then(response => response.json()) 
  .then(result => {
    console.log(result)
    // setData(result);
    setData(result.id)
  })
  .catch(err => console.error(err));

  return(
    <div>
      {data}
    </div>
  )
}
export default PostRequest;