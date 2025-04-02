import {useState} from 'react';
import Logo from './assets/investment-calculator-logo.png'
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App () {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            }
        });
    }

    return (
        <>
            <div id="header">
                <img src={Logo} alt="Investment Calculator Logo" />
                <h1>Investment Calculator</h1>
            </div>
            <UserInput userInput={userInput} onChange={handleChange} />
            {!inputIsValid && (
                <p className="center">Enter a duration greater than zero.</p>
            )}
            {inputIsValid && <Results input={userInput} />}
        </>

    );
}

export default App;