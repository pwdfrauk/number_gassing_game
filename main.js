
      let randomeNumber = Math.floor(Math.random()*100) +1;

      let guessField = document.querySelector('.guessField');
      let guessSubmit = document.querySelector('.guessSubmit');

      let guesses = document.querySelector('.guesses');
      let lastResult = document.querySelector('.lastResult');
      let lowOrHi = document.querySelector('.lowOrHi');
      let resetButton = document.querySelector('.resetButton')

      let userCount = 1; 

      function checkGuess() {
        let userGuess =Number(guessField.value);
        if(userCount === 1 ) {
          guesses.textContent = 'Previous Guesses'
        }
        guesses.textContent += userGuess + " ";

        if(userGuess === randomeNumber ) {
          lastResult.textContent = "Congratulations! you got it Right";
          lastResult.style.background = 'yellow';
          lowOrHi.textContent = 'Right Number';
          setGameOver()
        } else if (userCount === 10 ) {
          lastResult.textContent = '!!! Game Over !!!';
          lastResult.style.background = 'Yellow';
          lowOrHi.textContent = ' ';
          setGameOver()
        } else {
          lastResult.textContent = 'Wrong!'
          lastResult.style.background = 'red';
          if(userGuess > randomeNumber) {
            lowOrHi.textContent = 'Guess is to high!'
          } else if(userGuess < randomeNumber) {
            lowOrHi.textContent = 'Guess is to low!'
          }
        }
        
        userCount++;
        guessField.value = ' ';
        guessField.focus()
      }
      
      guessSubmit.addEventListener('click', (e)=> {
        if(guessField.value < 1 ){
          guessField.value = '';
          alert('Please Enter the right vlue');
          guessField.focus();
        } else if(guessField.value > 100 ){
          guessField.value = "";
         alert('Please Enter Less then 100 Number');
         guessField.focus();
        }else {
          checkGuess()
        }
      })

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        reButton = document.createElement('button');
        reButton.textContent = 'Start new game';
        resetButton.append(reButton);
        console.log(reButton)
        reButton.addEventListener('click', (e)=>{
          resetGame()
        });
      }

      function resetGame(){

        userCount = 1;

        const resultParas = document.querySelectorAll('.resultParas p');

        for(let i = 0; i< resultParas.length; i++ ){
          resultParas[i].textContent = " ";
        }

        reButton.parentElement.removeChild(reButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();

        lastResult.style.background = 'white';
        randomeNumber = Math.floor(Math.random()*100) +1;

        }