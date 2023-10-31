 const ExercisesSelection = (props) => {
  return ( 
    <div className="muscle-group"> 
      <span className="muscle-group__title">{props.name}</span> 
      <select 
        className="muscle-group__selector" 
        name="" 
        id="cusSelectbox" 
        onChange={(event) => props.handleSelectChange(event,props.exercise)} 
      > 
        <option value="Select">Выбрать</option> 
        {Object.keys(props.exercise).map((key) => ( 
          <option key={key} value={key}> 
            {props.exercise[key].name} 
          </option> 
        ))} 
      </select> 
    </div> 
  ) 
 }
export default ExercisesSelection;