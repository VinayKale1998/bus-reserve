import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, type RootState } from "../../store/store";
import { FC } from "react";
import { IPlaceSuggestion } from "../../types/mainComps/IplaceSuggestion";
import { SuggestionSelectionSliceActions } from "../../store/slices/SuggestionSelectionSlice";
import { FaCity } from "react-icons/fa";

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
      SuggestionSelectionSliceActions.setToSelections({
        description: place.description,
        place_id: place.place_id,
      })
    );
    dispatch(SuggestionSelectionSliceActions.removeSuggestions("to"));
  };

  return (
    <div className={className}>
      {selectionState.toSuggestions.length > 0 &&
        input !== "" &&
        selectionState.toIsSelected !== true && (
          <ul className="flex flex-col w-[20vw] text-xs bg-white rounded-md m-1 p-1">
            {selectionState.toSuggestions.map((item: IPlaceSuggestion) => (
              <li
                className="m-1 p-1 cursor-pointer hover:bg-slate-300 rounded-md flex items-center"
                key={item.place_id}
                data-item-data={JSON.stringify(item)}
                onClick={selectHandler}
              >
                <span className="m-1 p-1">
                  <FaCity></FaCity>
                </span>
                {item.description}
              </li>
            ))}

            {selectionState.error && <h1>{selectionState.error}</h1>}
          </ul>
        )}
    </div>
  );
};

export default ToSuggestionList;
