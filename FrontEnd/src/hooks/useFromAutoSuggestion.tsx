import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFromAutoSuggestion } from "../store/thunks/fetchFromSuggestionsThunk";
import { SuggestionSelectionSliceActions } from "../store/slices/SuggestionSelectionSlice";
import { AppDispatch } from "../store/store";
import { debounce } from "lodash";
import { RootState } from "../store/store";

import React from "react";

const useFromAutoSuggestion = () => {
  const selectionState = useSelector(
    (state: RootState) => state.SuggestionSelectionSlice.fromIsSelected
  );
  const input = useSelector(
    (state: RootState) => state.SuggestionSelectionSlice.fromInput
  );
  const dispatch = useDispatch<AppDispatch>();
  const debouncedFetch = useCallback(
    debounce((input) => {
      dispatch(fetchFromAutoSuggestion(input));
    }, 500),
    []
  );

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SuggestionSelectionSliceActions.setFromIsSelected(false));
    dispatch(SuggestionSelectionSliceActions.setFromInput(event.target.value));
  };

  useEffect(() => {
    if (!selectionState && input?.trim() !== "") {
      debouncedFetch.cancel();
      debouncedFetch(input);
    } else {
      debouncedFetch.cancel();
      dispatch(SuggestionSelectionSliceActions.removeSuggestions("from"));
    }
  }, [selectionState, input]);

  return { input, inputHandler };
};

export default useFromAutoSuggestion;
