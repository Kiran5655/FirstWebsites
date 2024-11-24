// let a=document.getElementsByClassName("text");
// console.log(a);
function createcard(name,image,views,time,title,months){
    let html=
        `<div class="items">
            <div class="image"><img src="${image}" alt="">
            </div>
           <div class="text">
            <h2>${title}</h2>
            <p>${name}</p>
            <p>${views}</p>
            <p>${months}</p>
           </div>
           <div class="time">
            <p>
            ${time}
            </p>
           </div>
        </div>`;
    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;

}

// https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ

createcard("codewithharry. ","https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ","500000","12:50","hello world","8 months ago");