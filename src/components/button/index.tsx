import React from "react";
import { buttonProps } from "./../shared/componentProps";

export function Button (props: buttonProps) {
    return (
        <div
            className={props.selected ? "selected-button" : "button"}
            onClick={() => props.onSelect()}
        >
            {props.children}
        </div>
    );
};