import { configureStore } from "@reduxjs/toolkit";
import BookmarkTabSlice from "./Reducer/BookmarkTabSlice";
import CartSlice from "./Reducer/CartSlice";
import AddProductSlice from "./Reducer/AddProductSlice";
import FileManagerSlice from "./Reducer/FileManagerSlice";
import FilterSlice from "./Reducer/FilterSlice";
import FormWizardTwoSlice from "./Reducer/FormLayout/FormWizardTwoSlice";
import NumberingWizardSlice from "./Reducer/FormLayout/NumberingWizardSlice";
import StudentWizardSlice from "./Reducer/FormLayout/StudentWizardSlice";
import TwoFactorSlice from "./Reducer/FormLayout/TwoFactorSlice";
import VerticalWizardSlice from "./Reducer/FormLayout/VerticalWizardSlice";
import HeaderBookmarkSlice from "./Reducer/Layout/HeaderBookmarkSlice";
import LayoutSlice from "./Reducer/Layout/LayoutSlice";
import TableSearchSlice from "./Reducer/Layout/TableSearchSlice";
import ThemeCustomizerSlice from "./Reducer/Layout/ThemeCustomizerSlice";
import LetterBoxSlice from "./Reducer/LetterBoxSlice";
import ProductSlice from "./Reducer/ProductSlice";
import ContactSlice from "./Reducer/ContactSlice";
import ToDoSlice from "./Reducer/ToDoSlice";
import ChatSlice from "./Reducer/ChatSlice";
import TaskSlice from "./Reducer/TaskSlice";
import ProjectSlice from "./Reducer/ProjectSlice";


const Store = configureStore({
  reducer: {
    layout: LayoutSlice,
    headerBookMark: HeaderBookmarkSlice,
    search: TableSearchSlice,
    themeCustomizer: ThemeCustomizerSlice,
    product: ProductSlice,
    cartData: CartSlice,
    bookmarkTab: BookmarkTabSlice,
    contact: ContactSlice,
    todo: ToDoSlice,
    chat: ChatSlice,
    task: TaskSlice,
    project: ProjectSlice,
    fileManager: FileManagerSlice,    
    addProduct: AddProductSlice,
    filterData: FilterSlice,
    twoFactor: TwoFactorSlice,
    numberingWizard: NumberingWizardSlice,
    studentWizard: StudentWizardSlice,
    verticalWizard: VerticalWizardSlice,
    formWizardTwo: FormWizardTwoSlice   ,
    letterBox:LetterBoxSlice,
    

  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
