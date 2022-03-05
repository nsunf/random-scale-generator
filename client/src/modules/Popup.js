
const OPEN_POPUP = "OPEN_POPUP";
const CLOSE_POPUP = "CLOSE_POPUP";

export const openPopup = (cat) => ({ type: OPEN_POPUP, cat }); 
export const closePopup = () => ({ type: CLOSE_POPUP }); 

const initialSate = {
  isOpen: false,
  cat: null
};

export default function popupReducer(state = initialSate, action) {
  switch (action.type) {
    case OPEN_POPUP:
      return { isOpen: true, cat: action.cat };
    case CLOSE_POPUP:
      return {...state, isOpen: false};
    default: 
      return state;
  }
}