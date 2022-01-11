console.log("script is loading");

//select the container of the game description
const description = document.querySelector("#description");
const buttons = document.getElementsByClassName("button");

let startIndex = 0;

function onPlay() {
	let ids = game.map((item) => item.id);

	showOptions(ids[startIndex]);
}

function start(index) {
	console.log('Game Has Loaded');
	showOptions(index);
}


function showOptions(nodeID) {
	const newDescriptionText = game.find((gameNode) => gameNode.id === nodeID);
	console.log(newDescriptionText);

	document.getElementById('third_btn').style.display = 'none';

	if (!newDescriptionText) {

		console.log('overflow!');

		document.getElementById('first_btn').style.display = 'none';
		document.getElementById('second_btn').style.display = 'none';
		document.getElementById('third_btn').style.display = 'inline';
		document.getElementById('third_btn').innerHTML = 'Play Again';



	} else {

		document.getElementById('first_btn').style.display = 'inline';
		document.getElementById('second_btn').style.display = 'inline';

		description.innerText = newDescriptionText.description;

		for (let i = 0; i < newDescriptionText.options.length; i++) {
    	buttons[i].innerText = newDescriptionText.options[i].text;
	}
  }

}

function onNextOption(event, btn){
	event.preventDefault();

	if (btn < 2) {
		const nextOption = game[startIndex].options;
		console.log(nextOption[btn].next);

		// if (startIndex < 0) {
		// 	startIndex = 0;
		// }

		// console.log('first btn is pressed: ' + nextOption[btn].text)

		if (!nextOption[btn].next) {
			description.innerText = nextOption[btn].scene;
			startIndex = -1;
		} else {
			startIndex = nextOption[btn].next;
		}
	} else {
		startIndex = 0;
	}

	onPlay();
}

// function buttonOptions() {
// 	const index = 
// }

//select the buttons to play the game


//function that adds the options and tracks the choice

//create a function that shows the options

//functions that shows the end of the game

//create an object that holds the text for our game and options

function nextOption(event) {
	event.preventDefault();
}

const game = [
  {
    id: 0,
    description: 'After A Long Day Of Work, You Feel Exhausted. You Should Head Home...',
    options: [
      {
        text: "Head Out To The Main Street",
        next: 1
      },
      {
        text: "Call A Taxi",
        scene: "The Ride To Center Ave Down Street Front House Was Cancelled. No Service Available."  
      }
    ]
  },
  {
    id: 1,
    description: 'You Are In Center Ave...',
    options: [
      {
        text: "Head Down The Street",
        next: 2
      },
      {
        text: "Cross The Street",
        next: 3       
      }
    ]
  },
  {
    id: 2,
    description: 'You Are In Center Ave Front Street',
    options: [
      {
        text: "Head Down To The Last House",
        scene: "You Arrived At A Friend's House And Decided To Spend The Night Hanging Out",
      },
      {
        text: "Head Down To The First House",
        scene: "You Arrived At A Co-Workers' House And Decided To Attend A Party",      
      }
    ]
  },
  {
    id: 3,
    description: 'You Are In Center Ave Down Street',
    options: [
      {
        text: "Head Down To The Last House",
        scene: "You Arrived At Your Neightbor's House And Spent The Night Helping Them Move Into Their New Home"
      },
      {
      	text: "Head Down to The First House",  
        scene: "You Arrived Home!"   
      }
    ]
  },
]

start(startIndex);