import React from "react";
import { Component } from "react";
import { exercises } from "./muscleExercises";


class Exercises_Current extends Component {
  render() {
    console.log(exercises);
    return (
      <div><h3>{exercises.name}</h3></div>
    );
  }
}

export default Exercises_Current;
