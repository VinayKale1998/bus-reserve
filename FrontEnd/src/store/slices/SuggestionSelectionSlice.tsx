import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlaceSuggestion } from "../../types/mainComps/IplaceSuggestion";
import { fetchAutoSuggestion } from "../thunks/fetchSuggestionsThunk";

interface ISuggestionSelectionState {
  selectionDescription: string;
  selectionPlaceID: string;
  suggestions: IPlaceSuggestion[];
  loading: boolean;
  error: string | null;
  isSelected: boolean;
  input: string;
}

const initialState: ISuggestionSelectionState = {
  selectionDescription: "",
  selectionPlaceID: "",
  suggestions: [],
  loading: false,
  error: null,
  isSelected: false,
  input: "",
};

const SuggestionSelectionSlice = createSlice({
  name: "SuggestionSelection",
  initialState,
  reducers: {
    removeSuggestions(state) {
      state.suggestions = [];
    },
    setSelections(state, action: PayloadAction<IPlaceSuggestion>) {
      state.selectionDescription = action.payload.description;
      state.selectionPlaceID = action.payload.place_id;
    },
    setInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    setIsSelected(state, action: PayloadAction<boolean>) {
      state.isSelected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAutoSuggestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAutoSuggestion.fulfilled,
        (state, action: PayloadAction<IPlaceSuggestion[]>) => {
          state.loading = false;
          state.suggestions = action.payload;
        }
      )
      .addCase(fetchAutoSuggestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch suggestions";
      });
  },
});
export const SuggestionSelectionSliceActions = SuggestionSelectionSlice.actions;
export default SuggestionSelectionSlice.reducer;
