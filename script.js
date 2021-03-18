let number = 0

document.getElementById('button').addEventListener('click', math)

function math () {
  number = document.getElementById('numero').value
  number = number*number
  alert(number)
}
