import { configureStore } from "@reduxjs/toolkit";
import pokePerPage from "./slices/pokePerPage.slice";
import trainer from './slices/trainer.slice'

export default configureStore({
  reducer: {
    trainer,
    pokePerPage,
  }
})