
const GENERATE = "generator/GENERATE";
const RESET = "generator/RESET";

export const generate = (options) => ({ type: GENERATE, options});
export const reset = () => ({ type: RESET });

const initialSate = "Random Scale Generator";

export default function generateReducer(state=initialSate, action) {
  switch (action.type) {
    case GENERATE:
      const key = action.options.key.filter(option => option.selected);
      const scale = action.options.scale.filter(option => option.selected);
      const position = action.options.position.filter(option => option.selected);
        
      const randomEl = (arr) => arr[Math.floor(Math.random() * arr.length)];

      const randomKey = () => {
        if (key.length === 0) return "";

        let a = randomEl(key).name;
        if (a.includes("|")) {
          return randomEl(a.split("|"));
        }
        return a;
      };
      const randomScale = scale.length === 0 ? "" : randomEl(scale).name;
      const randomPosition = position.length === 0 ? "" : randomEl(position).name;

      return `${randomKey()} ${randomScale} ${randomPosition}`;
    case RESET:
      return initialSate;
    default:
      return state;
  }
}