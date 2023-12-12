/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useCollapse } from 'react-collapsed';
import classNames from "classnames";

const Collapsible = ({ question, answer, size, className}) => {
    const buttonClass = classNames({
        btn: true,
        [`btn-${size}`]: size,
        [`${className}`]: className,
    });

    const { getCollapseProps, getToggleProps } = useCollapse();

    return (
        <div className="collapsible">
            <div class="text-center link-horizontal header"  {...getToggleProps()}>
                <a className={buttonClass} href="#">{question}</a>
            </div><br></br>

            <div {...getCollapseProps()}>
                <div className="content">
                    {answer}
                </div>
            </div>
        </div>
    );
};
export default Collapsible;