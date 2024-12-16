
import { createContext, useState, useContext } from 'react';


const ProgressContext = createContext();


export const ProgressProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const nextStep = () => {
        if (step < 5) setStep(step + 1);
        console.log(step)
    };
    const prevStep = () => {
        if (step > 1) setStep(step - 1);
        console.log(step)
    };

    const progress = ((step - 1) / 4) * 100;

    return (
        <ProgressContext.Provider value={{ step, setStep, nextStep, prevStep, progress }}>
            {children}
        </ProgressContext.Provider>
    );
};


export const useProgress = () => useContext(ProgressContext);
