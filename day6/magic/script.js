console.log('loading script...')
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
function askQuestion(){
    var question = document.querySelector('input').value;
    var h3 = document.querySelector('h3')
    h3.innerHTML='the question is: <h4>'+ question +'</h4>'
    console.log('transition to blue')
    h3.style.color='blue'
    setTimeout(function(){
        console.log('transition to green')
        h3.style.color='green'
        
        setTimeout(function(){
            console.log('transition to silver')
            h3.style.color='silver'

            setTimeout(function(){
                console.log('transition to green')
                h3.style.color='red'
                
                setTimeout(function(){
                    console.log('transition to silver')
                    h3.style.color='gold'
                },1000)
        
            },1000)
        },1000)

    },1000)
    setTimeout(function(){
        h3.innerHTML='the answer is: <h4>' + getAnswer() +'</h4>'

    },5000)

}

function getAnswer(){
    //var rand = Math.random()
    //var index = Math.floor( rand*lifesAnswers.length)
    //var answer = lifesAnswers[index]
    //return answer
    return lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)]
}