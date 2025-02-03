import { useState } from "react";
import "./styles.css"
import * as CONFIG from "../../../../config";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { MdOutlineCurrencyRupee } from "react-icons/md";


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
        <div className="emiCalculator lg:py-[80px] py-[30px]">
            <div className="xl:max-w-[85%] max-w-[100%] m-auto px-[15px]">
                <div className="flex flex-wrap justify-between">
                    <div className="left_side lg:w-[37%]">
                        <div className="bg-[#EFF5FA] lg:px-[25px] lg:py-[25px] px-[15px] py-[10px] rounded-[5px] lg:mb-[15px] mb-[10px]">
                            <div className="flex justify-between items-center lg:mb-3 mb-1">
                                <label className="block lg:tracking-[4px] tracking-[2px] uppercase lg:text-[16px] text-[12px]">Loan Amount</label>
                                <input
                                    type="number"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                                    className="w-[35%] type_num lg:p-2 p-1 border rounded lg:text-[17px] text-[14px] lg:tracking-[4px] tracking-[2px]"
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
                        <div className="bg-[#EFF5FA] lg:p-[25px] p-[15px] rounded-[5px] lg:mb-[15px] mb-[10px]">
                            <div className="flex justify-between items-center lg:mb-3 mb-1">
                                <label className="block lg:tracking-[4px] tracking-[2px] uppercase lg:text-[16px] text-[12px]">Interest Rate (%)</label>
                                <input
                                    type="number"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                    className="w-[35%] type_num lg:p-2 p-1 border rounded lg:text-[17px] text-[14px] lg:tracking-[4px] tracking-[2px]"
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
                        <div className="bg-[#EFF5FA] lg:p-[25px] p-[15px] rounded-[5px]">
                            <div className="flex justify-between items-center lg:mb-3 mb-1">
                                <label className="block lg:tracking-[4px] tracking-[2px] uppercase lg:text-[16px] text-[12px]">Term (Years)</label>
                                <input
                                    type="number"
                                    value={term}
                                    onChange={(e) => setTerm(Number(e.target.value))}
                                    className="w-[35%] type_num lg:p-2 p-1 border rounded lg:text-[17px] text-[14px] lg:tracking-[4px] tracking-[2px]"
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

                    <div className="right_side lg:w-[56%] w-full lg:mt-0 mt-5 lg:border-0 border border-[#e7e7e7] rounded-lg lg:pb-0 pb-4">
                        <div className="grid lg:grid-cols-2 h-full text-center lg:gap-[10%]">
                            <div className="lg:bg-[#91a2af1c] lg:py-8 py-3 rounded-[5px] border border-[#91A2AF00] total_div flex flex-col justify-between">
                                <div className="box lg:py-2 lg:px-0 px-5 lg:mb-0 mb-2 lg:block flex justify-between">
                                    <span className="uppercase block lg:text-[14px] text-[12px] text-[#33638b]">emi/month</span>
                                    <span className="lg:mt-[10px] mt-[4px] flex justify-center items-center gap-[5px] lg:text-[21px] text-[14px] lg:tracking-[2px] tracking-[1px] lg:text-black text-[#8f8f8f]">
                                        <MdOutlineCurrencyRupee className="lg:text-[21px] text-[15px]" />
                                        {emi}</span>
                                </div>
                                <div className="box lg:py-2 lg:px-0 px-5 lg:mb-0 mb-2 lg:block flex justify-between">
                                    <span className="uppercase block lg:text-[14px] text-[12px] text-[#33638b]">Total Interest Payable</span>
                                    <span className="lg:mt-[10px] mt-[4px] flex justify-center items-center gap-[5px] lg:text-[21px] text-[14px] lg:tracking-[2px] tracking-[1px] lg:text-black text-[#8f8f8f]">
                                        <MdOutlineCurrencyRupee className="lg:text-[21px] text-[15px]" />
                                        {totalInterest}</span>
                                </div>
                                <div className="box lg:py-2 lg:px-0 px-5 lg:mb-0 mb-2 lg:block flex justify-between">
                                    <span className="uppercase block lg:text-[14px] text-[12px] text-[#33638b]">Total of Payments</span>
                                    <span className="lg:mt-[10px] mt-[4px] flex justify-center items-center gap-[5px] lg:text-[21px] text-[14px] lg:tracking-[2px] tracking-[1px] lg:text-black text-[#8f8f8f]">
                                        <MdOutlineCurrencyRupee className="lg:text-[21px] text-[15px]" />
                                        {totalPayment}</span>
                                </div>
                            </div>
                            <div className="grid items-start place-content-center">
                                <Pie data={pieData} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
