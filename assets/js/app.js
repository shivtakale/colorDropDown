let cl = console.log;

let selectColor = document.getElementById('SelectColor');
let demo = document.getElementById('demo');



selectColor.addEventListener('change', (eve) =>{
    // cl('event triggered')

    // cl(eve.target.value)

    demo.style.backgroundColor = eve.target.value
})