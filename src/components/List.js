import React from 'react';
import data from './ListData.json';

const List = ({ inputText }) => {
  // Filtered new array
  const filteredData = data.filter(element => {
    // 아무것도 없을 땐 요소 전체 출력
    if (inputText === '') {
      return element;
    } else {
      // return the item which contains the user input
      return element.text.toLowerCase().includes(inputText);
    }
  });

  return (
    <ul>
      {filteredData.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default List;
