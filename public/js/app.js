document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.
    // let tag_h2=document.getElementsByTagName("h2");
    // console.log(tag_h2);
    // let class_mt =document.getElementsByClassName("user_main_top");
    // console.log(class_mt);

    // let y=tag_h2[0];
    // console.log(y);
    // let z=y.style.fontSize;
    // y.style.fontSize = "24px";
    // let d=y.getBoundingClientRect;
    // console.log(z);
    // console.log(d);

    const b1=document.getElementById("b1");
    b1.addEventListener("click",function() {
        // let postArr =document.getElementsByClassName("post");  
        // postArr.forEach(function(p) { p.style.backgroundColor=`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;});
        const posts = document.getElementsByClassName("post");
        for (const post of posts) {
            post.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        }
    })

    // const b2=document.getElementById("b_nav");
    // b2.addEventListener("click",function() {
    //     console.log("clicked b_nav");
    //     const nm = document.getElementsByClassName("nav_menu")[0];
    //     // console.log(nm.style);
    //     const disp=nm.style.display;
    //     console.log(disp);
    //     if (disp==="") { nm.classList.remove("nav_menu_closed"); nm.classList.add("nav_menu_opened");}
    //     else { nm.classList.remove("nav_menu_opened");nm.classList.add("nav_menu_closed"); }
    //     // if (disp==="") { nm.classList.add("nav_menu_opened");}
    //     // else { nm.classList.remove("nav_menu_opened"); }
    // })

//     /* Set the width of the side navigation to 250px */
// function openNav() {
//     console.log("clicked open nav");
//     document.getElementById("mySidenav").style.width = "250px";
//   }
  
//   /* Set the width of the side navigation to 0 */
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }


});

// function whenClicked() {
//     let postArr =document.getElementsByClassName("post");
//     postArr.forEach (function(p) { p.style.background=`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);}
// }