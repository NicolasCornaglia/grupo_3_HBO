import React from "react";
import './KpiItem.css'

function KpiItem({titulo, valor}) {

    if (valor == null) {
        valor = 0;
    }

    return (
    <>
        <div className="kpi-container">
            <p className="titulo">{titulo}</p>
            <p className="valor">{valor}</p>
        </div>
    </>
    )
}

export default KpiItem;