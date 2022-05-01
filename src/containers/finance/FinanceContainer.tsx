import React, { useEffect, useState } from "react";

type formProps = {
    principle : string,
    time : string,
    ROI : string,
    interest : string,
}

const FinanceContainer = () => {
    const [date, setDate]: [Date, React.Dispatch<React.SetStateAction<Date>>] = useState(new Date());

    const [simpIntForm, setSimpIntForm] : [formProps, React.Dispatch<React.SetStateAction<formProps>>] = useState({
        principle : "",
        time : "",
        ROI : "",
        interest : "",
    });

    const [compIntForm, setCompIntForm]  : [formProps, React.Dispatch<React.SetStateAction<formProps>>] = useState({
        principle : "",
        time : "",
        ROI : "",
        interest : ""
    });

    const simpIntCH = (e : React.ChangeEvent<HTMLInputElement>, key : string) : void => {
        const value = e.target.value;
        setSimpIntForm({
            ...simpIntForm,
            [key] : value
        });
        console.log(value);
    }

    const simpBtnSH : React.MouseEventHandler<HTMLButtonElement>= (e : any) => {
        e.preventDefault();
        console.log(e);
        
        const simpleInterst = parseInt(simpIntForm.principle) + parseInt(simpIntForm.principle) * parseInt(simpIntForm.time) * parseFloat(simpIntForm.ROI) - parseInt(simpIntForm.principle);
        setSimpIntForm({
            principle : "",
            time : "",
            ROI : "",
            interest: simpleInterst.toString(),
        }, );
    }

    const compIntCH = (e : React.ChangeEvent<HTMLInputElement>, key: string) : void => {
        const value = e.target.value;
        setCompIntForm({
            ...compIntForm,
            [key] : value
        });
        console.log(value);
    }

    const compBtnSH : React.MouseEventHandler<HTMLButtonElement> = (e : any) => {
        e.preventDefault();
        console.log(e);
        console.log(compIntForm);

        var compoundInterest = parseInt(compIntForm.principle) * (1 + parseFloat(compIntForm.ROI)) ** parseInt(compIntForm.time) - parseInt(compIntForm.principle);
        console.log(compoundInterest);

        setCompIntForm({
            principle: "",
            time: "",
            ROI: "",
            interest: compoundInterest.toString()
        });

        console.log(compIntForm);
    }

    // useEffect( ()=> {
    //     console.log(compIntForm);
    //     return;
    // }, [simpIntForm.interest, compIntForm.interest]);

    return (
        <div id="FinanceContainer">
            <header>
                Simple Interest vs Compound Interest <br/> 
                Today's Date : {date.toISOString().split("T")[0]} 
            </header>
            <main>
                <div className="InterestContainer">
                    <div>
                        <form>
                            <input  name="simpPrinciple" onChange = {(e)=>simpIntCH(e, "principle")} value = {simpIntForm.principle} type="text" placeholder="Enter Principle" />
                            <input  name="simpTime"      onChange = {(e)=>simpIntCH(e, "time")}      value = {simpIntForm.time}      type="text" placeholder="Enter Time" />
                            <input  name="simpROI"       onChange = {(e)=>simpIntCH(e, "ROI")}       value = {simpIntForm.ROI}       type="text" placeholder="Enter Rate of Interest" />   
                            <button type="submit"        onClick  = {simpBtnSH}>Calculate</button>             
                        </form>
                    </div>
                    <div>
                    Simple Interest : {  simpIntForm.interest == '' || simpIntForm.interest === 'NaN' ? 0 : simpIntForm.interest}
                        {/* <table>
                            <tr></tr>
                            <tbody></tbody>
                        </table> */}
                    </div>
                </div>
                <div className="InterestContainer">
                    <div>
                        <form>
                            <input  name="compPrinciple" onChange = {(e)=>compIntCH(e, "principle")} value = {compIntForm.principle} type="text" placeholder="Enter Principle" />
                            <input  name="compTime"      onChange = {(e)=>compIntCH(e, "time")}      value = {compIntForm.time}      type="text" placeholder="Enter Time" />
                            <input  name="compROI"       onChange = {(e)=>compIntCH(e, "ROI")}       value = {compIntForm.ROI}       type="text" placeholder="Enter Rate of Interest" />   
                            <button type="submit"        onClick  = {compBtnSH} >Calculate</button>             
                        </form>
                    </div>
                    <div>
                        Compound Interest : {compIntForm.interest == '' || compIntForm.interest == 'NaN' ? 0 : compIntForm.interest}
                        {/* <table>
                            <tr></tr>
                            <tbody></tbody>
                        </table> */}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FinanceContainer;