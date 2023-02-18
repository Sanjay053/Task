let keyBoard = document.querySelector('#keyboard-outline');
        let display = document.querySelector('#display');
        let letters = '';
        let shiftCheck = false;
        let capsLockCheck = -1;

        keyBoard.addEventListener('click', (event) => {
            let key = event.target.getAttribute('data-key');

            switch (key) {
                // space bar
                case '32':
                    letters += ' ';
                    break;

                // enter
                case '13':
                    letters += '\n';
                    break;

                // question
                case '191':
                  letters += '?';
                  break;
                // comma
                case '188':
                  letters += ',';
                  break;
                // dot
                case '190':
                  letters += '.';
                  break;

                // backspace
                case '8':
                    letters = letters.slice(0, -1);
                    break;

                // shift flag
                case '16':
                    shiftCheck = true;
                    break;

                // capslock flag
                case '20':
                    capsLockCheck *= -1;
                    break;

                default:
                    // codition for alphabets
                    if (key >= 97 && key <= 123) {
                        // condition for shift key or caps key
                        if (shiftCheck || capsLockCheck > 0) {
                            key = key - 32;

                            // if shift key is true change the flag to false
                            if (shiftCheck) {
                                shiftCheck = false;
                            }
                        } 
                    }  
                letters += String.fromCharCode(key);
            }
            display.innerHTML = letters;
        });