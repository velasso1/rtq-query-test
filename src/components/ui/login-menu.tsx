import { FC, useState } from "react";
import TextField from "./textfield";
import { IDataPropsToChange } from "../../types/type";
import config from "../../auxuliary.config.json";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginMenu: FC = () => {
  const [state, setState] = useState<IDataPropsToChange>({
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    empty: false,
    wrongValue: false,
  });

  const signIn = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, state.login, state.password);
  };

  return (
    <div className="login">
      <form className="login__form" action="submit">
        {config.textField.map((item, index) => {
          return (
            <TextField
              key={index}
              placeholder={item.placeholder}
              type={item.type}
              state={state}
              setState={setState}
            />
          );
        })}
        <button
          className="login__button"
          onClick={(e) => {
            signIn(e);
          }}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginMenu;
