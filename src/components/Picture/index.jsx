import React from "react";

import { Img } from "components";

const Picture = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[100px] md:h-auto rounded-[50%] w-[200px]"
          src="images/img_vector_96x96.png"
          alt="vector"
        />
      </div>
    </>
  );
};

Picture.defaultProps = {};

export default Picture;
