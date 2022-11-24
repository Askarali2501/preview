'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(MutationRecord => {
    console.log( mutationRecord);
});

observer.observe(box, {
    childList: true
})

observer.disconnect();
