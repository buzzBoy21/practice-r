import { forwardRef, useState } from "react";
import style from "./Checkbox.module.css";
const Checkbox = forwardRef(function Checkbox(
  {
    labelWord,
    idCheckBox,
    defaultValue = false,
    nameInput,
    marginInput,
    executeWhenIsChecked = () => {},
  },
  ref
) {
  const [isChecked, setIsChecked] = useState(defaultValue);

  return (
    <div className={style["container-checkbox"]}>
      <label htmlFor={idCheckBox}>{labelWord}</label>
      <input
        ref={ref}
        type="checkbox"
        name={nameInput}
        id={idCheckBox}
        checked={isChecked}
        onChange={() => {
          setIsChecked((prev) => !prev);
          executeWhenIsChecked();
        }}
        style={{ margin: marginInput }}
      />
    </div>
  );
});

export default Checkbox;
