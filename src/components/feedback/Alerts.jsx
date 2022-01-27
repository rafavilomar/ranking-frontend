import React from "react";

const Alert = ({ title, error = false, children }) => {
    return (
        <div className="flex">
            <div className="flex-initial w-14 bg-green-500">x</div>
            <div>
                <h5>{title}</h5>
                {children}
            </div>
        </div>)
}
export default Alert;