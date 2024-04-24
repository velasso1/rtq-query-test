import { FC } from "react";
import { IDataPropsToChange } from "../../types/type";

export interface ITextFieldData {
  placeholder: string;
  type: string;
  state: IDataPropsToChange;
  setState: (data: IDataPropsToChange) => void;
  //   className: string;
}

const TextField: FC<ITextFieldData> = ({
  placeholder,
  type,
  state,
  setState,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={state[type]}
      onChange={(e) => setState({ ...state, [type]: e.target.value })}
      //   className={className}
    />
  );
};

export default TextField;
