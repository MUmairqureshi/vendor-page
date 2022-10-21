import React, { useState } from 'react'
import { Form } from './form'
import { Travel } from './travel'
import { Desig } from './desig'
import { Default } from './default'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    root: {
        width: '40%',
        marginLeft: '55%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
function getSteps() {
    return [' Basic Information', 'Designation', 'Hotel'];
}

export function Stepperd() {
    const options = [" Single trip", "Family trip", "Group trip", "Couple trip"];
    const options1 = [" Single trip", "Family trip", "Group trip", "Couple trip"];
    const [selected, setSelected] = useState(options[0]);
    const [selected1, setSelected1] = useState(options1[0]);
    const options2 = [ "No Hotel", "  1 star Hotel  ", "2 star Hotel ", "3 star Hotel", "4 star Hotel" , "5 star Hotel"];
    const [selected2, setSelected2] = useState(options2[0]);
    const [tasks, setTasks] = useState([
]);
    const [tbudget, setTotalbudget] = useState()
    console.log(tbudget)
    const [child, setChild] = useState(0);
    const [bedroom, setBedroom] = useState(0);
    const classes = useStyles();
    const [pickuplist, setPickuplist] = useState(" ")
    const [des, setDes] = useState(" ")
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState(new Set());
    const [adult, SetAdult] = useState(0);
    const steps = getSteps();

    const [radio, setRadio] = useState('false')
    const [radio1, setRadio1] = useState('false')
    const [radio2, setRadio2] = useState('false')
    const [radio3, setRadio3] = useState('false')
    const handleNext = () => {
        console.log("Clicking Next")
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(1);
    };


    // const handleComplete = () => {
    //     const newCompleted = new Set(completed);
    //     newCompleted.add(activeStep);
    //     setCompleted(newCompleted);

    //     if (completed.size !== totalSteps() - skippedSteps()) {
    //         handleNext();
    //     }
    // };
    const getstepper = (stapper) => {
        switch (stapper) {
            case 0:
                return <Form handleReset={handleReset} setRadio3={setRadio3} setSelected={setSelected} pickuplist={pickuplist} setPickuplist={setPickuplist} options={options} selected={selected} tbudget={tbudget} setTotalbudget={setTotalbudget}
                    child={child} setChild={setChild} SetAdult={SetAdult} adult={adult} handleBack={handleBack} handleNext={handleNext} step={steps} activeStep={activeStep} />;
            case 1:
                return <Desig handleNext={handleNext} options1={options1} selected1={selected1} setSelected1={setSelected1} setRadio={setRadio} radio={radio} tasks={tasks} setTasks={setTasks} handleBack={handleBack} step={steps} activeStep={activeStep} />;
            case 2:
                return <Travel tasks={tasks} setDes={setDes} des={des} setBedroom={setBedroom} radio1={radio1} radio2={radio2} radio3={radio3} setRadio1={setRadio1} setRadio2={setRadio2} setRadio3={setRadio3} bedroom={bedroom} handleNext={handleNext} selected2={selected2} setSelected2={setSelected2} options2={options2} handleBack={handleBack} step={steps} activeStep={activeStep} />
            default:
                return (

                    <div className='w-full h-full  ml-40 mt-14 gap-4 text-xl'> <p>Number of child travelers :  {child} </p>
                         <p> Number of Adult : {adult} </p>
                            <p> Tour Type :{selected} </p>
                            <p>Pick Up : {pickuplist} </p><p> Ypur Total Budget : {tbudget}</p>
                            <p>Destination  :    {tasks.map((task, index) => (
<p> {task.title}  </p>
 

    

                            ))}</p>
<p> you like hotel : { radio}</p>
<p> Tour Type     : { selected1}</p>
<p> Number of bedroom: {bedroom}</p>
<p>Would you like hotel{radio1}</p>
<p>Would you like hotel{radio1}</p>
<p>Would you like hotel ?
{radio2}</p>
<p>Which transtort method ? {radio3 }</p>
<p>Describ your package details {des }</p>
 


                    </div>)

        }
    }
    return (
        <div>
            <div>


                <div  >

                    <div className=' '>
                        <div   >{getstepper(activeStep, handleNext)}</div>

                    </div>

                </div>
            </div>
        </div>
    )
}