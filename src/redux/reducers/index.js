import { SET_PAGE_LANGUAGE } from '../actions';

const INITIAL_STATE = {
  selectedLanguage: 'EN'
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PAGE_LANGUAGE:
      return {
        selectedLanguage: action.selectedLanguage
      }
    default:
      return state;
  }
};

export default reducer