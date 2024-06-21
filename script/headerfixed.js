export function fixed(){
  const header = document.querySelector('header') // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) header.classList.add('headerfixed'); // > 0 ou outro valor desejado
        else header.classList.remove('headerfixed')
})
}