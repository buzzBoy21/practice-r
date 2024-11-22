import { useState } from "react";
import style from "./Rules.module.css";
function Rules() {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <dialog open={showRules} className={style.ruleModal}>
        <table className={style.rulesTable}>
          <tr>
            <th
              rowSpan={3}
              style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
            >
              STRONG
            </th>
            <th>
              Cuando está en primer el lugar es simpre <b>fuerte</b>
            </th>
            <th>
              When it is on the first place it is always <b>strong</b>
            </th>
          </tr>
          <tr>
            <th>
              Cuando la letra 'r' está entre vocales y su sonido es{" "}
              <b>fuerte </b> → rr
            </th>
            <th>
              When the letter 'r' is between vowels and its sound is{" "}
              <b>strong</b> → rr
            </th>
          </tr>
          <tr>
            <th>Cuando la 'r' viene después de l,n o s, es fuerte </th>
            <th>When the 'r' comes after 'l', 'n', or 's', it's strong</th>
          </tr>
          <tr>
            <th
              rowSpan={1}
              style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
            >
              SOFT
            </th>
            <th>
              Cuando hay una sola 'r' y no está al pricipio de la palabra es
              siempre <b>débil</b>
            </th>
            <th>
              When there is a single 'r' and it is not at the beginning of the
              word, its sound is always <b>soft</b>
            </th>
          </tr>
        </table>
        <button
          className={style.closeButton}
          onClick={() => {
            setShowRules(false);
          }}
        >
          cerrar (close)
        </button>
      </dialog>
      <button
        onClick={() => {
          setShowRules((prev) => !prev);
        }}
      >
        show rules
      </button>
    </>
  );
}

export default Rules;
