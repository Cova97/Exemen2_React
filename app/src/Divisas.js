import React, {useEffect, useState} from "react";

const Divisas = () => {
    const[num1, setNum1] = useState("mnx");
    const[num2, setNum2] = useState("usd");
    const[value, setValue] = useState(0);
    const[result, setResult] = useState(0);
    
    const onChange = (e) => {
        if(e.target.name === "num1"){
            setNum1(e.target.value);
        }
        else if(e.target.name === "num2"){
            setNum2(e.target.value)
        }
        else if(e.target.name === "value"){
            setValue(e.target.value)
        }
    };

    useEffect(() =>{
        if(num1 === "mnx"){
            if(num2 === "usd"){
                setResult(value*0.05)
            }
        }
        else if(num1 === "usd"){
            if(num2 === "mnx"){
                setResult(value*19.93)
            }
        }
    })

    return(
        <>
            <h1>Conversion de Divisas: {result}</h1>
            <div>
                <div>
                    <input type="text" name="value" id="value" value={value} onChange={onChange}></input>
                </div>
                <div>
                    <select id="num1" name="num1" value={num1} onChange={onChange}>
                        <option value="mnx">MNX</option>
                        <option value="usd">USD</option>
                    </select>
                </div>
                <div>
                    <select id="num2" name="num2" value={num2} onChange={onChange}>
                        <option value="mnx">MNX</option>
                        <option value="usd">USD</option>
                    </select>
                </div>
            </div>
        </>
    )
};

export default Divisas;