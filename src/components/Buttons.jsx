import style from "./styling.css"
import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  const btns = displaySats.map((sat, id) => {  
    return (      
        <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button>
    );
  })

  const divBtn = (
    <div className={style.flexContainer}>
      {btns}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  )

  return divBtn;
};  

export default Buttons;