import { useDispatch, useSelector } from "react-redux";

import { toggleOption } from "../modules/Option";

import styled from "styled-components";
import { MdOutlineCircle, MdCheckCircle } from "react-icons/md";
import theme from "./Theme";

const SelectorForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  height: calc(100% - 1.1em - 16px);
  padding: 32px;
  box-sizing: border-box;

  overflow: auto;
`;

const CheckBoxBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const CheckBoxLabel = styled.label`
  cursor: pointer;

  color: ${({theme}) => theme.color.subColor_1};

  font-weight: bold;
  font-size: 1.6em;
  user-select: none;
`;

function CheckBox({ cat, option, onChangeOption }) {
  const dispatch = useDispatch();

  const checkCircleStyle = {
    color: theme.color.mainColor,
    width: "32px",
    height: "32px"
  }

  const onChange = () => {
    onChangeOption(cat, option.id)
  }

  return (
    <CheckBoxBlock>
      {option.selected ? <MdCheckCircle style={checkCircleStyle} /> : <MdOutlineCircle style={checkCircleStyle} />}
      <input style={{display: "none"}} type="checkbox" id={cat + "_" + option.id} name={option.name} checked={option.selected} onChange={onChange}/>
      <CheckBoxLabel htmlFor={cat + "_" + option.id}>{option.name}</CheckBoxLabel>
    </CheckBoxBlock>
  );
}

function Selector() {
  const cat = useSelector(state => state.popupReducer.cat);

  const options = useSelector(state => (
    cat ? state.optionReducer[cat.toLowerCase()] : []
  ));

  const dispatch = useDispatch();
  const onChangeOption = (cat, id) => dispatch(toggleOption(cat, id));
  
  return (
    <SelectorForm>
      {options.map(option => (
        <CheckBox
          key={option.name + "_" + option.id}
          cat={cat}
          option={option}
          onChangeOption={onChangeOption}
        />
      ))}
    </SelectorForm>
  );
}

export default Selector;