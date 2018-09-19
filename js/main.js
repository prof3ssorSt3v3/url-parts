document.addEventListener('DOMContentLoaded', ()=>{
    //add input listeners
    document.getElementById('protocol').addEventListener('input', update);
    document.getElementById('user').addEventListener('input', update);
    document.getElementById('subdomain').addEventListener('input', update);
    document.getElementById('domain').addEventListener('input', update);
    document.getElementById('superdomain').addEventListener('input', update);
    document.getElementById('path').addEventListener('input', update);
    document.getElementById('file').addEventListener('input', update);
    document.getElementById('query').addEventListener('input', update);
    document.getElementById('hash').addEventListener('input', update);
    
    //set initial values
    let inputs = document.querySelectorAll('input');
    inputs.forEach( (input)=>{
        input.dispatchEvent(new Event('input'));
        let title = input.id;
        let span = document.querySelector(`.${title}`);
        span.setAttribute('title', title);
    })
})

function update(ev){
    let source = (ev.target)?ev.target:null;
    if(source){
        let span = document.querySelector(`.${source.id}`);
        span.textContent = source.value;
        if(span.getAttribute('data-prefix') && source.value.length)
            span.textContent = span.getAttribute('data-prefix') + span.textContent;
        if(span.getAttribute('data-suffix') && source.value.length)
            span.textContent = span.textContent + span.getAttribute('data-suffix');
    }
}