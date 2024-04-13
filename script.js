//This templet is created by Nishant Nepal, C0913072

document.getElementById('rollBtn').addEventListener('click', rollDice);

function rollDice() {
  // Generate random numbers for each dice
  var dice1Value = Math.floor(Math.random() * 6) + 1;
  var dice2Value = Math.floor(Math.random() * 6) + 1;
  
  // Update dice images
  document.getElementById('dice1').src = 'dice' + dice1Value + '.png';
  document.getElementById('dice2').src = 'dice' + dice2Value + '.png';

  // Calculate score difference
  var scoreDifference = Math.abs(dice1Value - dice2Value);
  
  // Update player scores
  var player1Score = parseInt(document.getElementById('player1Score').textContent);
  var player2Score = parseInt(document.getElementById('player2Score').textContent);
  
  if (dice1Value > dice2Value) {
    player1Score += scoreDifference;
  } else if (dice1Value < dice2Value) {
    player2Score += scoreDifference;
  }
  
  // Update score display
  document.getElementById('player1Score').textContent = player1Score;
  document.getElementById('player2Score').textContent = player2Score;
  
  // Check for winner
  if (player1Score >= 30) {
    document.getElementById('winnerMsg').textContent = 'Player 1 Wins!';
    disableRollButton();
  } else if (player2Score >= 30) {
    document.getElementById('winnerMsg').textContent = 'Player 2 Wins!';
    disableRollButton();
  }
}

function disableRollButton() {
  document.getElementById('rollBtn').disabled = true;
}
