import Card from "../../reusableComponents/Card";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, type RootState } from "../../store/store";
import { FC } from "react";
import { IPlaceSuggestion } from "../../types/mainComps/IplaceSuggestion";
import { SuggestionSelectionSliceActions } from "../../store/slices/SuggestionSelectionSlice";

type ISuggestions = {
  className: string;
};

const ToSuggestionList: FC<ISuggestions> = ({ className }: ISuggestions) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectionState = useSelector(
    (state: RootState) => state.SuggestionSelectionSlice
  );
  const input = useSelector(
    (state: RootState) => state.SuggestionSelectionSlice.toInput
  );

  const selectHandler: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const place: IPlaceSuggestion = JSON.parse(
      event.currentTarget.getAttribute("data-item-data") || ""
    );
    dispatch(SuggestionSelectionSliceActions.setToIsSelected(true));
    dispatch(SuggestionSelectionSliceActions.setToInput(place.description));
    dispatch(
      SuggestionSelectionSliceActions.setSelections({
        description: place.description,
        place_id: place.place_id,
      })
    );
    dispatch(SuggestionSelectionSliceActions.removeSuggestions("to"));
  };

  return (
    <Card className={className}>
      {selectionState.toSuggestions.length > 0 &&
        input !== "" &&
        selectionState.toIsSelected !== true && (
          <ul className="flex flex-col w-[20vw] text-xs bg-white rounded-md m-1 p-1">
            {selectionState.toSuggestions.map((item: IPlaceSuggestion) => (
              <li
                className="m-1 p-1 cursor-pointer hover:bg-slate-300 rounded-md"
                key={item.place_id}
                data-item-data={JSON.stringify(item)}
                onClick={selectHandler}
              >
                {item.description}
              </li>
            ))}

            {selectionState.error && <h1>{selectionState.error}</h1>}
          </ul>
        )}
    </Card>
  );
};

export default ToSuggestionList;
