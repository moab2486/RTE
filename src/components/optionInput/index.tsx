import React, { useState } from "react";
import { selectProps } from "./../shared/componentProps";
import { getObjectFromArray } from "./../shared/utils";

interface optionInputProps extends selectProps{
    data: any[]
}

export function OptionInput(props: optionInputProps){
    const [toggleList, setToggleList] = useState<boolean>(false);
    const [value, setValue] = useState<string>()
    var dataArray = props.data;

    function onClick(){
        if(toggleList === false){
            setToggleList(true)
        }else{
            setToggleList(false)
        }
    }

    function selectOption(inputValue: string){
        var value = getObjectFromArray(dataArray, inputValue);
        setValue(value.name)
        props.onClick(value.id);
        setToggleList(false)
    }

    const DropdownList = toggleList ? (
        <div className="dropdownList dropdownList-view">
            <ul>
                {
                    props.data.map(item => <li key={item.code} onClick={() => selectOption(item.name)}>
                        {item.name}
                    </li>)
                }
            </ul>
        </div>
    ): null


    return(
        <div>
            <label>{props.label}</label>
            <input 
                type={props.type}
                value={value}
                placeholder={props.placeholder}
                onClick={onClick}
                readOnly={props.readOnly}/>

            {DropdownList}
        </div>
    )
}