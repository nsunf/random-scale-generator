
const TOGGLE_OPTION = "TOGGLE_OPTION";
const SELECT_ALL_OPTIONS = "SELECT_ALL_OPTIONS";
const DESELECT_ALL_OPTIONS = "DESELECT_ALL_OPTIONS";

export const toggleOption = (cat, id) => ({ type: TOGGLE_OPTION, cat, id});
export const selectAllOptions = (cat) => ({ type: SELECT_ALL_OPTIONS, cat});
export const deselectAllOptions = (cat) => ({ type: DESELECT_ALL_OPTIONS, cat});


const initalState = {
  key: [
    {id: 1, name: "C", selected: true},
    {id: 2, name: "C♯|D♭", selected: true},
    {id: 3, name: "D", selected: true},
    {id: 4, name: "D♯|E♭", selected: true},
    {id: 5, name: "E", selected: true},
    {id: 6, name: "F", selected: true},
    {id: 7, name: "F♯|G♭", selected: true},
    {id: 8, name: "G", selected: true},
    {id: 9, name: "G♯|A♭", selected: true},
    {id: 10, name: "A", selected: true},
    {id: 11, name: "A♯|B♭", selected: true},
    {id: 12, name: "B", selected: true}
  ], // ♭ ♯
  scale: [
    {id: 1, name: "Ionian", selected: true},
    {id: 2, name: "Dorian", selected: true},
    {id: 3, name: "Phrydian", selected: true},
    {id: 4, name: "Lydian", selected: true},
    {id: 5, name: "Mixolydian", selected: true},
    {id: 6, name: "Aeolian", selected: true},
    {id: 7, name: "Locrian", selected: true},
    {id: 8, name: "Harmonic minor", selected: false},
    {id: 9, name: "Jazz mionr", selected: false},
    {id: 10, name: "Lydian ♭7", selected: false},
    {id: 11, name: "Mixolydian ♭13", selected: false},
    {id: 12, name: "Mixolydian ♭9 ♭13", selected: false},
    {id: 13, name: "Altered", selected: false},
    {id: 14, name: "Half-Whole", selected: false},
    {id: 15, name: "Whole-Half", selected: false}
  ],
  chord_tone: [
    {id: 1, name: "major 7th"},
    {id: 2, name: "7th"},
    {id: 3, name: "minor 7th"},
    {id: 4, name: "minor 7th ♭5"},
    {id: 5, name: "diminished 7th"}
  ],
  position: [
    {id: 1, name: "1st", selected: true},
    {id: 2, name: "2nd", selected: true},
    {id: 3, name: "3rd", selected: true},
    {id: 4, name: "4th", selected: true},
    {id: 5, name: "5th", selected: true}
  ]
}

export default function optionReducer(state = initalState, action) {
  switch (action.type) {
    case TOGGLE_OPTION:
      var options = state[action.cat];
      var editedOptions = options.map(option => {
        if (option.id == action.id) {
          return {...option, selected: !option.selected};
        } else {
          return option
        }
      });
      return { ...state, [action.cat]: editedOptions};
    case SELECT_ALL_OPTIONS:
      var options = state[action.cat];
      var editedOptions = options.map(option => {
        return {...option, selected: true}; 
      })
      return { ...state, [action.cat]: editedOptions};
    case DESELECT_ALL_OPTIONS:
      var options = state[action.cat];
      var editedOptions = options.map(option => {
        return {...option, selected: false}; 
      })
      return { ...state, [action.cat]: editedOptions};
    default:
      return state;
  }
}