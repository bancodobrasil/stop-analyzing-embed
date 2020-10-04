import { useState,useEffect} from 'react';

export default () => {
  // Selected Items
  const [selectedItems, setSelectedItems] = useState([]);

  // Initial choices
  
  /*useEffect(async () => {
   const response = await fetch(process.env.REACT_APP_BACKEND_URL);
    initialOptions = [response.body.choices[0], response.body.choices[1]];
   })*/
   
  //fetching the random user details for initial choices 
let url = "https://randomuser.me/api/?results=5";
   const  [initialOptions,setInitialOptions]= useState([]);
    


  useEffect(() =>{

    const fetchData=async()=>{
      await fetch(url)
      .then((response)=>response.json())
      .then((data) => {
        setInitialOptions(data)
      })
      
    }
    fetchData(); 
  },[]);
console.log(initialOptions)





  // All choices
  // eslint-disable-next-line
  const [allOptions, setAllOptions] = useState(initialOptions);

  // Progress
  // const [progress, setProgress] = useState(0);

  const appendSelection = async (selection: never) => {
    setSelectedItems([...selectedItems, selection]);

    // Mock POST
    // This function will not only append the current choice to the list of choices,
    // but also return the two new choices
    // const response = await fetch('http://localhost:8008/items', {method: 'post', body: {selection}});
    //
    // setProgress(response.body.completeness);
    // setAllOptions([response.body.choices[0], response.body.choices[1]]);
    // return [response.body.choices[0], response.body.choices[1]];
    //
    //
  };

  // will also return progress when the back end is set up
  return { selectedItems, allOptions, appendSelection };
};
