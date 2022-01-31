import React from "react";

const LoadingSpinner = ({colorClass}) => {
    return (
        <div
            style={{ borderTopColor: "transparent" }}
            class={"spinner-border border-4 animate-spin w-full h-full mr-3 rounded-full "+colorClass} role="status"
        />
    )
}
export default LoadingSpinner