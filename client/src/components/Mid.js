import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../modules/Popup";

import styled from "styled-components";

const MidContainer = styled.div`
  flex-grow: 1;
  
  color: ${({theme}) => theme.color.mainColor};
  background: ${({theme}) => theme.color.backgroundColor};

  font-weight: bold;
  font-size: 200%;

  display: felx;
  justify-content: center;
  align-items: center;
`;

function Mid() {
  const randomScale = useSelector(state => state.generateReducer);
  const dispatch = useDispatch();
  const onClick = () => dispatch(closePopup());

  return (
    <MidContainer onClick={onClick}>
      {randomScale}
    </MidContainer>
  );
}

export default Mid;