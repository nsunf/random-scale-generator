import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { darken } from "polished";

import { openPopup } from "../modules/Popup";

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;

  height: 20%;
  box-sizing: border-box;
`;

const SelectorContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

`;

const ButtonComp = styled.button`
  width: calc(100% / 3);
  border: none;
  padding: 0;

  display: flex;
  align-items: center;

  background: ${({theme}) => theme.color.subColor_1}};
  color: white;
  
  font-weight: bold;
  font-size: 130%;

  cursor: pointer;

  &:last-child {
    border: none;
  }

  &:active {
    background: ${({theme}) => darken(0.1, theme.color.subColor_1)};
  }

  &::after {
    content: "";
    display: inline-block;

    position: relative;
    right: -0.5px;

    height: 80%;
    width: 1px;

    background: ${({theme}) => darken(0.1, theme.color.subColor_1)};
  }

  span {
    flex-grow: 1;
  }
`;

function SelectButton({ name, options }) {
  const dispatch = useDispatch();
  const onClick = () => dispatch(openPopup(name));

  return (
    <ButtonComp onClick={onClick}>
      <span>
        {options.filter(option => option.selected).length} {name}
      </span>
    </ButtonComp>
  );
}

function Top() {
  const { key, scale, position } = useSelector(state => state.optionReducer);

  return (
    <TopContainer>
      <SelectButton name={"key"} options={key}/>
      <SelectButton name={"scale"} options={scale}/>
      <SelectButton name={"position"} options={position}/>
    </TopContainer>
  );
}

export default Top;