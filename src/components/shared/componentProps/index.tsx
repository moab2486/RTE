import React from "react";

export interface buttonProps {
    children: JSX.Element,
    onSelect: Function,
    selected: Boolean
};

export interface TextStyles {
    h1: boolean,
    h2: boolean,
    h3: boolean,
    h4: boolean,
    h5: boolean,
    h6: boolean,
    fontSize: number,
    link: boolean,
    image: boolean,
    alignLeft: boolean,
    alignRight: boolean,
    alignJustify: boolean,
    alignCenter: boolean,
    bold: boolean,
    underline: boolean,
    italic: boolean,
    strike: boolean,
    orderedList: boolean,
    unorderedList: boolean,
    indent: boolean,
    video: boolean,
    socials: boolean
  };

export interface actionBarProps {
    styles: TextStyles,
    setStyles: Function
};

export interface selectProps{
    id?: string;
    type: string;
    onClick: Function;
    value?: string | undefined;
    label?: string | number | readonly string[] | undefined;
    placeholder: string | undefined;
    readOnly: boolean;
    fields?: any;
}

export interface modalProps extends actionBarProps{
    children: JSX.Element;
    title?: string;
    type?: string;
    setState: Function;
}

export interface dropDownProps extends actionBarProps{
    data: any[]
} 