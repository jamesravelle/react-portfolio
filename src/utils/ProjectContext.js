import React from "react";

const ProjectContext = React.createContext({
    title: "",
    description: "",
    githubURL: "",
    liveURL: ""
});

export default ProjectContext;
