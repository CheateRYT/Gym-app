import React, { useState } from "react"; 
import { exercises } from "./muscleExercises"; 
import ExercisesDesc from "./exercisesDescr"; 
import ExercisesSelection from "./exercisesSelection";
 
const Exercises_block = () => { 
  const [selectedOption, setSelectedOption] = useState(""); 
  const [selectedSelect, setSelectedSelect] = useState(""); 
  const handleSelectChange = (event, selectedSelect) => { 
    setSelectedOption(event.target.value);
    setSelectedSelect(selectedSelect);
  }; 
 
  const chestExercises = exercises.chest; 
  const backExercises = exercises.back; 
  const legsExercises = exercises.legs; 
  const armsExercises = exercises.arms; 
  const shouldersExercises = exercises.shoulders; 
  const othersExercises = exercises.others; 
 
  const getTitle = (section, selectedOption) => { 
    if (selectedOption) { 
      return section[selectedOption].name; 
    } 
    return "Упражнения"; 
  }; 
 
  return ( 
    <div className="container"> 
      <div className="exercises"> 
        <h2 className="exercises__title">{
        getTitle(selectedSelect, selectedOption)}
        </h2> 
        <div className="muscle-groups"> 
          {selectedOption ? null : ( <ExercisesSelection exercise={chestExercises} name={"Грудь"} handleSelectChange={handleSelectChange} />
          )} 
          {selectedOption ? null : ( <ExercisesSelection exercise={backExercises} name={"Спина"} handleSelectChange={handleSelectChange}/>
          )} 
          {selectedOption ? null : ( <ExercisesSelection exercise={legsExercises} name={"Ноги"} handleSelectChange={handleSelectChange}/>
          )} 
          {selectedOption ? null : ( <ExercisesSelection exercise={armsExercises} name={"Руки"} handleSelectChange={handleSelectChange}/>
          )} 
          {selectedOption ? null : ( <ExercisesSelection exercise={shouldersExercises} name={"Плечи"} handleSelectChange={handleSelectChange}/>

          )} 
          {selectedOption ? null : ( <ExercisesSelection exercise={othersExercises} name={"Другое"} handleSelectChange={handleSelectChange}/>
          )} 
        </div> 
      </div> 
    </div> 
  ); 
};
export default Exercises_block;
