export const SET_PAGE_LANGUAGE = 'SET_PAGE_LANGUAGE';

export const changeLanguage = (payload) => ({
  type: SET_PAGE_LANGUAGE,
  selectedLanguage: payload,
})