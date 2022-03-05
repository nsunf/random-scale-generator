import { useDispatch, useSelector } from "react-redux";
import { generate, reset } from "../modules/Generator";
import styled, { css } from "styled-components";
import { darken } from "polished";

const BottomContainer = styled.div`
  display: flex;

  height: 10%;

  display: flex;
`;

const ButtonBlock = styled.button`
  flex-basis: 50%;

  border: none;

  font-weight: bold;
  font-size: 1.6em;

  cursor: pointer;

  color: white;
  ${({type, theme}) => {
    let bgColor = type == "generate" ? theme.color.mainColor : theme.color.subColor_2;
    return (css`
      background: ${bgColor};
      &:active {
        background: ${darken(0.1, bgColor)};
      }
    `)
  }}

  &:active {
    background
  }
`;

function Button({ type, onClick }) {
  return(
    <ButtonBlock type={type} onClick={onClick}>
      { type }
    </ButtonBlock>
  );
}

function Bottom() {
  const options = useSelector(state => state.optionReducer);

  const dispatch = useDispatch();
  const onClickGenerate = () => dispatch(generate(options));
  const onClickReset = () => dispatch(reset());

  return (
    <BottomContainer>
      <Button onClick={onClickReset} type="reset" />
      <Button onClick={onClickGenerate} type="generate" />
    </BottomContainer>
  );
}

export default Bottom;