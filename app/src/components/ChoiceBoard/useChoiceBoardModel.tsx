import { useState } from 'react';

export default (originalOptions) => {
  // Selected Items
  const [selectedItems, setSelectedItems] = useState([]);

  // All choices
  const [allOptions, setAllOptions] = useState(originalOptions);

  // Progress
  // const [progress, setProgress] = useState(0);

  const appendSelection = (selection: never) => {
    setSelectedItems([...selectedItems, selection]);

    // Mock POST, not sure if we are going to use axios or fetch
    // This function will not only append the current choice to the list of choices,
    // but also return the two new choices
    // axios.post(`${process.env.REACT_APP_BACKEND_URL}/items`, {selection})
    // .then((res) => {
    //      setProgress(res.body.completeness);
    //      setAllOptions([res.body.choices[0], res.body.choices[1]]);
    //      return [res.body.choices[0], res.body.choices[1]]
    // })
    //
  };

  // will also return newOptions and progress when the back end is set up
  return { selectedItems, allOptions, appendSelection };
};
