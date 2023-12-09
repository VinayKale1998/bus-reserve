import { useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchToAutoSuggestion } from "../store/thunks/fetchToSuggestionsThunk";
import { SuggestionSelectionSliceActions } from "../store/slices/SuggestionSelectionSlice";
import { AppDispatch } from "../store/store";
import { debounce } from "lodash";
import { RootState } from "../store/store";

import React from "react";

const useToAutoSuggestion = () => {
  const selectionState = useSelector(
    (state: RootState) => state.SuggestionSelectionSlice.toIsSelected
  );
  const input = useSelector(
    (state: RootState) => state.SuggestionSelectionSlice.toInput
  );
  const dispatch = useDispatch<AppDispatch>();
  const debouncedFetch = useCallback(
    debounce((input) => {
      dispatch(fetchToAutoSuggestion(input));
    }, 500),
    []
  );

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SuggestionSelectionSliceActions.setToIsSelected(false));
    dispatch(SuggestionSelectionSliceActions.setToInput(event.target.value));
  };

  useEffect(() => {
    if (!selectionState && input?.trim() !== "") {
      debouncedFetch.cancel();
      debouncedFetch(input);
    } else {
      debouncedFetch.cancel();
      dispatch(SuggestionSelectionSliceActions.removeSuggestions("to"));
    }
  }, [selectionState, input]);

  return { input, inputHandler };
};

export default useToAutoSuggestion;
