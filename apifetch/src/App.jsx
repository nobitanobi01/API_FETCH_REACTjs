import { useEffect, useState } from 'react'


function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const url = "https://dummyjson.com/products";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setProduct(response.products);
  }
  return (
    <>
      <h1>Fetching Data from Url</h1>
      <table border="1" cellpadding="10" style={{borderCollapse:"collapse",width:"80%",margin:"auto"}}>
        <thead >
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {
          products.map((item,index)=>(
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
