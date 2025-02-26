import React, { useState } from 'react';

function useExpendableList(props) {
    const [expanded , setEnpandedIndex] = useState(null);

    const toggleDropdown = (index) => {
            setEnpandedIndex(expanded === index ? null : index);
    } 
   return [expanded , toggleDropdown];
}

export default useExpendableList;