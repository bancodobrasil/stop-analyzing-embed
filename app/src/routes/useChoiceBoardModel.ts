import { useState } from 'react';

export default () => {
  // Selected Items
  const [selectedItems, setSelectedItems] = useState([]);

  // Initial choices
  const initialOptions = [];
  // useEffect(async () => {
  //  const response = await fetch(process.env.REACT_APP_BACKEND_URL);
  //  initialOptions = [response.body.choices[0], response.body.choices[1]];
  // })

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
