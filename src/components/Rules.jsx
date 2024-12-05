import { useState } from "react";
import style from "./Rules.module.css";
function Rules({usedRules=[]}) {
  const [showRules, setShowRules] = useState(false);
  const colorRule="#28a745"
  
  const strongRules=(        
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
          <tr style={usedRules.includes(0)?{backgroundColor:colorRule}:{}}>
            <th>
              Cuando está en el lugar primer  es simpre <b>fuerte</b>
            </th>
            <th>
              When it is on the first place it is always <b>strong</b>
            </th>
          </tr>
          <tr style={usedRules.includes(1)?{backgroundColor:colorRule}:{}}>
            <th>
              Cuando la letra 'r' está entre vocales y su sonido es{" "}
              <b>fuerte </b> → 'rr'
            </th>
            <th>
              When the letter 'r' is between vowels and its sound is{" "}
              <b>strong</b> → 'rr'
            </th>
          </tr>
          <tr style={usedRules.includes(2)?{backgroundColor:colorRule}:{}}>
            <th>Cuando la 'r' viene después de 'l','n' o 's', es <b>fuerte</b>  </th>
            <th>When the 'r' comes after 'l', 'n', or 's', it's <b>strong</b> </th>
          </tr>
                </tbody>
        </table>
        
      )
  const softRules=( <table className={style.rulesTable}>
    <tbody>
          <tr>
             <th
              rowSpan={3}
              style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
              >
              SOFT
            </th>
          </tr>
          <tr style={usedRules.includes(3)?{backgroundColor:colorRule}:{}}>
           
            <th>
              Cuando hay una sola 'r' y no está al pricipio de la palabra es
              siempre <b>débil</b>
            </th>
            <th>
              When there is a single 'r' and it is not at the beginning of the
              word, its sound is always <b>soft</b>
            </th>
          </tr>
           <tr style={usedRules.includes(4)?{backgroundColor:colorRule}:{}}>
            
            <th>
              Cuando hay una sola 'r' esta entre vocales, es
              siempre <b>débil</b>
            </th>
            <th>
              When there is a single 'r' between vowels, it is always <b>soft</b>
            </th>
          </tr>
    </tbody>
        
        </table>
        )
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
        {strongRules}
         {softRules}
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
