import React, {useState} from "react";
import { validateLink, validateYoutubeLink, validateFile } from "./../../shared/utils";

interface fileUplodProps{
    type: string | undefined,
    handleSubmit: Function
}

export function FileUpload(props: fileUplodProps){
    const [category, setCategory] = useState<string>('null');
    const [url, setUrl] = useState<string>('null');
    const [social, setSocial] = useState<string>('null');
    const [video, setVideo] = useState<string>('null');
    const [image, setImage] = useState<File>();

    function uploader(){
        const fields = {category, url, image, social, video}
        props.handleSubmit(fields)
    }

    function submit(){
        if(url !== 'null' && validateLink(url) !== true ){
            alert("enter a valid url")
        }else if(social !== 'null' && validateLink(social) !== true ){
            alert("enter a url")
        }else if(video !== 'null' && validateYoutubeLink(video) !== true ){
            alert("enter a youtube url")
        }else if(image){
            let valitor = validateFile(image.name);
            if(valitor === false){
                alert("File format must be either 'png' or 'jpg' or jpeg")
            }else{
                uploader();
            }
        }else{
            uploader();
        }
    }

    return(
        <div>
            {(props.type === "video" || props.type === "socials" ) ?<div className="form-group">
                <label htmlFor="">Category</label>
                <div>
                    <input type="text" className="form-control" readOnly value={props.type === "video" ? "Youtube" : "Socials"} onChange={e => setCategory(e.target.value)}/>
                </div>
            </div>: null}

            {props.type === "link" ?<div className="form-group">
                <label htmlFor="">Url</label>
                <div>
                    <input type="text" className="form-control" onChange={e => setUrl(e.target.value)}/>
                </div>
            </div>: null}

            {props.type === "socials"  ?<div className="form-group">
                <label htmlFor="">Socials</label>
                <div>
                    <input type="text" className="form-control" onChange={e => setSocial(e.target.value)}/>
                </div>
            </div>: null}

            {props.type === "video" ?<div className="form-group">
                <label htmlFor="">Video</label>
                <div>
                    <input type="text" className="form-control" onChange={e => setVideo(e.target.value)}/>
                </div>
            </div>: null}

            {props.type === "image" ?<div className="form-group">
                <label htmlFor="">Image</label>
                <div>
                    <input type="file" className="form-control" onChange={e => setImage(e.target.files![0])}/>
                </div>
            </div>: null}

            <div className="form-group">
                <button className="btn" onClick={submit}>Save</button>
            </div>
        </div>
    )
}