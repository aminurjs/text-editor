

document.getElementById('bold-btn').addEventListener('click', function(){
    const button = document.getElementById('bold-btn');
    if(textarea.style.fontWeight !== 'bold'){
        textarea.style.fontWeight = 'bold';
        button.style.backgroundColor = 'rgb(125 211 252)';
    }
    else{
        textarea.style.fontWeight = 'normal';
        button.style.backgroundColor = 'transparent';
    }
})
document.getElementById('italic-btn').addEventListener('click', function(){
    const button = document.getElementById('italic-btn');
    if(textarea.style.fontStyle !== 'italic'){
        textarea.style.fontStyle = 'italic';
        button.style.backgroundColor = 'rgb(125 211 252)';
    }
    else{
        textarea.style.fontStyle = 'normal';
        button.style.backgroundColor = 'transparent';
    }
})
document.getElementById('underline-btn').addEventListener('click', function(){
    const button = document.getElementById('underline-btn');
    if(textarea.style.textDecoration !== 'underline'){
        textarea.style.textDecoration = 'underline';
        button.style.backgroundColor = 'rgb(125 211 252)';
    }
    else{
        textarea.style.textDecoration = 'none';
        button.style.backgroundColor = 'transparent';
    }
})











document.getElementById('left-btn').addEventListener('click', function(){
    const button = document.getElementById('left-btn');
    const button2 = document.getElementById('center-btn');
    const button3 = document.getElementById('right-btn');
    const button4 = document.getElementById('justify-btn');
    if(textarea.style.textAlign !== 'left'){
        textarea.style.textAlign = 'left';
        button.style.backgroundColor = 'rgb(125 211 252)';
        button2.style.backgroundColor = 'transparent';
        button3.style.backgroundColor = 'transparent';
        button4.style.backgroundColor = 'transparent';
    }
    else{
        textarea.style.textAlign = '';
        button.style.backgroundColor = 'transparent';
    }
})
document.getElementById('center-btn').addEventListener('click', function(){
    const button1 = document.getElementById('left-btn');
    const button = document.getElementById('center-btn');
    const button3 = document.getElementById('right-btn');
    const button4 = document.getElementById('justify-btn');
    if(textarea.style.textAlign !== 'center'){
        textarea.style.textAlign = 'center';
        button.style.backgroundColor = 'rgb(125 211 252)';
        button1.style.backgroundColor = 'transparent';
        button3.style.backgroundColor = 'transparent';
        button4.style.backgroundColor = 'transparent';
    }
    else{
        textarea.style.textAlign = '';
        button.style.backgroundColor = 'transparent';
    }
})
document.getElementById('right-btn').addEventListener('click', function(){
    const button1 = document.getElementById('left-btn');
    const button2 = document.getElementById('center-btn');
    const button = document.getElementById('right-btn');
    const button4 = document.getElementById('justify-btn');
    if(textarea.style.textAlign !== 'right'){
        textarea.style.textAlign = 'right';
        button.style.backgroundColor = 'rgb(125 211 252)';
        button1.style.backgroundColor = 'transparent';
        button2.style.backgroundColor = 'transparent';
        button4.style.backgroundColor = 'transparent';
    }
    else{
        textarea.style.textAlign = '';
        button.style.backgroundColor = 'transparent';
    }
})
document.getElementById('justify-btn').addEventListener('click', function(){
    const button1 = document.getElementById('left-btn');
    const button2 = document.getElementById('center-btn');
    const button3 = document.getElementById('right-btn');
    const button = document.getElementById('justify-btn');
    if(textarea.style.textAlign !== 'justify'){
        textarea.style.textAlign = 'justify';
        button.style.backgroundColor = 'rgb(125 211 252)';
        button1.style.backgroundColor = 'transparent';
        button2.style.backgroundColor = 'transparent';
        button3.style.backgroundColor = 'transparent';
    }
    else{
        textarea.style.textAlign = '';
        button.style.backgroundColor = 'transparent';
    }
})

document.getElementById('case-btn').addEventListener('click', function(){
    const button = document.getElementById('case-btn');
    if(textarea.style.textTransform !== 'uppercase'){
        textarea.style.textTransform = 'uppercase';
        button.style.backgroundColor = 'rgb(125 211 252)';
    }
    else{
        textarea.style.textTransform = 'none';
        button.style.backgroundColor = 'transparent';
    }
})



document.getElementById('size-box').addEventListener('keyup', function(event){

    const input = event.target.value;
    textarea.style.fontSize = input+'px';

})
document.getElementById('size-box').addEventListener('change', function(event){

    const input = event.target.value;
    textarea.style.fontSize = input+'px';

})

document.getElementById('color').addEventListener('change', function(event){
    const input = event.target.value;
    textarea.style.color = input;
})