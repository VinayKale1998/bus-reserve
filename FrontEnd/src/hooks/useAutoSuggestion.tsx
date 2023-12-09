import { useEffect, useCallback } from "react";
import { IPlaceSuggestion } from "../types/mainComps/IplaceSuggestion";
import { useDispatch, useSelector } from "react-redux";
import { fetchAutoSuggestion } from "../store/thunks/fetchSuggestionsThunk";
import { SuggestionSelectionSliceActions } from "../store/slices/SuggestionSelectionSlice";
import { AppDispatch } from "../store/store";
import { debounce } from "lodash";
import { RootState } from "../store/store";

import React from "react";

const useAutoSuggestion = () => {
  const selectionState = useSelector(
    (state: RootState) => state.SuggestionSelectionSlice.isSelected
  );
  const input = useSelector(
    (state: RootState) => state.SuggestionSelectionSlice.input
  );
  const dispatch = useDispatch<AppDispatch>();
  const debouncedFetch = useCallback(
    debounce((input) => {
      dispatch(fetchAutoSuggestion(input));
    }, 500),
    []
  );

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SuggestionSelectionSliceActions.setIsSelected(false));
    dispatch(SuggestionSelectionSliceActions.setInput(event.target.value));
  };

  const selectHandler: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const place: IPlaceSuggestion = JSON.parse(
      event.currentTarget.getAttribute("data-item-data") || ""
    );
    dispatch(SuggestionSelectionSliceActions.setIsSelected(true));
    dispatch(SuggestionSelectionSliceActions.setInput(place.description));
    dispatch(
      SuggestionSelectionSliceActions.setSelections({
        description: place.description,
        place_id: place.place_id,
      })
    );
    dispatch(SuggestionSelectionSliceActions.removeSuggestions());
  };

  useEffect(() => {
    if (!selectionState && input?.trim() !== "") {
      debouncedFetch.cancel();
      debouncedFetch(input);
    } else {
      debouncedFetch.cancel();
      dispatch(SuggestionSelectionSliceActions.removeSuggestions());
    }
  }, [selectionState, input]);

  return { input, inputHandler, selectHandler };
};

export default useAutoSuggestion;
