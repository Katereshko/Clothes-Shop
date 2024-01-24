function Dresses({clothes}){

  return (
    <div className="products">
      {clothes.map( (element => {
        const {id, name, searchTerm, price, image} = element;
        return(
          <div className="product-card" key={id}>
            <div>
              <h3>{name}</h3>
              <h4>Category: {searchTerm}</h4>
              <h4>Price: {price}</h4>
              <img width="400px" height="500px" alt="clothes" src={image}/>
            </div>
          </div>
        )
      }))}
    </div>
  );

}

export default Dresses;