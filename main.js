const rs = require('readline-sync');

const name = rs.question('What is your name? ');
console.log('**************************************************\nHi, ' +name + '! \nThis is the game. \nWelcome to the game. \nYour life will never be the same after playing the game. \nAre you ready to play the game?');
let ready;
ready = rs.question('Options: Yes, No ');
ready = ready.toLowerCase().trim();
console.log(`**************************************************`);
if(ready == 'yes')
{
  console.log(`Excellent. Prepare for the experience of a lifetime.`);
  stepOne();
}
else if(ready == 'no')
{
  console.log(`I understand. \nNot everyone is ready to play the game. \nPlease come back when you are ready to have the experience of a lifetime`);
}
else
{
  console.log(`If you can't even spell "yes" or "no" then you are not ready or worthy of experiencing the game. \nGoodbye.`);
}


function stepOne()
{
  let over = false;
  if(!over)
  {
    console.log('\nThe game is great. \n\nYou love the game. \n\nYou crave the game. \n\nYou need the game.');
    let excited = rs.question('\nOn a scale from 1-10, how excited are you? ');
    excited = Number(excited);
    console.log(`**************************************************`);

    if(excited <= 0)
    {
      console.log("\nYou are evil. \n\nYou are a fool. \n\nYou are not worthy. \n\nBegone!\n");
      over = true;
    }
    else if(excited < 5)
    {
      console.log(`\nYou are not very excited, but that will soon change. \nYou are taking your first step into a much larger world.\n`);
      stepTwo(excited);

    }
    else if(excited <= 10)
    {
      console.log(`\nIt is good that you are excited, but you still have no idea what you are about to experience. \n\nI am envious of the glory you are about to behold.\n`);
      stepTwo(excited);
    }
    else if(excited > 10)
    {
      console.log(`\nIt appears you possess some understanding of the incredible experience that is about to be yours. \nSavor it, for nothing will ever compare to the glory you are about to behold\n\n\n\n`);
      stepTwo(excited);
    }
    else
    {
      console.log(`\nIt would appear something has gone wrong. \n\nI cannot be sure of exactly what, but I am certain that it must be your fault. \n\nYou have no idea of the chaos that you have wrought with your foolish actions. \n\nBegone, and never return!`);
      over = true;
    }
  }
}
function stepTwo(excited)
{
  if(excited < 5)
  {
    let fun;
    console.log(`\nI bet you are excited now. \nYou probably regret giving such a low answer. \nAre you having great fun now?`);
    while(true)
    {
    fun = rs.question(`yes or no? `);
    fun = fun.toLowerCase().trim();
    console.log(`**************************************************`);
    if(fun === 'yes')
    {
      console.log(`I knew it. \nStill, the best is yet to come. You have thus far only seen a taste of the true wonder and awe that this game has to offer those fortunate enough to play it.\n`);
      stepThree(excited);
      break;
    }
    else if(fun === 'no')
    {
      console.log(`\nLiar. \n\nCheeky liar. \n\nYour lies will rot your soul. \n`);
    }
    else
    {
      console.log(`\nTry again. You have pathetically failed to provide an adequate answer. \n\nPerhaps you were not ready for the glory of this game and it has driven you mad. Pity.`);
    }
    }

  }
  else if(excited <= 10)
  {
    console.log(`We are having some difficulty figuring out your mood from your facial expression. Could you kindly remove the tape or whatever you have covering your webcam?`);
    let nothing = rs.question('simply press return when you have done that.');
    console.log(`**************************************************`);
    console.log(`That was but a test of loyalty. \n\nIt matters not whether you have truly removed it. \n`);
    stepThree(excited);
  }
  else if(excited > 10)
  {
    console.log(`\nYou are incredibly excited, as well you should be. \nTo continue, plese enter in your credit card information to access the premium version.`);
    let cardNumber = rs.question('Please Enter card number');
    console.log(`**************************************************`);
    let expDate = rs.question('Please enter the expiration date in the form mm/dd/yyyy');
    console.log(`**************************************************`);
    let secCode = rs.question('Enter the security code, the 3 digit code usually found on the back of the card.');
    console.log(`**************************************************`);
    stepThree(excited, cardNumber, expDate, secCode);
  }
  else
  {
    console.log(`\nIt would appear something has gone wrong. \n\nI cannot be sure of exactly what, but I am certain that it must be your fault. \n\nYou have no idea of the chaos that you have wrought with your foolish actions. \n\nBegone, and never return!`);
    over = true;
  }
}
function stepThree(excited, cardNumber, expDate, secCode)
{
  if(excited < 5)
  {
    console.log(`\nYou were not very excited to begin. \nBut now you are. \nYou are having great fun. \nYou love the game. \nThe game is your life.`);
    console.log(`\nAt this poing you must decide the difficulty level for the remainder of your journey worthy of Odysseus himself.`);
    let difficulty;
    while(true)
    {
      difficulty = rs.question('Please enter easy, medium, or hard.\n');
      difficulty = difficulty.toUpperCase().trim();
      console.log(`**************************************************`);
      if(difficulty == 'EASY' || difficulty == 'MEDIUM' || difficulty == 'HARD')
      {
        stepFour(excited, difficulty);
        break;
      }
      else
      {
        console.log(`That's not an option!`);
      }
    }

  }
  else if(excited <= 10)
  {
    console.log(`You were excited. And now you are loving the game even more. \n\nYou have never had more fun in your life.\n\nThe game is your life. \n\nNothing else matters anymore.\n\nYou belong to the game, and you love it.`);
    console.log(`\nAt this poing you must decide the difficulty level for the remainder of your journey worthy of Odysseus himself.\n`);
    let difficulty;
    while(true)
      {
      difficulty = rs.question('Please enter easy, medium, or hard.\n');
      difficulty = difficulty.toUpperCase().trim();
      console.log(`**************************************************`);
      if(difficulty == 'EASY' || difficulty == 'MEDIUM' || difficulty == 'HARD')
      {
        stepFour(excited, difficulty);
        break;
      }
      else
      {
        console.log(`That's not an option!`);
      }
    }
  }
  else if(excited > 10)
  {
    console.log(`[PREMIUM]$10,000 has been charged to credit card number ${cardNumber}.`);
    console.log(`[PREMIUM]At this poing you must decide the difficulty level for the remainder of your journey worthy of Odysseus himself.\n`);

    let difficulty;
    while(true)
    {
      difficulty = rs.question('\n[PREMIUM]Please enter easy, medium, or hard. \n[PREMIUM]For premium players, we recommend hard, as you alone can handle it.\n');
      difficulty = difficulty.toUpperCase().trim();
      console.log(`**************************************************`);
      if(difficulty == 'EASY' || difficulty == 'MEDIUM' || difficulty == 'HARD')
      {
        stepFour(excited, difficulty, cardNumber, expDate, secCode);
        break;
      }
      else
      {
        console.log(`[PREMIUM]That's not an option!`);
      }
    }



    // let difficulty = rs.question('\n[PREMIUM]Please enter easy, medium, or hard. \n[PREMIUM]For premium players, we recommend hard, as you alone can handle it.\n');
    // difficulty = difficulty.toUpperCase();
    // console.log(`**************************************************`);
    // stepFour(excited, difficulty, cardNumber, expDate, secCode);

  }
  else
  {
    console.log(`\nIt would appear something has gone wrong. \n\nI cannot be sure of exactly what, but I am certain that it must be your fault. \n\nYou have no idea of the chaos that you have wrought with your foolish actions. \n\nBegone, and never return!`);
    over = true;
  }
}
function stepFour(excited, difficulty, cardNumber, expDate, secCode)
{
  if(excited < 5)
  {
    console.log(`\n[${difficulty}]The Persians used to say that whenever making an important decision, it is important to discuss it once sober and once over wine.`);
    console.log(`[${difficulty}]Because you initially replied with minimal excitement to this obviously life-changing game, you must have made the decision sober. \n[${difficulty}]Xerxes would be disappointed.`);
    let useless = rs.question('[' + difficulty + ']Please have a some wine and return. Press enter when you\'ve returned');
    console.log(`**************************************************`);
    excited = rs.question('[' + difficulty + ']Now that you\'have had some wine, how excited are you on a scale of 1-10? ');
    console.log(`**************************************************`);
    if(excited < 5)
    {
      stepFive(excited, difficulty);
    }
    else
    {
      stepTwo(excited);
    }
  }
  else if(excited <= 10)
  {
    console.log(`[${difficulty}]Did you know that in some insect species, the female will impregnate the male with the eggs. \n[${difficulty}]The tool used to accomplish such a task is known as an ovipositor.\n`);
    console.log(`[${difficulty}]You were approached by an ice goblin. What do you do?`);

    let action;
    while(true)
    {
      action = rs.question('[' + difficulty + ']What do you do? (Options: attack, defend, run)');
      action = action.toLowerCase().trim();
      console.log(`**************************************************`);
      if(action == 'attack')
      {
        console.log(`[${difficulty}]The ice goblin cries out in pain. Witnesses call the police who promptly arrest you for assault with a deadly weapon. What were you doing with a sword? The ice goblin merely wanted to hand you a pamphlet and ask if you had time to discuss a wonderful life-changing path through the Church of Scientology.`);
        stepFive(excited, difficulty, action);
        break;
      }
      else if(action == 'defend')
      {
        console.log(`[${difficulty}]The ice goblin takes a second to recover his breath, hands you a pamphlet, and invites you to join him at the local Scientology chapter for a potentially life-changing meeting.`);
        stepFive(excited, difficulty, action);
        break;
      }
      else if(action == 'run')
      {
        console.log(`[${difficulty}]The ice goblin caught up with you. They're pretty fast, you know. You didn't really stand a chance.`);
      }
      else
      {
        console.log(`[${difficulty}]I didn't give you that option! You're under attack from an ice goblin and you're messing around?? Do you KNOW what an ice goblin can do to you?? Try again!`);
      }
    }

  }
  else if(excited > 10)
  {
    console.log(`[PREMIUM][${difficulty}]Did you know that before the invention of the eraser, \n[PREMIUM][${difficulty}]pieces of bread were used to remove pencil marks?`);
    console.log(`\n[PREMIUM][${difficulty}]The Lord has emerged from his office and approaches you. [PREMIUM][${difficulty}]Will you praise the Lord?`);
    let action;
    while(true)
    {
      action = rs.question(`[PREMIUM][${difficulty}]Praise the Lord? Options: yes, no `);
      action = action.toLowerCase().trim();
      console.log(`**************************************************`);
      if(action == 'yes')
      {
        console.log(`[PREMIUM][${difficulty}]The Lord accepts your praise and grants you your greatest desire`);
        let desire = rs.question(`[PREMIUM][${difficulty}]What is your greatest desire? `);
        console.log(`**************************************************`);
        stepFive(excited, difficulty, action, desire, cardNumber, expDate, secCode);
        break;
      }
      else if(action == 'no')
      {
        console.log(`[PREMIUM][${difficulty}]The Lord is angered by your lack of deference toward his greatness. \n[PREMIUM][${difficulty}]He curses you to live the rest of your life with eternally wet socks surrounded by a cloud of mosquitos `);
        stepFive(excited, difficulty, action, undefined, cardNumber, expDate, secCode);
        break;
      }
      else
      {
        console.log(`[PREMIUM][${difficulty}]Your answer is nonsense. \n[PREMIUM][${difficulty}]How hard is it to say yes or no? What is wrong with you? \n[PREMIUM][${difficulty}]Try again`);
      }
    }
  }
  else
    {
      console.log(`\nIt would appear something has gone wrong. \n\nI cannot be sure of exactly what, but I am certain that it must be your fault. \n\nYou have no idea of the chaos that you have wrought with your foolish actions. \n\nBegone, and never return!`);
      over = true;
    }
}
function stepFive(excited, difficulty, action, desire, cardNumber, expDate, secCode)
{
  if(excited < 5)
  {
    console.log(`[${difficulty}]Ok, clearly this isn't working out between us. Just go ahead and leave and continue living your miserable, meaningless life without the life-changing experience we could have offered you. But we have to pay for this somehow, so we're going to target you with ads that represent the exact opposite of your interests for the rest of your life. \n\n[${difficulty}]We hate you, ${name}`);
  }
  else if(excited <= 10 && action == 'attack')
  {
    console.log(`\n[${difficulty}]The ice goblin has agreed not to press charges on the condition that you accompany him to just one meeting at the local chapter of the Church of Scientology.`);
    let attend;
    while(true)
    {
      accept = rs.question(`[${difficulty}]Do you accept the offer?`);
      accept = accept.toLowerCase().trim();
      console.log(`**************************************************`);
      if(accept == 'yes')
      {
        console.log(`[${difficulty}]Consider yourself lucky that the ice goblin was so forgiving. Enjoy your meeting with the Church of Scientology. I am confident you will find what you are looking for and enjoy your life with the Church of Scientology. Thanks for playing, ${name}!`);
        break;
      }
      else if(accept == 'no')
      {
        console.log(`[${difficulty}]The ice goblin's hands are tied. He is forced to press charges. You are convicted of assualt with a deadly weapon and will spend the rest of your life in prison.\nTough break. Thanks for playing, ${name}!`);
        break;
      }
      else
      {
        console.log(`[${difficulty}]You must answer yes or no. Do not play games with the ice goblin or the Church of Scientology.`);
      }
    }
  }
  else if(excited <= 10 && action == 'defend')
  {
    let attend;
    console.log(`[${difficulty}]Would you like to attend this meeting?`);
    while(true)
    {
      attend = rs.question((`[${difficulty}]Yes or no?`));
      attend = attend.toLowerCase().trim();
      console.log(`**************************************************`);
      if(attend == 'yes')
      {
        console.log(`[${difficulty}]Enjoy your meeting with the Church of Scientology. I am confident you will find what you are looking for and enjoy your life with the Church of Scientology. Thanks for playing, ${name}!`);
        break;
      }
      else if(attend == 'no')
      {
        console.log(`[${difficulty}]Oh well. No one can force you to attend if you don't want to. Thank you for hearing out the ice goblin. Enjoy the rest of your life without experiencing all the amazing things that the Church of Scientology has to offer. Thanks for playing, ${name}!`);
        break;
      }
      else
      {
        console.log(`[${difficulty}]Please do not waste the ice goblin's time. Just answer the question properly.`);
      }
    }
  }
  else if(excited > 10 && action == 'yes')
  {
    console.log(`[PREMIUM][${difficulty}]Your desire is: ${desire} \nYour desire hs been granted. The Lord smiles upon you. Enjoy your new and improved life. Thanks for playing, ${name}!`);
  }
  else if(excited > 10 && action == 'no')
  {
    console.log(`[PREMIUM][${difficulty}]You should not have angered the Lord. Your life will be pain. You are a fool. Thanks for playing, ${name}!`);
  }
  else
  {
    console.log(`\nIt would appear something has gone wrong. \n\nI cannot be sure of exactly what, but I am certain that it must be your fault. \n\nYou have no idea of the chaos that you have wrought with your foolish actions. \n\nBegone, and never return!`);
    over = true;
  }
}
