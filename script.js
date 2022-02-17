const container = document.querySelector('.container');
const nextBtn = document.querySelector('.next-question')

const computerBtn =document.querySelector('.computers');

const gKnowledgeBtn= document.querySelector('.general-knowledge');
const category = document.querySelector('.category');
const difficulty = document.querySelector('.difficulty');
const question = document.querySelector('.question');
const prompt1 = document.querySelector('.prompt1');
const prompt2 = document.querySelector('.prompt2');
const prompt3 = document.querySelector('.prompt3');
const prompt4 = document.querySelector('.prompt4');

/*const myFalseArray = [0,1,2];

let random1 = Math.floor(Math.random()* myFalseArray.length);
for(let i = 0; i < myFalseArray.length; i++){ 
    
    if ( myFalseArray[i] === random1) { 

        let newArray = myFalseArray.splice(i, 1); 

    }
}*/


prompt3.addEventListener('click', moreScore);

function moreScore(){
    score++;
    console.log(score)
}


gKnowledgeBtn.addEventListener('click', gKnowledge);

score = 0;
function gKnowledge(){
    let index = 0;
    document.querySelector('.score-div').classList.remove('active')
    container.classList.add('active');
    async function get(){
        let response = await fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple");
        let data = await response.json();
        console.log(data);

        function mainGKFunction(){
            category.innerHTML = "Category: " + data.results[index].category;
            difficulty.innerHTML = "Difficulty: " + data.results[index].difficulty;
            question.innerHTML = data.results[index].question;
            
            prompt1.innerHTML = data.results[index].incorrect_answers[0];
            prompt2.innerHTML = data.results[index].incorrect_answers[2];
            prompt4.innerHTML = data.results[index].incorrect_answers[1];
            prompt3.innerHTML = data.results[index].correct_answer;

            console.log(index);

            prompt3.addEventListener('click', correct);
            prompt1.addEventListener('click', wrongAnswer1);
            prompt2.addEventListener('click', wrongAnswer2);
            prompt4.addEventListener('click', wrongAnswer4);

            function wrongAnswer1(){
                prompt3.style.background = "green";
                prompt1.style.background = "red";
            }
            function wrongAnswer4(){
                prompt3.style.background = "green";
                prompt4.style.background = "red";
            }
            function wrongAnswer2(){
                prompt3.style.background = "green";
                prompt2.style.background = "red";
            }


            function correct(){
                prompt3.style.background = "green";
             
            }
            
        }

        nextBtn.addEventListener('click', nextQuestion);
        mainGKFunction();
        function nextQuestion(){
            index++;
            mainGKFunction();
            prompt1.style.background ='rgba(0, 0, 0, 0.9)';
            prompt2.style.background ='rgba(0, 0, 0, 0.9)';prompt3.style.background ='rgba(0, 0, 0, 0.9)';prompt4.style.background ='rgba(0, 0, 0, 0.9)';
            if(index == 9){
                container.classList.remove('active')
                document.querySelector('.score-div').classList.add('active');
                document.querySelector('.score-div').innerHTML = `
                <h1 class="score"> YOU GOT ${score}/10 </h1>

                <button class="repeat">Play it Again</button>
            
                `;
                document.querySelector(".repeat").addEventListener('click', ()=>{
                    gKnowledge();
                });
                console.log(index);
            }
        }

    }

    get();
}



computerBtn.addEventListener('click', computers);

function computers(){
    let index = 0;
    document.querySelector('.score-div').classList.remove('active')
    container.classList.add('active');
    async function get(){
        let response = await fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple");
        let data = await response.json();
        console.log(data);

        function mainComputersFunction(){
            category.innerHTML = "Category: " + data.results[index].category;
            difficulty.innerHTML = "Difficulty: " + data.results[index].difficulty;
            question.innerHTML = data.results[index].question;
            
            prompt1.innerHTML = data.results[index].incorrect_answers[0];
            prompt2.innerHTML = data.results[index].incorrect_answers[2];
            prompt4.innerHTML = data.results[index].incorrect_answers[1];
            prompt3.innerHTML = data.results[index].correct_answer;

            console.log(index);

            prompt3.addEventListener('click', correct);
            prompt1.addEventListener('click', wrongAnswer1);
            prompt2.addEventListener('click', wrongAnswer2);
            prompt4.addEventListener('click', wrongAnswer4);

            function wrongAnswer1(){
                prompt3.style.background = "green";
                prompt1.style.background = "red";
            }
            function wrongAnswer4(){
                prompt3.style.background = "green";
                prompt4.style.background = "red";
            }
            function wrongAnswer2(){
                prompt3.style.background = "green";
                prompt2.style.background = "red";
            }


            function correct(){
                prompt3.style.background = "green";
             
            }
            
        }

        nextBtn.addEventListener('click', nextQuestion);
        mainComputersFunction();
        function nextQuestion(){
            index++;
            mainComputersFunction();
            prompt1.style.background ='rgba(0, 0, 0, 0.9)';
            prompt2.style.background ='rgba(0, 0, 0, 0.9)';prompt3.style.background ='rgba(0, 0, 0, 0.9)';prompt4.style.background ='rgba(0, 0, 0, 0.9)';
            if(index == 9){
                container.classList.remove('active')
                document.querySelector('.score-div').classList.add('active');
                document.querySelector('.score-div').innerHTML = `
                <h1 class="score"> YOU GOT ${score}/10 </h1>

                <button class="repeat">Play it Again</button>
            
                `;
                document.querySelector(".repeat").addEventListener('click', ()=>{
                    gKnowledge();
                });
            }
        }

    }

    get();
}
 
const filmsBtn = document.querySelector('.films');



filmsBtn.addEventListener('click', films);

function films(){
    let index = 0;
    document.querySelector('.score-div').classList.remove('active')
    container.classList.add('active');
    async function get(){
        let response = await fetch("https://opentdb.com/api.php?amount=10&category=11&type=multiple");
        let data = await response.json();
        console.log(data);

        function mainFilmsFunction(){
            category.innerHTML = "Category: " + data.results[index].category;
            difficulty.innerHTML = "Difficulty: " + data.results[index].difficulty;
            question.innerHTML = data.results[index].question;
            
            prompt1.innerHTML = data.results[index].incorrect_answers[0];
            prompt2.innerHTML = data.results[index].incorrect_answers[2];
            prompt4.innerHTML = data.results[index].incorrect_answers[1];
            prompt3.innerHTML = data.results[index].correct_answer;

            console.log(index);

            prompt3.addEventListener('click', correct);
            prompt1.addEventListener('click', wrongAnswer1);
            prompt2.addEventListener('click', wrongAnswer2);
            prompt4.addEventListener('click', wrongAnswer4);

            function wrongAnswer1(){
                prompt3.style.background = "green";
                prompt1.style.background = "red";
            }
            function wrongAnswer4(){
                prompt3.style.background = "green";
                prompt4.style.background = "red";
            }
            function wrongAnswer2(){
                prompt3.style.background = "green";
                prompt2.style.background = "red";
            }


            function correct(){
                prompt3.style.background = "green";
             
            }
            
        }

        nextBtn.addEventListener('click', nextQuestion);
        mainFilmsFunction();
        function nextQuestion(){
            index++;
            mainFilmsFunction();
            prompt1.style.background ='rgba(0, 0, 0, 0.9)';
            prompt2.style.background ='rgba(0, 0, 0, 0.9)';
            prompt3.style.background ='rgba(0, 0, 0, 0.9)';prompt4.style.background='rgba(0, 0, 0, 0.9)';
            if(index == 9){
                container.classList.remove('active')
                document.querySelector('.score-div').classList.add('active');
                document.querySelector('.score-div').innerHTML = `
                <h1 class="score"> YOU GOT ${score}/10 </h1>

                <button class="repeat">Play it Again</button>
            
                `;
                document.querySelector(".repeat").addEventListener('click', ()=>{
                    gKnowledge();
                });
            }
        }

    }

    get();
}












/* shucfhidofoeqsjofclfjsj,csjxujsfnjuojdiudseirjkfdv_ cdeifdscix_cudf
hihdnksxçjosjojf
ojfjejfjeq






 */