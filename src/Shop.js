import {useState} from 'react';
import {data} from "./data";
import Dresses from "./Dresses"
import Buttons from './Buttons';

function Shop() {

  const [clothes, setClothes] = useState(data);
  
  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(item => item.searchTerm === searchTerm);
    setClothes(newClothes);
  }
  
    return (
      <div>
        <div className="cont">
          <h2 className="back">Free Standard Shipping</h2>
        </div>
        <Buttons filteredClothes={chosenClothes}/>
        <Dresses clothes={clothes}/>
      </div>
    );
  }
  
  export default Shop;