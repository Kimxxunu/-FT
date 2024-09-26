import React from "react";
import "./InformationContent.css";


const InformationContent = ({title, middle1, middle2, black1, blue1 ,black2, blue2}) => {
    return (
        <div className="InformationContent">
            <div className="InformationContent-Title">
                <p>{title}</p>
            </div>
            <div className="InformationContent-Middle">
                <p>{middle1}</p>
                <p>{middle2}</p>
            </div>
            <div className="InformationContent-Contents">
                <div className="InformationContent-Contents-Block">
                    <p className="InformationContent-Contents-Block-black">
                        {black1}
                    </p>
                    <p className="InformationContent-Contents-Block-blue">
                        {blue1}
                    </p>
                </div>
                <div className="InformationContent-Contents-Block">
                    <p className="InformationContent-Contents-Block-black">
                        {black2}
                    </p>
                    <p className="InformationContent-Contents-Block-blue">
                        {blue2}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default InformationContent;