import React, { useState, useEffect } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import "./desg.css";

import AddIcon from "@material-ui/icons/Add";

import RoomIcon from "@material-ui/icons/Room";

import { makeStyles } from "@material-ui/core/styles";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "pink",
    marginBottom: "4%",
  },
  backButton: {
    marginRight: theme.spacing(1),
    color: "pink-800",
    backgroundColor: "pink-800",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: "pink-800",
    backgroundColor: "pink-800",
  },
  "&$active": {
    color: "pink-800",
    backgroundColor: "pink-800",
  },
  active: {
    color: "pink-800",
    backgroundColor: "pink-800",
  },
  completed: {
    color: "pink-800",
    backgroundColor: "pink-800",
  },
}));
import img2 from "./img/desig.jpg";
export function Desig({
  handleNext,
  handleBack,
  setTasks, 
  selected1, 
  radio,
  tasks,
  activeStep,
  step,
}) {
  const [day, setsetDay] = useState(0);
  const [staylist, setstaylist] = useState(" ");

  const classes = useStyles();

  console.log(day);
 
 
  const submit = () => {
    handleNext();
  };
  const submitback = () => {
    handleBack();
  };

  console.log(selected1);
  console.log(radio);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };
  const [tasksRemaining, setTasksRemaining] = useState(0);
  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  return (
    <div>
      <div>
        <div className="flex w-full   h-full ">
          <div className="flex-1 h-full max-w-7xl mx-auto bg-white   ">
            <div className="flex flex-col md:flex-row">
              <div className="h-32 md:h-auto  hidden md:grid   w-1/2">
                <img
                  className="object-cover  w-full h-[530px]"
                  src={img2}
                  alt="img"
                />
                <button className="text-white   bg-pink-800 p-4 w-full text-4xl md:text-2xl font-bold ">
                  <h1>Destination</h1>
                </button>
              </div>

              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full">
                  <Stepper
                    className={classes.root}
                    activeStep={activeStep}
                    alternativeLabel
                  >
                    {step.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  <h3 className="mb-4 md:text-3xl text-2xl text-center font-bold text-green-800">
                    {" "}
                    Chose Your Destination{" "}
                  </h3>
                  <form onSubmit={submit}>
                    <div className="   ">
                      <div className="    md:gap-14   mb-2">
                        <div className="items-center content-center justify-center   relative  flex focus-within:text-gray-600">
                          {/* <RoomIcon className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 ml-27" /> */}
                          <input
                            type="text"
                            onChange={(e) => setValue(e.target.value)}
                            className=" 
                    w-50 items-center content-center justify-center 
                    px-8  
                    py-3
                    text-sm
                    border
                    md:flex  
                    bg-gray-100
                    rounded-md
                    focus:border-blue-400
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-600
                  "
                            value={value}
                            placeholder="eg:  Rakaposhi"
                          />
                          <button
                            className="bg-pink-800 p-2 flex text-white rounded"
                            onClick={handleSubmit}
                          >
                            {" "}
                            <AddIcon />
                          </button>
                        </div>
                        <div className="overflow-y-auto 
                        
                        items-center content-center justify-center   ml-auto mr-auto  ">
                          {tasks.map((task, index) => (
                            <ul className=" ml-auto mr-auto p-2  ">
                              <div className="flex  items-center p-2  justify-between   ml-auto mr-auto 
                    w-48  content-center    bg-gray-100  ">
                            
                                <span className="ml-4"> {task.title}</span>
                                <span className="items-end">
                                  <DeleteIcon  
                                    onClick={removeTask}
                                    className="w-2 h-4 justify-end text-pink-500 items-end  "
                                  />{" "}
                                </span>
                            
                              </div>
                            </ul>
                          ))}
                        </div>
                        {staylist}
                      </div>

                      <div className=" mb-6 gap-2 md:gap-14   ">
                        <div classNameName="flex "></div>
                      </div>
                    </div>
                    <div className="flex gap-4 justify-end">
                      <button
                        onClick={submitback}
                        className="
                        px-6
                        py-2
                        mt-4
                        text-sm
                         
                        leading-5 border-l-4 font-bold
                        text-center  
                        transition-colors text-black
                        border-pink-800
                        duration-150
                         
                        border border-transparent
                        rounded-lg
                   
                        focus:outline-none
                  "
                        href="#"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="
                    px-6
                    py-2
                    mt-4
                    text-sm
                    font-medium
                    leading-5
                    text-center  
                    transition-colors
                    text-white
                    bg-pink-900
                    duration-150
                     
                    border border-transparent
                    rounded-lg
               
                    focus:outline-none
                  "
                        href="#"
                      >
                        Next
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
