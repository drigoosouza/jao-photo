
export function carousel(){
  const image = document.querySelectorAll('.image img')
  const carosel = document.querySelector('.slide')
  let c=0
  function slideShow(){
    c++
    if(c === image.length){
      c=0
    }
    
    carosel.style.transform=`translateX(${-100*c}vw)`
  }

  setInterval(slideShow,10000)
}

export function slideAbout(){
  const image = document.querySelectorAll(".slideabout img")
  const carosel = document.querySelector(".slideabout")
  let c=0
  
  function slideShowAbout(){
    c++
    if(c === image.length){
      c=0
    }
    console.log(c)
    carosel.appendChild(image[c])
  }

  setInterval(slideShowAbout,5000)

}