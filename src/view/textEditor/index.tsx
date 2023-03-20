import React, {useState, useEffect} from "react";
import { ActionBar } from "../../components/actionBar";
import { TextStyles } from "../../components/shared/componentProps";
import { Modal } from "./../../components/modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, FileUpload } from "../../components/upload";
import { dropdown } from "../../components/shared/staticFiles";
import { formYotubeLink } from "./../../components/shared/utils";

function TextEditor(){
    const [styles, setStyles] = useState<TextStyles>({
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false,
        fontSize: 12,
        link: false,
        image: false,
        alignLeft: false,
        alignRight: false,
        alignJustify: false,
        alignCenter: false,
        bold: false,
        underline: false,
        italic: false,
        strike: false,
        orderedList: false,
        unorderedList: false,
        indent: false,
        video: false,
        socials: false
      });

      const [textClass, setTextClass] = useState<string>("input");
      const [isShow, setIsShow] = useState<boolean>(false); 
      const [showDropdown, setShowDropdown] = useState<boolean>(false);
      const [type, setType] = useState<string>();

      const [file, setFile] = useState<string>('null');
      const [url, setUrl] = useState<string>('null');
      const [video, setVideo] = useState<string>('null');
      const [social, setScoial] = useState<string>('null');

      function toggleDropdown(){
        if(showDropdown === true){
            setShowDropdown(false)
        }else{
            setShowDropdown(true)
        }
      }

      function handleSubmit(e: any){
        if(e){
            if(e.image){
                if(e.image.name !== undefined){
                    const blob = new Blob([e.image])
                    const link = URL.createObjectURL(blob)
                    setFile(link)
                    setStyles({ ...styles, image: !styles.image })
                }
            }
            
            if(e.url !== 'null'){
                setUrl(e.url)
                setStyles({ ...styles, link: !styles.link })
            }
            
            if(e.social !== 'null'){
                setScoial(e.social)
                setStyles({ ...styles, socials: !styles.socials })
            }
            
            if(e.video !== 'null'){
                const link = formYotubeLink(e.video)
                console.log(link, "vid")
                setVideo(link);
                setStyles({ ...styles, video: !styles.video });
            }
        }
        setIsShow(false)
        setShowDropdown(false)
      }
    
    
      useEffect(() => {
        setTextClass(`input 
            ${styles.h1 ? "h1" : ""} 
            ${styles.h2 ? "h2" : ""}
            ${styles.h3 ? "h3" : ""} 
            ${styles.h4 ? "h4" : ""}
            ${styles.h5 ? "h5" : ""} 
            ${styles.h6 ? "h6" : ""}
            ${styles.alignCenter ? "alignCenter" : ""} 
            ${styles.alignJustify ? "alignJustify" : ""}
            ${styles.alignLeft ? "alignLeft" : ""} 
            ${styles.alignRight ? "alignRight" : ""}
            ${styles.bold ? "font-bold" : ""} 
            ${styles.italic ? "italic" : ""} 
            ${styles.underline ? "underline" : ""} 
            ${styles.strike ? "line-through" : ""} 
            ${styles.orderedList ? "orderedList" : ""} 
            ${styles.unorderedList ? "unorderedList" : ""} 
            ${styles.indent ? "indent" : ""}
        `);

        if(styles.link){
            setIsShow(true)
            setType("link")
        }

        if(styles.image){
            setIsShow(true)
            setType("image")
        }

        if(styles.video){
            setIsShow(true)
            setType("video")
        }

        if(styles.socials){
            setIsShow(true)
            setType("socials")
        }

      }, [styles]);
    return(
        <div>
            <div className="border padding">
                <ActionBar styles={styles} setStyles={setStyles}/>

                <div contentEditable="true" className={textClass} />

                <div className="flex-wrapper justify-content-between mt">
                    <div>
                        {file !== 'null' && <div>
                            <img src={file} alt="file" className="uploadPreview"/>
                        </div>}
                    </div>

                    <div>
                        {video !== 'null' && <div>
                            <iframe src={video} width="350" title="player"></iframe>
                        </div>}
                    </div>
                    
                    <div>
                        {url !== 'null' && <div>
                            <h3>URl: {url}</h3>
                        </div>}
                    </div>

                    <div>
                        {social !== 'null' && <div>
                            <h3>Social: <a rel="nofollow noopener noreferrer" href={social} target="_blank">{social}</a></h3>
                        </div>}
                    </div>
                </div>

                <div>
                    <FontAwesomeIcon icon="circle-plus" size="2x" className="mt" onClick={toggleDropdown}/>
                    {showDropdown ? <div>
                        <Dropdown data={dropdown} styles={styles} setStyles={setStyles}/>
                    </div> : null}
                </div>

                {isShow ? <Modal styles={styles} setStyles={setStyles} type={type} setState={setIsShow}>
                            <div>
                                <FileUpload type={type} handleSubmit={(e: any) => handleSubmit(e)}/>
                            </div>
                        </Modal> : null}
            </div>

            <div className="form-group">
                <button className="btn right">Post</button>
            </div>
        </div>
    )
}

export default TextEditor;