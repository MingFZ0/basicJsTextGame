console.log("script is loading");

// select the container of the game description
const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");

// Id node where the game starts
let startIndex = 0;

// function that starts the game
function startAdventure(textAdventureIndex) {
  console.log("Adventure has started");
  showAdventureOptions(textAdventureIndex);
}

// create a function that shows the description
function showAdventureOptions(textAdventureID) {
  // check fisrt

  const newDescriptionText = textAdventure.find(
    (gameNode) => gameNode.id === textAdventureID
  );
  if (!newDescriptionText.options) {
    // hide button
    document.getElementById("first_btn").style.display = "none";

    // show description
    descriptionText.innerHTML = newDescriptionText.message;

    document.getElementById("second_btn").innerHTML = "Play Again";
    return;
  }

  descriptionText.innerText = newDescriptionText.description;
  // iterate through the buttons and insert the option text in each button
  for (let i = 0; i < newDescriptionText.options.length; i++) {
    //console.log(newDescriptionText.options[i].buttontext);
    optionButtons[i].innerText = newDescriptionText.options[i].buttontext;
  }
}

// function that tracks options and passes the id to the showAdventureOptions function
function buttonOptions() {
  const adventureIndex = textAdventure.find(
    (gameNode) => gameNode.id === startIndex
  );

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons.addEventListener("click", function () {});
  }
}

function onPlay() {
  let ids = textAdventure.map((item) => {
    return item.id;
  });

  if (startIndex > ids.length - 1) {
    startIndex = 0;
  }

  // show
  showAdventureOptions(ids[startIndex]);
}

function onNextOption(event) {
  event.preventDefault();

  startIndex++;

  onPlay();
}

function onPlayAgain(event) {
  event.preventDefault();

  // show button
  document.getElementById("first_btn").style.display = "inline";

  startIndex = 0;

  onPlay();
}

// optional: function that shows end of the game

// create and object that holds the text for our game and options and also tracks state

const game = [
  {
    id: 1,
    description: 'After A Long Day Of Work, You Feel Exhausted. You Should Head Home...',
    options: [
      {
        text: "Head Out To The Main Street",
        next: 2
      },
      {
        text: "Call A Taxi",
        return: true,
        scene: "The Ride To Center Ave Down Street Front House Was Cancelled. No Service Available."  ,  
      }
    ]
  },
  {
    id: 2,
    description: 'You Are In Center Ave...',
    options: [
      {
        text: "Head Down The Street",
        nexttext: 3
      },
      {
        text: "Cross The Street",
        nextText: 4       
      }
    ]
  },
  {
    id: 3,
    description: 'You Are In Center Ave Front Street',
    options: [
      {
        text: "Head Down To The Last House",
        return: true,
        scene: "You Arrived At A Friend's House And Decided To Spend The Night Hanging Out",
      },
      {
        text: "Head Down To The First House",
        return: true,
        scene: "You Arrived At A Co-Workers' House And Decided To Attend A Party",      
      }
    ]
  },
  {
    id: 4,
    description: 'You Are In Center Ave Down Street',
    options: [
      {
        text: "Head Down To The Last House",
        setState: { headback: true },
        scene: "You Arrived At Your Neightbor's House And Spent The Night Helping Them Move Into Their New Home"
      },
      {
        text: "You Arrived Home!",
        setState: { headback: true }     
      }
    ]
  },
]

onPlay()