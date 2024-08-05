import React, { useState } from 'react';
import styled from 'styled-components';

const ElementContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px 0;
  text-align: center;
  cursor: pointer;
  background-color: ${props => (props.clicked ? '#e0f7fa' : '#ffffff')};
  border-radius: 5px;
`;

const InteractiveElement = ({ text }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <ElementContainer clicked={clicked} onClick={() => setClicked(!clicked)}>
      {text}
    </ElementContainer>
  );
};

export default InteractiveElement;