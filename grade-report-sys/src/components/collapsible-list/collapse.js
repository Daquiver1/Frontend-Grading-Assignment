import React, { useEffect } from 'react';

//Iterates through list of items to create a transition of appropriate length
const Collapse = ({ className }) => {
  useEffect(() => {
    const collapsibles = document.getElementsByClassName(className);
    
    const handleCollapsibleClick = function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };

    for (let i = 0; i < collapsibles.length; i++) {
      collapsibles[i].addEventListener("click", handleCollapsibleClick);
    }

    return () => {
      // Cleanup event listeners when the component is unmounted
      for (let i = 0; i < collapsibles.length; i++) {
        collapsibles[i].removeEventListener("click", handleCollapsibleClick);
      }
    };
  }, [className]);

  return null; // You can return null or any other JSX here as needed
};

export default Collapse;
