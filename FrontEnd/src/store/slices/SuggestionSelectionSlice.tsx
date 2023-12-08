import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlaceSuggestion } from "../../types/mainComps/IplaceSuggestion";
import { fetchAutoSuggestion } from "../thunks/fetchSuggestionsThunk";

interface ISuggestionSelectionState {
  selectionDescription: string;
  selectionPlaceID: string;
  suggestions: IPlaceSuggestion[];
  loading: boolean;
  error: string | null;
}

const initialState: ISuggestionSelectionState = {
  selectionDescription: "",
  selectionPlaceID: "",
  suggestions: [],
  loading: false,
  error: null,
};

const SuggestionSelectionSlice = createSlice({
  name: "SuggestionSelection",
  initialState,
  reducers: {
    removeSuggestions(state) {
      state.suggestions = [];
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
