import React from "react";
import { dropDownProps } from "./../../shared/componentProps";
import { Button } from "../../button";

export function Dropdown(props: dropDownProps){

    function dropdownItems(e: any){
        return(
            <div>
                {e.name === "Image" ? 
                    <Button
                        selected={props.styles.image}
                        onSelect={() => props.setStyles({ ...props.styles, image: !props.styles.image })}
                    >
                        <div>
                            <h3>{e.name}</h3>
                            <p>{e.description}</p>
                        </div>
                    </Button>
                : null}

                {e.name === "Video" ? 
                    <Button
                        selected={props.styles.video}
                        onSelect={() => props.setStyles({ ...props.styles, video: !props.styles.video })}
                    >
                        <div>
                            <h3>{e.name}</h3>
                            <p>{e.description}</p>
                        </div>
                    </Button>
                : null}

                {e.name === "Socials" ? 
                    <Button
                        selected={props.styles.socials}
                        onSelect={() => props.setStyles({ ...props.styles, socials: !props.styles.socials })}
                    >
                        <div>
                            <h3>{e.name}</h3>
                            <p>{e.description}</p>
                        </div>
                    </Button>
                : null}
            </div>
        
        )
    }

    return(
        <div>
            <ul>
                {props.data.map(item  => <li className="dropdown-icon">
                    {dropdownItems(item)}
                </li>)}
            </ul>
        </div>
    )
}