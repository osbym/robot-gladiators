// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble']; 
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

    var fight = function(enemyName) {
        //repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        // place fight function code block here. . .
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
            
    //if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
    break;
    }
}

enemyHealth = enemyHealth - playerAttack;
// Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

    // award player money for winning
    playerMoney = playerMoney + 20;
    
    // leave while() loop since enemy is dead
    break;
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
  
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
//check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

    // function to start a new game
    var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

        for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {

            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    var pickedEnemyName = enemyNames[i];
    
    enemyHealth = 50;
    //call fight function with enemy-robot
    // use debugger to pause script from running and check what's going on at the moment in the code
    // debugger;
    fight(pickedEnemyName);

    
    //if player is still alive and we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {
        //as if player wants to use the store before the next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        //if yes, take them to the store() function
    if (storeConfirm) {
        shop();
       }
      }
    }
    //if player is not alive, break out of the loop and let endGame function run
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
  }
}
    
// after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
endGame();
 };
 // function to end the entire game
 var endGame = function() {
     window.alert("The game has now ended. Let's see how you did!");

// if player is still alive, player wins!
if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + '.');
} else {
    window.alert("You've lost your robot in battle!");
}

// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    startGame();
} else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
 };


// start first game when page loads
 startGame();

    




