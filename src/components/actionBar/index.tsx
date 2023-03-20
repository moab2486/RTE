import React from "react";
import { Button } from "./../button";
import { OptionInput } from "./../optionInput"
import { actionBarProps } from "./../shared/componentProps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Headings } from "../shared/staticFiles";

export function ActionBar(props: actionBarProps){
  function onClick(e: number){
    switch(e) {
      case 1:
        props.setStyles({ ...props.styles, h1: !props.styles.h1 });
        break;
      case 2:
        props.setStyles({ ...props.styles, h2: !props.styles.h2 });
        break;
      case 3:
        props.setStyles({ ...props.styles, h3: !props.styles.h3 });
        break;
      case 4:
        props.setStyles({ ...props.styles, h4: !props.styles.h4 });
        break;
      case 5:
        props.setStyles({ ...props.styles, h5: !props.styles.h5 });
        break;
      case 6:
        props.setStyles({ ...props.styles, h6: !props.styles.h6 });
        break;
    }
  }
  
  return(
    <div className="flex-wrapper justify-content-around border">
      <div className="flex-wrapper w-100 justify-content-around border-right">
        <OptionInput 
          readOnly={true} 
          type={"text"} 
          placeholder={"Headings"} 
          onClick={(e: number) => onClick(e)} 
          data={Headings}/>
      </div>

      <div className="flex-wrapper w-100 justify-content-around border-right">
        <Button
          selected={props.styles.link}
          onSelect={() => props.setStyles({ ...props.styles, link: !props.styles.link })}
        >
          <FontAwesomeIcon icon="link" />
        </Button>

        <Button
          selected={props.styles.image}
          onSelect={() => props.setStyles({ ...props.styles, image: !props.styles.image })}
        >
          <FontAwesomeIcon icon="image" />
        </Button>
      </div>

      <div className="flex-wrapper w-100 justify-content-around border-right">
        <Button
          selected={props.styles.alignLeft}
          onSelect={() => props.setStyles({ ...props.styles, alignLeft: !props.styles.alignLeft })}
        >
          <FontAwesomeIcon icon="align-left" />
        </Button>

        <Button
          selected={props.styles.alignRight}
          onSelect={() => props.setStyles({ ...props.styles, alignRight: !props.styles.alignRight })}
        >
          <FontAwesomeIcon icon="align-right" />
        </Button>

        <Button
          selected={props.styles.alignJustify}
          onSelect={() => props.setStyles({ ...props.styles, alignJustify: !props.styles.alignJustify })}
        >
          <FontAwesomeIcon icon="align-justify" />
        </Button>

        <Button
          selected={props.styles.alignCenter}
          onSelect={() => props.setStyles({ ...props.styles, alignCenter: !props.styles.alignCenter })}
        >
          <FontAwesomeIcon icon="align-center" />
        </Button>
      </div>

      <div className="flex-wrapper w-100 justify-content-around border-right">
        <Button
          selected={props.styles.bold}
          onSelect={() => props.setStyles({ ...props.styles, bold: !props.styles.bold })}
        >
          <FontAwesomeIcon icon="bold" />
        </Button>

        <Button
          selected={props.styles.italic}
          onSelect={() => props.setStyles({ ...props.styles, italic: !props.styles.italic })}
        >
          <FontAwesomeIcon icon="italic" />
        </Button>

        <Button
          selected={props.styles.underline}
          onSelect={() => props.setStyles({ ...props.styles, underline: !props.styles.underline, strike: false })}
        >
          <FontAwesomeIcon icon="underline" />
        </Button>

        <Button
          selected={props.styles.strike}
          onSelect={() => props.setStyles({ ...props.styles, strike: !props.styles.strike, underline: false })}
        >
          <FontAwesomeIcon icon="strikethrough" />
        </Button>
      </div>

      <div className="flex-wrapper w-100 justify-content-around padding-top">
        <Button
          selected={props.styles.unorderedList}
          onSelect={() => props.setStyles({ ...props.styles, unorderedList: !props.styles.unorderedList })}
        >
          <FontAwesomeIcon icon="list-ul" />
        </Button>

        <Button
          selected={props.styles.orderedList}
          onSelect={() => props.setStyles({ ...props.styles, orderedList: !props.styles.orderedList })}
        >
          <FontAwesomeIcon icon="list-ol" />
        </Button>

        <Button
          selected={props.styles.indent}
          onSelect={() => props.setStyles({ ...props.styles, indent: !props.styles.indent})}
        >
          <FontAwesomeIcon icon="indent" />
        </Button>
      </div>
    </div>
  )
}