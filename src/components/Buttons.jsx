import style from "./styling.css"
import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  const orbitBtns = displaySats.map((sat, id) => {  
    return (      
        <button onClick={() => filterByType(sat)} key={id}> {sat} Orbit</button>
    );
  })

  const divBtn = (
    <div className={style.flexContainer}>
      {orbitBtns}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  )

  return divBtn;
};  

export default Buttons;