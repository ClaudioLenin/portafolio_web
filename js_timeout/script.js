let $comment = document.getElementById("comment")
let timeout

//El evento lo puedes reemplazar con keyup, keypress y el tiempo a tu necesidad
$comment.addEventListener('keydown', () => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    console.log('Has dejado de escribir en el input')
    clearTimeout(timeout)
  },1000)
})