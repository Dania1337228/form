// let p = document.querySelector(`p`)
// let elem = document.querySelector('#elem');
// elem.addEventListener(`blur`, ()=>{
//     p.textContent = elem.value
// })
// let elem = document.querySelector('#elem');
// let but = document.querySelector(`#but1`)
// but1.addEventListener(`click`, ()=>{
//     if(elem.disabled){
//         elem.disabled = false;
//     }else{
//         elem.disabled = true
//     }    
// })

// let elem = document.querySelector('#elem');
// let but1 = document.querySelector(`#but1`)
// let but2 = document.querySelector(`#but2`)
// but1.addEventListener(`click`, fanc1)
// but2.addEventListener(`click`, fanc2)   
// function fanc1(){
//     elem.removeAttribute(`disabled`);
// }
// function fanc2(){
//      elem.setAttribute(`disabled`, true);
// }
// let elem = document.querySelector('#elem');
// let but1 = document.querySelector(`#but1`)
// but1.addEventListener(`click`, ()=>{
//     console.log(elem.disabled);
// })
//lvl5
// let elem = document.querySelector('#elem1');
// let but1 = document.querySelector(`#but1`)
// but1.addEventListener(`click`, ()=>{
//     if(elem.checked){
//         elem.checked = false
//     }else{
//         elem.checked = true
//     }
// })

// let p = document.querySelector(`p`)
// let elem = document.querySelector('#elem1');
// let but1 = document.querySelector(`#but1`)
// but1.addEventListener(`click`, ()=>{
//     if(elem.checked == true){
//         p.textContent = `привет`
//     }else{
//         p.textContent = `пока`
//     }
// })
// let elem = document.querySelector('#elem1');
// let but = document.querySelector(`#but1`)
// but.addEventListener(`click`, ()=>{
//     elem.checked = !elem.checked;
// })
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#but1');
// let p = document.querySelector(`p`)
// button.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
// 			p.textContent = radio.value
            
// 		}
// 	}
// });
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');

// elem.addEventListener('change', function() {
// 	p.textContent = this.value;
// });
// let elem = document.querySelector('#elem1');
// let p = document.querySelector('p');

// elem.addEventListener('change', function() {
// 	p.textContent = elem.checked;
// });
// let elem = document.querySelector(`#elem`)
// elem.addEventListener(`change`, ()=>{
//         if(elem.value.length <= 5){
//             elem.style.backgroundColor = `green`
//         }else{
//             elem.style.backgroundColor = `red`
//         }   
// })
// let elem = document.querySelector(`#elem`)
// elem.addEventListener(`input`, ()=>{
//         if(elem.value.length > 5){
//             alert(`угомонись порося`)
//         }else{
            
//         }   
// })

// let elem = document.querySelector(`#elem`)
// let p = document.querySelector(`p`)
// elem.addEventListener(`input`, ()=>{
//     for(let i = 0; i <= elem.value.length; i++){
//         if(elem.value.length < 5){
//             p.textContent = 5 - i
//         }else{
//             p.textContent = i - 5
//         }
//     }
// })

// let elem1 = document.querySelector(`#elem1`)
// let elem2 = document.querySelector(`#elem2`)
// elem1.addEventListener(`input`, ()=>{
//    if(elem1.value.length >= 2){
//     elem2.focus();
//    }
// })
// elem2.addEventListener('input', ()=>{
//     if(elem2.value.length >= 2){
//         elem2.blur();
//        }
// })
// let p = document.querySelector(`p`)
// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
// 	p.textContent = this.value
// });

// let p = document.querySelector(`p`)
// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
// 	if(this.value % 4 == 0){
//         p.textContent = `высокосный год`
//     }else{
//         p.textContent = `ne высокосный год`
//     }
    
// });
// let p = document.querySelector(`p`)
// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
// 	if(this.valu - 5 > 3){
//         p.textContent = `одых`
//     }else{
//         p.textContent = `тоже одых`
//     }
    
// });

// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
//     select.value = this.value
// });

// let select = document.querySelector('#select');
// for(let elem of select){
//     elem.textContent = elem.textContent + ' ' + elem.value
// }

// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
//     for(let elem of select)
//  elem.textContent = elem.textContent + '!';
// })

// let select = document.querySelector('#select');
// let button = document.querySelector('#but1');
// button.addEventListener('click', function(){
//  document.write(select.value)
// })