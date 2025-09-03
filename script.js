
const leftCh = document.querySelector("#left-chev");
const rightCh = document.querySelector("#right-chev");

leftCh.addEventListener("click",()=>{
    console.log('chevron is clicked');
});

rightCh.addEventListener("click",()=>{
    console.log("chevron right is clicked");
    const post = document.querySelector(".wraper");
    post.classList.add(".sider");
});