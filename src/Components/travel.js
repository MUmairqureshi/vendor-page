import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

import AddIcon from "@material-ui/icons/Add";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import "./trvl.css";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-32",
    width: "100%",
    color: "pink",
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

import img2 from "./img/travel.jpg";

export function Travel({
  handleNext,
  bedroom,
  setDes,
  setBedroom,

  setRadio1,
  handleBack,
  activeStep,
  setSelected2,
  selected2,
  options2,
  step,
}) {
  const classes = useStyles();
  const submit = () => {
    handleNext();
  };

  const submitback = () => {
    handleBack();
  };
  const addnumberofbed = (e) => {
    setBedroom(bedroom + 1);
  };
  console.log(bedroom);
  const removenumber = (e) => {
    setBedroom(bedroom - 1);
  };
  return (
    <div>
      <div>
        <div className="flex w-full   h-70 ">
          <div className="flex-1 h-full max-w-7xl mx-auto bg-white   ">
            <div className="flex flex-col md:flex-row">
              <div className="h-32 md:h-auto  hidden md:grid   w-1/2">
                <img
                  className="object-cover  w-full h-[530px]"
                  src={img2}
                  alt="img"
                />
                <button className="text-white bg-pink-800 p-4 w-full text-4xl md:text-2xl font-bold ">
                  <h1>Travel</h1>
                </button>
              </div>

              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full md:mt-[-68px]">
                  {" "}
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
                    Chose Your Hotel{" "}
                  </h3>
                  <form onSubmit={submit}>
                    <div className="md:flex gap-8">
                      <div className=" mb-6 gap-8   ">
                        <div className="mb-8 mt-8">
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
                              value={selected2}
                              onChange={(e) => setSelected2(e.target.value)}
                              aria-label=".form-select-lg example"
                            >
                              {/* <option selected>Open this select menu</option> */}
                              {options2.map((value) => (
                                <option value={value} key={value}>
                                  {value}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2   ">
                            {" "}
                            Would you like meal ?
                          </label>

                          <div class="flex gap-6  ">
                            <div class="mt-2">
                              <label class="inline-flex items-center">
                                <input
                                  type="radio"
                                  class="form-radio"
                                  value="yes"
                                  onChange={(e) => {
                                    setRadio1(e.target.value);
                                  }}
                                  name="accountType1"
                                />
                                <span class="ml-2">Yes</span>
                              </label>
                              <label class="inline-flex items-center ml-6">
                                <input
                                  type="radio"
                                  class="form-radio"
                                  value="no"
                                  onChange={(e) => {
                                    setRadio1(e.target.value);
                                  }}
                                  name="accountType1"
                                />
                                <span class="ml-2">No</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6 gap-8 ">
                        {selected2.trim() !== "No Hotel" && (
                          <div className=" relative  mb-8 mt-8 focus-within:text-gray-600 block">
                            <label className="block mb-2   text-xs md:text-sm">
                              {" "}
                              Number of bedrooms?
                            </label>
                            <div className="flex bg-gray-100 border-rounded   ">
                              <AddIcon
                                onClick={addnumberofbed}
                                className="mt-2 rounded ml-2  "
                              />

                              <input
                                className="pg
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
                                value={bedroom}
                              />
                              <RemoveIcon
                                className="mt-2"
                                onClick={removenumber}
                              />
                            </div>
                          </div>
                        )}

                     
                      </div>
                    </div>
 
                    <div>
                      <div className="  relative   focus-within:text-gray-600 block">
                        <label className="flex   md:flex   mb-2 text-sm">
                          {" "}
                          Describ your package details{" "}
                        </label>
                        <textarea
                          class="w-80 h-20 p-2     focus:outline-none bg-gray-100 focus:ring-1 border
                          rounded-md
                          focus:border-blue-400"
                          name="comment"
                          onChange={(e) => setDes(e.target.value)}
                          placeholder=""
                        ></textarea>

                        {/* <textarea
                          type="text"
                          className=" md:flex flex    

 
bg-gray-100
text-sm
border
rounded-md
focus:border-blue-400
focus:outline-none
focus:ring-1
focus:ring-blue-600
"
                          required
                          onChange={(e) => setDes(e.target.value)}
                        ></textarea> */}
                      </div>
                    </div>{" "}
                    {/* </div> */}
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
                     
                    leading-5 border-l-4 font-bold
                    text-center  
                    transition-colors text-white
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
