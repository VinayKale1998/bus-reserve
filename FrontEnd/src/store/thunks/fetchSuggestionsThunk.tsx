import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPlaceSuggestion } from "../../types/mainComps/IplaceSuggestion";

const fetchAutoSuggestion = createAsyncThunk<
  IPlaceSuggestion[],
  string,
  {
    rejectValue: string;
  }
>(
  "suggestion/fetchAutoSuggestion",
  async (input: string, { rejectWithValue }) => {
    const suggestionURL = import.meta.env.VITE_SUGESTION_BASE_URL;
    const params = {
      input,
    };
    try {
      const response = await axios.get(suggestionURL, { params });
      console.log(response.data);
      return response.data as IPlaceSuggestion[];
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue("An unknown erorr occured in fetch thunk");
      }
    }
  }
);
export { fetchAutoSuggestion };
