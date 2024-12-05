import { useState } from "react";
import style from "./Rules.module.css";
function Rules({ usedRules = [] }) {
  const [showRules, setShowRules] = useState(false);
  const colorRule = "light-dark(hsl(134, 50%, 60%),#28a745)";

  const strongRules = (
    <table className={style.rulesTable}>
      <tbody>
        <tr>
          <th
            rowSpan={4}
            style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
          >
            STRONG
          </th>
        </tr>
        <tr style={usedRules.includes(0) ? { backgroundColor: colorRule } : {}}>
          <th>
            Cuando está en el lugar primer es simpre <b>fuerte</b>
          </th>
          <th>
            When it is on the first place it is always <b>strong</b>
          </th>
        </tr>
        <tr style={usedRules.includes(1) ? { backgroundColor: colorRule } : {}}>
          <th>
            Cuando la letra &apos;r&apos; está entre vocales y su sonido es{" "}
            <b>fuerte </b> → &apos;rr&apos;
          </th>
          <th>
            When the letter &apos;r&apos; is between vowels and its sound is{" "}
            <b>strong</b> → &apos;rr&apos;
          </th>
        </tr>
        <tr style={usedRules.includes(2) ? { backgroundColor: colorRule } : {}}>
          <th>
            Cuando la &apos;r&apos; viene después de &apos;l&apos;,&apos;n&apos;
            o &apos;s&apos;, es <b>fuerte</b>{" "}
          </th>
          <th>
            When the &apos;r&apos; comes after &apos;l&apos;, &apos;n&apos;, or
            &apos;s&apos;, it&apos;s <b>strong</b>{" "}
          </th>
        </tr>
      </tbody>
    </table>
  );
  const softRules = (
    <table className={style.rulesTable}>
      <tbody>
        <tr>
          <th
            rowSpan={3}
            style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
          >
            SOFT
          </th>
        </tr>
        <tr style={usedRules.includes(3) ? { backgroundColor: colorRule } : {}}>
          <th>
            Cuando solo hay una 'r' y ni está al principio de la palabra ni está
            después de 'l', 'n', or 's', es siempre considerada <b>débil</b>
          </th>
          <th>
            When there is only one 'r' and it is neither at the beginning of the
            word nor followed by 'l', 'n', or 's', it is always considered{" "}
            <b>soft</b>.
          </th>
        </tr>
        <tr style={usedRules.includes(4) ? { backgroundColor: colorRule } : {}}>
          <th>
            Cuando hay una sola &apos;r&apos; esta entre vocales, es siempre{" "}
            <b>débil</b>
          </th>
          <th>
            When there is a single &apos;r&apos; between vowels, it is always{" "}
            <b>soft</b>
          </th>
        </tr>
      </tbody>
    </table>
  );
  return (
    <>
      <button
        onClick={() => {
          setShowRules((prev) => !prev);
        }}
      >
        show rules
      </button>
      <dialog open={showRules} className={style.ruleModal}>
        <div>
          {strongRules}
          {softRules}
        </div>
        <button
          className={style.closeButton}
          onClick={() => {
            setShowRules(false);
          }}
        >
          cerrar (close)
        </button>
      </dialog>
    </>
  );
}

export default Rules;
