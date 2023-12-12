/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useCollapse } from 'react-collapsed';
import classNames from "classnames";

const CollapseElement = ({ id, question, answer, size, className, isOpen=true, onToggle=true}) => {
    const buttonClass = classNames({
        btn: true,
        [`btn-${size}`]: size,
        [`${className}`]: className,
    });

    const { getCollapseProps, getToggleProps } = useCollapse();
    // const { getCollapseProps } = useCollapse({ isOpen });

    // return (
    //     <div className="collapsible">
    //       <div className="text-center link-horizontal header" onClick={() => onToggle(id)}>
    //         <a className={buttonClass} href="#">
    //           {question}
    //         </a>
    //       </div>
    //       <br />
    //       <div {...getCollapseProps()}>
    //         <div className="content">{answer}</div>
    //       </div>
    //     </div>
    //   );

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
export default CollapseElement;