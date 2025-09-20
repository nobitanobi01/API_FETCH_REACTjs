import { useEffect, useState } from 'react'


function App() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData();
  }, [])

  async function getData() {
    const url = "https://dummyjson.com/products";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setProduct(response.products);
    setLoading(false);

  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Fetching Data from Url</h1>
      {!loading ?

      <table border="1px " cellpadding="10" style={{ borderCollapse: "collapse", width: "80%", margin: "auto" }}>
        <thead style={{ backgroundColor: "black", color:"white" }} >
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "grey" }}>
          {
            
              products.map((item, index) => (
                <tr key={index}style={{border:"1px solid black"}}>
                  <td >{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.rating}</td>
                </tr>
              ))
            
          }
        </tbody>
      </table>
      : <h1 style={{textAlign:"center", color:"orange", margin:"auto"}}> Loading Data....</h1>
}
    </>
  )
}

export default App
