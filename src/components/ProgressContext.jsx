
import { createContext, useState, useContext } from 'react';


const ProgressContext = createContext();


export const ProgressProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };
    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const progress = (step / 4) * 100;

    return (
        <ProgressContext.Provider value={{ step, setStep, nextStep, prevStep, progress }}>
            {children}
        </ProgressContext.Provider>
    );
};


export const useProgress = () => useContext(ProgressContext);
