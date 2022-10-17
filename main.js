const button = document.getElementById('btn'),
   body = document.getElementsByTagName('body')[0];

let resultText = document.getElementsByClassName('result');

// console.log(resultText);

function wordDrag() {
   button.addEventListener('click', function () {
      let inputField = document.getElementById('input-field').value;
      resultText.innerHTML = inputField;
      for (let i = 0; i < inputField.length; i++) {
         let span = document.createElement('span');
         span.innerHTML = inputField[i];
         span.classList.add('result');
         span.style = 'cursor: pointer; font-size: 60px;';
         body.appendChild(span);
      }
      let resultArr = Array.from(resultText);
      console.log(resultArr);
      resultArr.forEach((i) => {
         i.onmousedown = function (e) {

            i.style.position = 'fixed';
            moveAt(e);

            document.body.appendChild(i);

            i.style.zIndex = 1000;

            function moveAt(e) {
               i.style.left = e.pageX - i.offsetWidth / 2 + 'px';
               i.style.top = e.pageY - i.offsetHeight / 2 + 'px';
            }

            document.onmousemove = function (e) {
               moveAt(e);
            };

            i.onmouseup = function () {
               document.onmousemove = null;
               i.onmouseup = null;
            };
         };
      });

   });
   // console.log(resultText);

   // console.log(resultArr);
}

wordDrag();


// console.log(resultArr);
