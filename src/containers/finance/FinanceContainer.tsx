import React, { useEffect, useState } from "react";

type formProps = {
    principle : string,
    year : string,
    ROI : string,
    interest : string,
}

const FinanceContainer = () => {
    const [date, setDate]: [Date, React.Dispatch<React.SetStateAction<Date>>] = useState(new Date());
    
    const initialForm = {
        principle : "",
        year : "",
        ROI : "",
        interest : "",
    }
    const [simpIntForm, setSimpIntForm] : [formProps, React.Dispatch<React.SetStateAction<formProps>>] = useState(initialForm);
    const [compIntForm, setCompIntForm]  : [formProps, React.Dispatch<React.SetStateAction<formProps>>] = useState(initialForm);

    const simpIntCH = (e : React.ChangeEvent<HTMLInputElement>, key : string) : void => {
        const value = e.target.value;
        setSimpIntForm({
            ...simpIntForm,
            [key] : value,
        });
    }

    const simpBtnSH : React.MouseEventHandler<HTMLButtonElement>= (e : any) => {
        e.preventDefault();

        const simpleInterst = Math.floor(parseInt(simpIntForm.principle) + parseInt(simpIntForm.principle) * parseInt(simpIntForm.year) * parseFloat(simpIntForm.ROI) - parseInt(simpIntForm.principle));
        setSimpIntForm({
            ...simpIntForm,
            interest: simpleInterst.toString(),
        }, );
    }

    const compIntCH = (e : React.ChangeEvent<HTMLInputElement>, key: string) : void => {
        const value = e.target.value;
        if (key === 'year' && parseInt(value) > 100)  {
            alert("cannot calculate over 100 years");
            return;
        }
        setCompIntForm({
            ...compIntForm,
            [key] : value,
        });
    }

    const compBtnSH : React.MouseEventHandler<HTMLButtonElement> = (e : any) => {
        e.preventDefault();

        var compoundInterest = Math.floor(parseInt(compIntForm.principle) * (1 + parseFloat(compIntForm.ROI)) ** (parseInt(compIntForm.year)) - parseInt(compIntForm.principle));

        setCompIntForm({
            ...compIntForm,
            interest: compoundInterest.toString()
        });
    }

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
                            <input  name="simpTime"      onChange = {(e)=>simpIntCH(e, "year")}      value = {simpIntForm.year}      type="text" placeholder="Enter Year" />
                            <input  name="simpROI"       onChange = {(e)=>simpIntCH(e, "ROI")}       value = {simpIntForm.ROI}       type="text" placeholder="Enter Rate of Interest" />   
                            <button type="submit"        onClick  = {simpBtnSH}>Calculate</button>             
                        </form>
                    </div>
                    <div>
                        Simple Interest : {  simpIntForm.interest == '' || simpIntForm.interest === 'NaN' ? 0 : simpIntForm.interest}
                    </div>
                </div>
                <div className="InterestContainer">
                    <div>
                        <form>
                            <input  name="compPrinciple" onChange = {(e)=>compIntCH(e, "principle")} value = {compIntForm.principle} type="text" placeholder="Enter Principle" />
                            <input  name="compTime"      onChange = {(e)=>compIntCH(e, "year")}      value = {compIntForm.year}      type="text" placeholder="Enter Year" />
                            <input  name="compROI"       onChange = {(e)=>compIntCH(e, "ROI")}       value = {compIntForm.ROI}       type="text" placeholder="Enter Rate of Interest" />   
                            <button type="submit"        onClick  = {compBtnSH} >Calculate</button>             
                        </form>
                    </div>
                    <div>
                        <div>One Day Compound Interest           : {compIntForm.interest == '' || compIntForm.interest == 'NaN' ? 0 : Math.floor(parseInt(compIntForm.principle)  * (1 + parseFloat(compIntForm.ROI) / 365) ** (parseInt(compIntForm.year) / (365 * parseInt(compIntForm.year)) * 365)) - parseInt(compIntForm.principle)}</div>
                        <hr/>
                        <div>Yearly Compound Interest            : {compIntForm.interest == '' || compIntForm.interest == 'NaN' ? 0 : compIntForm.interest}</div>
                        <div>Quarterly Compound Interest         : {compIntForm.interest == '' || compIntForm.interest == 'NaN' ? 0 : Math.floor(parseInt(compIntForm.principle)  * (1 + parseFloat(compIntForm.ROI) / 4) ** (parseInt(compIntForm.year) * 4)) - parseInt(compIntForm.principle)}</div>
                        <div>Monthly Compound Interest           : {compIntForm.interest == '' || compIntForm.interest == 'NaN' ? 0 : Math.floor(parseInt(compIntForm.principle)  * (1 + parseFloat(compIntForm.ROI) / 12) ** (parseInt(compIntForm.year) * 12)) - parseInt(compIntForm.principle)}</div>
                        <div>Daily Compound Interest             : {compIntForm.interest == '' || compIntForm.interest == 'NaN' ? 0 : Math.floor(parseInt(compIntForm.principle)  * (1 + parseFloat(compIntForm.ROI) / 365) ** (parseInt(compIntForm.year) * 365)) - parseInt(compIntForm.principle)}</div>
                        <hr/>
                        <div>Yearly Compound         : {compIntForm.year != ""     && Math.floor(parseInt(compIntForm.principle)  * (1 + parseFloat(compIntForm.ROI) / 1) ** (parseInt(compIntForm.year) * 1))}</div>
                        <div>Quarterly Compound      : {compIntForm.year != ""     && Math.floor(parseInt(compIntForm.principle)  * (1 + parseFloat(compIntForm.ROI) / 4) ** (parseInt(compIntForm.year) * 4))}</div>
                        <div>Monthly Compound        : {compIntForm.year != ""     && Math.floor(parseInt(compIntForm.principle)  * (1 + parseFloat(compIntForm.ROI) / 12) ** (parseInt(compIntForm.year) * 12))}</div>
                        <div>Daily Compound (공식)    : {compIntForm.year != ""     && Math.floor(parseInt(compIntForm.principle)  * (1 + parseFloat(compIntForm.ROI) / 365) ** (parseInt(compIntForm.year) * 365))}</div>
                        <div>Daily Compound (reduce) : {compIntForm.year != ""     && Math.floor(Array(parseInt(compIntForm.year) * 365).fill(0).map( (v: any, idx : number) => idx + 1).reduce((_prevValue :number) => _prevValue + _prevValue * (parseFloat(compIntForm.ROI) / 365), parseInt(compIntForm.principle)))}</div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FinanceContainer;