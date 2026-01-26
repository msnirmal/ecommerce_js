const quizData = [
    {
      question: "What is the capital of France?",
      option: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: 2
    },
    
  ];

  let currentQuestion = 0;

  const quizQuestion = document.getElementById("question");
  const quizOptions = document.getElementById("options");
  const nextBtn = document.getElementById("next");
  const resetBtn = document.getElementById("reset")

  function showQuestion() {
    nextBtn.disabled = true;
    quizOptions.textContent = "";
    const q = quizData[currentQuestion];
    quizQuestion.textContent = q.question;

    for (let i=0; i < q.option.length; i++) {
        const btn = document.createElement("button");
        btn.textContent= q.option [i];
        btn.addEventListener('click', selectAnswer);
        quizOptions.appendChild(btn);      
    }
  }

  showQuestion()






  
  
 
  