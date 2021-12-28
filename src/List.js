import React from 'react';
import ReactDOM from 'react-dom';

const List = ({content}) => {
  console.log(content)
  const listContent = content.map(({ id, title, body}) => {
    return (
      <li key={id}>
        <h1>{title}</h1>
        <p>{body}</p>
      </li>
    );
  });
  return <ul>{listContent}</ul>
};
export default List;
