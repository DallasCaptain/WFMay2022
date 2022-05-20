


var h1 = document.querySelector('.myh1')
h1.style.backgroundColor = 'purple'


function count(obj){
    console.log('1, 2, 3, 4, ....')
    console.log(obj)
    console.log(this)
}

function over(element){
    element.style.backgroundColor = 'firebrick'
}
function out(element){
    element.style.backgroundColor = 'lime'
}