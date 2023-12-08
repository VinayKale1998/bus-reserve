import {
  type IPlacesAPiResponse,
  type IPlaceSuggestion,
} from "../Abstractions/IplaceSuggestion";

export class PlacesAPi {
  private suggestions: IPlaceSuggestion[];
  constructor(apiResponse: IPlacesAPiResponse) {
    if (!apiResponse.predictions) {
      throw new Error("Invalid response: Missing predictions");
    }
    this.suggestions = apiResponse.predictions.map(
      (prediction: IPlaceSuggestion) => {
        if (!prediction.place_id || !prediction.description) {
          throw new Error("Invalid data: Missing required field");
        }

        return {
          place_id: prediction.place_id,
          description: prediction.description,
        };
      }
    );
  }
}
