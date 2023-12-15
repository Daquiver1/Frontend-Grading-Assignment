import React from 'react';

const Animation = () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
        }})
    })
    
    const hiddenElements = document.querySelectorAll('.text');
    hiddenElements.forEach((el) => observer.observe(el));

  return null;
}

export default Animation;