import { useState } from "react";

//importing component
import Project from "./components/Project";

interface ProjectType {
  topic: string;
  description: string;
  id: number;
}
type UserArray = ProjectType[];

//importing json file
import data from "./assets/projects_data.json";
const projects: UserArray = data;

import "./App.css";

const App = () => {
  return (
    <div className="App">
      {projects.map(({ description, topic, id }) => (
        <Project description={description} topic={topic} key={id} />
      ))}
    </div>
  );
};

export default App;
