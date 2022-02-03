const value = document.querySelectorAll(".value");
console.log(value);
const set = document.querySelectorAll(".text");
const reset = document.querySelectorAll(".bi");
const one  = document.querySelectorAll('.one');
console.log(one)
for (let i = 0; i < set.length; i++) {
  set[i].addEventListener("click", () => {
   if (value[i].innerText > 0) {
    value[i].innerText--;
   }

});
}

const dark = document.querySelector('.bi-brightness-alt-high');
const body = document.querySelector('body');
console.log(dark)
dark.addEventListener('click' , () => {
    body.classList.toggle("dark");
})

// const fun = () => {
// for (let i = 0; i < set.length; i++) {
//     one[i].addEventListener("click", () => {
//         if (value[i].innerText == 0) {
//          one[i].style.display = "none";
//         }
     
//      });
//      }

//     }

        for (let i = 0; i < set.length; i++) {
            one[i].addEventListener("click", () => {
                if (value[i].innerText == 0) {
                 one[i].style.display = "none";
                }
             
             });
             }
    