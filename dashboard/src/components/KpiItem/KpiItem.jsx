import React from "react";
import './KpiItem.css'

function KpiItem({titulo, valor}) {

    return (
    <>
        <div className="kpi-container">
            <h1>{titulo}</h1>
            <span>{valor}</span>
        </div>
    </>
    )
}

export default KpiItem;