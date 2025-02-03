import { useState } from "react";
import "./styles.css"
import * as CONFIG from "../../../../config";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function Index() {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(5);
    const [term, setTerm] = useState(5);

    const calculateEMI = () => {
        const monthlyRate = interestRate / 100 / 12;
        const totalMonths = term * 12;
        const emi =
            (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1);
        return emi.toFixed(2);
    };

    const emi = calculateEMI();
    const totalPayment = (emi * term * 12).toFixed(2);
    const totalInterest = (totalPayment - loanAmount).toFixed(2);


    const pieData = {
        labels: ["Principal Amount", "Total Interest"],
        datasets: [
            {
                data: [loanAmount, totalInterest],
                backgroundColor: ["#EFF5FA", "#33638b"],
                hoverBackgroundColor: ["#d7e0e7", "#d7e0e7"],
            },
        ],
    };

    return (
        <div className="emiCalculator py-[80px]">
            <div className="xl:max-w-[85%] max-w-[100%] m-auto px-[15px]">
                <div className="flex flex-wrap justify-between">
                    <div className="left_side lg:w-[37%]">
                        <div className="bg-[#EFF5FA] p-[25px] rounded-[5px] lg:mb-[15px] mb-[25px]">
                            <div className="flex justify-between items-center mb-4">
                                <label className="block midlandfontmedium tracking-[4px] uppercase text-[8px]">Loan Amount</label>
                                <input
                                    type="number"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                                    className="w-[35%] type_num p-2 border midlandfontmedium text-[8px] tracking-[4px]"
                                />
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="1000000"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(Number(e.target.value))}
                                className="w-full progress"
                            />
                        </div>
                        <div className="bg-[#EFF5FA] p-[25px] rounded-[5px] lg:mb-[15px] mb-[25px]">
                            <div className="flex justify-between items-center mb-4">
                                <label className="block midlandfontmedium tracking-[4px] uppercase text-[8px]">Interest Rate (%)</label>
                                <input
                                    type="number"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                    className="w-[35%] type_num p-2 border midlandfontmedium text-[8px] tracking-[4px]"
                                />
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                step="0.1"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className="w-full progress"
                            />
                        </div>
                        <div className="bg-[#EFF5FA] p-[25px] rounded-[5px]">
                            <div className="flex justify-between items-center mb-4">
                                <label className="block midlandfontmedium tracking-[4px] uppercase text-[8px]">Term (Years)</label>
                                <input
                                    type="number"
                                    value={term}
                                    onChange={(e) => setTerm(Number(e.target.value))}
                                    className="w-[35%] type_num p-2 border midlandfontmedium text-[8px] tracking-[4px]"
                                />
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                value={term}
                                onChange={(e) => setTerm(Number(e.target.value))}
                                className="w-full progress"
                            />
                        </div>
                    </div>

                    <div className="right_side lg:w-[56%]">
                        <div className="grid lg:grid-cols-2 grid-cols-1 h-full text-center lg:gap-[10%]">
                            <div className="bg-[#91a2af1c] py-8 rounded-[5px] border border-[#91A2AF00] total_div flex flex-col justify-between">
                                <div className="box p-2">
                                    <span className="uppercase block text-[14px] text-[#33638b]">emi/month</span>
                                    <span className="midlandfontmedium text-[10px] mt-2 flex justify-center items-center gap-[8px] tracking-[4px]">
                                        <img
                                            src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/rupee.png`}
                                            className="w-5"
                                            alt="inr"
                                        /> {emi}</span>
                                </div>
                                <div className="box p-2">
                                    <span className="uppercase block text-[14px] text-[#33638b]">Total Interest Payable</span>
                                    <span className="midlandfontmedium text-[10px] mt-2 flex justify-center items-center gap-[8px] tracking-[4px]">
                                        <img
                                            src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/rupee.png`}
                                            className="w-5"
                                            alt="inr"
                                        />{totalInterest}</span>
                                </div>
                                <div className="box p-2">
                                    <span className="uppercase block text-[14px] text-[#33638b]">Total of Payments</span>
                                    <span className="midlandfontmedium text-[10px] mt-2 flex justify-center items-center gap-[8px] tracking-[4px]">
                                        <img
                                            src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/rupee.png`}
                                            className="w-5"
                                            alt="inr"
                                        />{totalPayment}</span>
                                </div>
                            </div>
                            {/* <div className="grid items-start place-content-center">
                                <Pie data={pieData} />
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
