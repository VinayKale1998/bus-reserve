import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlaceSuggestion } from "../../types/mainComps/IplaceSuggestion";
import { fetchFromAutoSuggestion } from "../thunks/fetchFromSuggestionsThunk";
import { fetchToAutoSuggestion } from "../thunks/fetchToSuggestionsThunk";

interface ISuggestionSelectionState {
  selectionDescription: string;
  selectionPlaceID: string;
  fromSuggestions: IPlaceSuggestion[];
  toSuggestions: IPlaceSuggestion[];
  loading: boolean;
  error: string | null;
  fromIsSelected: boolean;
  toIsSelected: boolean;
  fromInput: string;
  toInput: string;
}

const initialState: ISuggestionSelectionState = {
  selectionDescription: "",
  selectionPlaceID: "",
  fromSuggestions: [],
  toSuggestions: [],
  loading: false,
  error: null,
  fromIsSelected: false,
  toIsSelected: false,
  fromInput: "",
  toInput: "",
};

const SuggestionSelectionSlice = createSlice({
  name: "SuggestionSelection",
  initialState,
  reducers: {
    removeSuggestions(state, action: PayloadAction<string>) {
      if (action.payload == "from") {
        state.fromSuggestions = [];
      }
      if (action.payload == "to") {
        state.toSuggestions = [];
      }
    },
    setSelections(state, action: PayloadAction<IPlaceSuggestion>) {
      state.selectionDescription = action.payload.description;
      state.selectionPlaceID = action.payload.place_id;
    },
    setFromInput(state, action: PayloadAction<string>) {
      state.fromInput = action.payload;
    },
    setToInput(state, action: PayloadAction<string>) {
      state.toInput = action.payload;
    },
    setFromIsSelected(state, action: PayloadAction<boolean>) {
      state.fromIsSelected = action.payload;
    },
    setToIsSelected(state, action: PayloadAction<boolean>) {
      state.toIsSelected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFromAutoSuggestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchFromAutoSuggestion.fulfilled,
        (state, action: PayloadAction<IPlaceSuggestion[]>) => {
          state.loading = false;
          state.fromSuggestions = action.payload;
        }
      )
      .addCase(fetchFromAutoSuggestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch suggestions";
      })
      .addCase(fetchToAutoSuggestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchToAutoSuggestion.fulfilled,
        (state, action: PayloadAction<IPlaceSuggestion[]>) => {
          console.log(action.payload);
          console.log(action.payload);
          state.loading = false;
          state.toSuggestions = action.payload;
        }
      )
      .addCase(fetchToAutoSuggestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch suggestions";
      });
  },
});
export const SuggestionSelectionSliceActions = SuggestionSelectionSlice.actions;
export default SuggestionSelectionSlice.reducer;
