import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { modalProps } from "./../shared/componentProps";

export function Modal(props: modalProps){
    const children = props.children as any;
   
    function onClose(){
        switch(props.type){
            case "link":
                props.setStyles({ ...props.styles, link: !props.styles.link });
                break;
            case "image":
                props.setStyles({ ...props.styles, image: !props.styles.image });
                break
            case "video":
                props.setStyles({ ...props.styles, video: !props.styles.video });
                break;
            case "socials":
                props.setStyles({ ...props.styles, socials: !props.styles.socials });
                break
        }
        props.setState(false);
    }

    return(
        <div className="modal overlay">
            <div className="modal-sm" id="card">
                <div className="modal-title wrapper justify-content-between">
                    <div className="w-50">
                        {props.title}
                    </div>

                    <div>
                        <FontAwesomeIcon icon="circle-xmark" onClick={onClose}/>
                    </div>
                </div>

                <div className="modal-content mt">
                    {children}
                </div>
            </div>
        </div>
    )
}