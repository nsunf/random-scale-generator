import { useSelector, useDispatch } from "react-redux";
import Selector from "./Selector";

import styled from "styled-components";
import { lighten } from "polished";

import { closePopup } from "../modules/Popup";
import { selectAllOptions, deselectAllOptions } from "../modules/Option";

const SelectorPopupContainer = styled.div`
  background: ${({theme}) => lighten(0.1, theme.color.subColor_2)};
  height: ${props => props.isOpen ? "50%" : "0%"};
  transition: 500ms;
  overflow: hidden;
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 8px;

  background: ${({theme}) => theme.color.subColor_1};
`;

const HeaderButton = styled.button`
  color: white;
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1.1em;
  cursor: pointer;

  &:active {
    color: #eee;
  }
`;

function SelectorPopup() {
  const { isOpen, cat } = useSelector(state => state.popupReducer);
  const options = useSelector(state => state.optionReducer[cat]);
  const dispatch = useDispatch();


  const onClickClose = () => {dispatch(closePopup())};
  const onClickToggleAll = () => {
    let deselectedOptions = options.filter(option => option.selected === false);
    if (deselectedOptions.length > 0) {
      dispatch(selectAllOptions(cat));
    } else {
      dispatch(deselectAllOptions(cat));
    }
  };


  return (
    <SelectorPopupContainer isOpen={isOpen}>
      <PopupHeader>
        <HeaderButton onClick={onClickToggleAll}>Select all</HeaderButton>
        <HeaderButton onClick={onClickClose}>Close</HeaderButton>
      </PopupHeader>
      <Selector />
    </SelectorPopupContainer>
  );
}

export default SelectorPopup;