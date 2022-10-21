import "./form.css";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import img1 from "./img/basic.jpg";

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RemoveIcon from "@material-ui/icons/Remove";
import RoomIcon from "@material-ui/icons/Room";
import AddIcon from "@material-ui/icons/Add";

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
export function Form({
  handleNext,
  handleBack,
  selected,
  setSelected,
  setRadio3,
  options,
  setPickuplist, 
  setTotalbudget,
  child,
  setChild,
  SetAdult,
  adult,
  activeStep,
  step,
}) {
 
 

  const totaladult = (e) => {
    SetAdult(adult + 1);
  };
  const totalchild = (e) => {
    setChild(child + 1);
  };
  const removechild = (e) => {
    setChild(child - 1);
  };
  const removeadult = (e) => {
    SetAdult(adult - 1);
  };
  const submit = () => {
    handleNext();
  };
  
 
  const classes = useStyles();
  return (
    <div>
      <div className="flex w-full   h-70 ">
        <div className="flex-1 h-full max-w-7xl mx-auto bg-white   ">
          <div className="flex flex-col md:flex-row">
            <div className="  md:h-auto  hidden md:grid   w-1/2">
              <img
                className="object-cover  w-full h-[530px]"
                src={img1}
                alt="img"
              />
              <button className="text-white bg-pink-800 p-4 w-full text-4xl md:text-2xl mb-0 font-bold ">
                <h1>Basic</h1>
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
                  Add Basic information
                </h3>
                <form onSubmit={submit}>
                  <div className="md:flex gap-8">
                    <div className="    md:gap-14    ">
                       <div className="mb-6 relative   focus-within:text-gray-600 block">
                        <div>
                          <label className="flex   md:flex   mb-2 text-sm">
                            {" "}
                            Pick Up{" "}
                          </label>
                          <div className="flex">
                            <RoomIcon className="pointer-events-none w-8 h-8 absolute top-2/3 transform -translate-y-1/2 left-3" />

                            <input
                              type="text"
                              onChange={(ev) => setPickuplist(ev.target.value)}
                              className="pn
                    w-full
                    p-4.5
                    px-8  
                    py-3
                    text-sm
                    border
                    md:flex flex
                    bg-gray-100
                    rounded-md
                    focus:border-blue-400
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-600 required
                  "
                              placeholder="Pick Up"
                              required
                            />
                          </div>
                        </div>
                        <div></div>
                      </div>

                      <div className="mb-6 relative   focus-within:text-gray-600 block">
                        <label className="block mb-2   text-xs md:text-sm">
                          {" "}
                          Number of adult travelers?
                        </label>
                        
                        <div className="flex bg-gray-100 border-rounded   ">
                          <AddIcon
                            onClick={totaladult}
                            className="mt-2 rounded ml-2  "
                          />
                          <input
                            className="pg
                    w-full
                    px-4
                    py-3 
                    text-sm
                    bg-gray-100
                    border
                    rounded-md
                    focus:border-blue-400
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-600
                  "
                            value={adult}
                          />
                          <RemoveIcon className="mt-2" onClick={removeadult} />
                        </div>
                      </div>
                    </div>

                    <div className="    md:gap-14    ">
                      <div classNameName=" flex ">
                        <div className="mb-6 relative   focus-within:text-gray-600 block">
                          <label className="            md:text-sm  flex mb-2  md:flex  text-sm">
                            {" "}
                            What is your budget ?{" "}
                          </label>
                          <AttachMoneyIcon className="pointer-events-none w-8 h-8 absolute top-2/3 transform -translate-y-1/2 left-3" />
                          <input
                            onChange={(ev) => setTotalbudget(ev.target.value)}
                            className="pn md:flex flex
                    w-full
                    px-8  
                    py-3
                    bg-gray-100
                    text-sm
                    border
                    rounded-md
                    focus:border-blue-400
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-600
                  "
                            placeholder="What is your budget ?"
                          />
                        </div>
                      </div>
                      <div className=" relative   focus-within:text-gray-600 block">
                        <label className="block mb-2   text-xs md:text-sm">
                          {" "}
                          Number of child travelers?
                        </label>
                        <div className="flex bg-gray-100 border-rounded   ">
                          <AddIcon
                            onClick={totalchild}
                            className="mt-2 rounded ml-2  "
                          />

                          <input
                            className="pg
                                            w-full
                                              
                                            py-3
                                            bg-gray-100
                                            text-sm
                                            border
                                            rounded-md
                                            focus:border-blue-400
                                            focus:outline-none
                                            focus:ring-1
                                            focus:ring-blue-600
                    
                    
                  "
                             
                            value={child}
                          />
                          <RemoveIcon className="mt-2" onClick={removechild} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex gap-16">
                    <div className="mb-4">
                      <label
                        for="validationTooltip02"
                        className="block mb-2     text-sm"
                      >
                        {" "}
                        Tour Type{" "}
                      </label>
                      <select
                        required
                        placeholder="Open this select menu"
                        className="

 
   md:px-8   w-full
                   md: py-3
                   
md:w-[200px]
bg-gray-100
text-sm
border
rounded-md
focus:border-blue-400
focus:outline-none
focus:ring-1
focus:ring-blue-600


                    flex
              
                  "
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        aria-label=".form-select-lg example"
                      >
                        {/* <option selected>Open this select menu</option> */}
                        {options.map((value) => (
                          <option value={value} key={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2   ">
                        {" "}
                        Which transtort method ?
                      </label>

                      <div class="flex gap-6  ">
                        <div class="mt-2">
                          <label class="inline-flex items-center">
                            <input
                              type="radio"
                              class="form-radio"
                              value="Plain"
                              onChange={(e) => {
                                setRadio3(e.target.value);
                              }}
                              name="accountType1"
                            />
                            <span class="ml-2">Plain</span>
                          </label>
                          <label class="inline-flex items-center ml-6">
                            <input
                              type="radio"
                              class="form-radio"
                              value="Bus"
                              onChange={(e) => {
                                setRadio3(e.target.value);
                              }}
                              name="accountType1"
                            />
                            <span class="ml-2">Bus</span>
                          </label>
                          <label class="inline-flex items-center ml-6">
                            <input
                              type="radio"
                              class="form-radio"
                              value="Car"
                              onChange={(e) => {
                                setRadio3(e.target.value);
                              }}
                              name="accountType1"
                            />
                            <span class="ml-2">Car</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
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
                    bg-pink-900
                    duration-150
                     text-white
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
  );
}
