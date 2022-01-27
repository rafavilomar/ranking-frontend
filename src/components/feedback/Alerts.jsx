import React from "react";
import { CheckmarkCircle, CheckmarkCircleOutline } from "react-ionicons";
import BugOutline from "react-ionicons/lib/BugOutline";

const Alert = ({ title, error = false, children }) => {
    const [className, setClassName] = React.useState("");

    React.useEffect(() => {
        if (error) {
            setClassName("bg-red-200");
        } else {
            setClassName("bg-green-200")
        }
    }, [error]);

    return (
        <div className={`py-2 px-4 rounded-md flex gap-4 w-full ${className}`}>
            <div className="flex flex-initial justify-center py-1">
                {error ? (<BugOutline color="#7f1d1d" />) : (<CheckmarkCircleOutline color="#064e3b" />)}
            </div>
            <div>
                <h5 className={`font-bold text-base mb-2 ${error ? 'text-red-900' : 'text-green-900'}`} >{title}</h5>
                <div className="text-sm" >
                    {children}
                </div>
            </div>
        </div>)
}
export default Alert;