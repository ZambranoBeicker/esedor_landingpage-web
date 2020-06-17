import React from "react";

const InfoParagraph = ({indexKey,info,textClass = 'text-xs sm:text-sm sm:pr-4 md:p-0 md:text-base lg:text-lg md:ml-2 text-gray-secondary hero_info', containerClass = 'w-11/12 md:w-full my-3 md:my-5'})=>{
    return(

        <div key={indexKey + 1} className={containerClass}>
            <p key={indexKey + 2} className={textClass}>{info}</p>
        </div>
    )
}

export default InfoParagraph; 
