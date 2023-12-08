export interface IPlaceSuggestion {
  description: string;
  place_id: string;
}

export interface IPlacesAPiResponse {
  predictions: Array<IPlaceSuggestion>;
  status: string;
}
