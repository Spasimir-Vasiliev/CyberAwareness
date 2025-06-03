function checkAnswers() {
  let score = 0;
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  if (q1 && q1.value === 'b') score++;
  if (q2 && q2.value === 'c') score++;

  document.getElementById("result").innerText = `Your score: ${score}/2`;
}
