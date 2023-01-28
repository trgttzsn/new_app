import { combineReducers } from "redux";
import { ArticleState } from "../types/Article";
import { CategoryState } from "../types/Category";
import { MainState } from "../types/Main";
import articleReducer from "./reducers/articleReducer";
import categoryReducer from "./reducers/categoryReducer";
import mainReducer from "./reducers/mainReducer";


export interface AppState {
    main: MainState;
    category: CategoryState;
    article: ArticleState;
}

const rootReducer = combineReducers<AppState>({
    main: mainReducer,
    category: categoryReducer,
    article: articleReducer,
}); 

export default rootReducer;