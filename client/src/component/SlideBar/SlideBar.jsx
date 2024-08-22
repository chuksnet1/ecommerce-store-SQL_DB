import React from "react";
import "./SlideBar.css";
import store1 from '../../Asset/Image/store.png'

const SlideBar = () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  function showSlides(n) {
    let i;
    let slides = [];
    let dots = [];
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      //slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      //slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      //dots[i].className = dots[i].className.replace(" active", "");
    }
    // slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
  }
//   const slidess = document.getElementsByClassName("mySlides")[0].addEventListener("click",()=>{
//     console.log("we clicked it")
//   })
// // //   const slideA = document.getElementsByClassName("mySlides")[0].addEventListener("click",()=>{
// // //     document.getElementsByClassName("mySlides")[0].innerHTML="we are good"
// // //   })
//   console.log(slidess)
  return (
    <>
      <div>
        {/* <div class="slideshow-container">
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="img_nature_wide.jpg" style="width:100%" />
            <div class="text">Caption Text</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="img_snow_wide.jpg" style="width:100%" />
            <div class="text">Caption Two</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="img_mountains_wide.jpg" style="width:100%" />
            <div class="text">Caption Three</div>
          </div>

          <a class="prev" onclick={plusSlides(-1)}>
            ❮
          </a>
          <a class="next" onclick={plusSlides(1)}>
            ❯
          </a>
        </div>

        <div style="text-align:center">
          <span class="dot" onclick={currentSlide(1)}></span>
          <span class="dot" onclick={currentSlide(2)}></span>
          <span class="dot" onclick={currentSlide(3)}></span>
        </div> */}
        <div className="mySlides ">
            <img src={store1}/>
        </div>
      </div>
    </>
  );
};

export default SlideBar;
