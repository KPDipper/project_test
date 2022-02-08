const initialData = {
  game_name: "football",
  player_name: "",
};
//hamile yesma tai user bata value pass bhayera bascha tyo mathi initialdata ma aile "football" tai already default value ho or we can pass an string.

function gamereducer(state = initialData, action) {
  switch (action.type) {
    case "UPDATE_GAME":
      if (action.payload == "") {//we perform if else so that if we pass an empty string then state will not be changed and remained as an orginal one
        return state;
      } else {
        return {
          ...state,
          game_name: action.payload,
        };
      }

    case "UPDATE_PLAYER":
      if ((action.payload == "")) {
        return state;
      } else {
        return {
          ...state, //here it is unchanged value jun intial value paila j ako cha so kei chainge hunna.so yedi maile suppose
          //game ko name rakhe re so maile yedi player ko name rkahyo bhane ra update garyo bhane now player name kei change hunna
          player_name: action.payload,
        };
      }

    default:
      return state;
  }
}

export default gamereducer;
