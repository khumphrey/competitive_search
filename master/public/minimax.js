(function(){



	/*
    function makeMove(state, depth, alpha, beta, maximizingPlayer)

    Input:
    state: A state (see state.js)
    
    Output: Returns an integer indicating the location
    to drop the piece.

    This function is the only function called
    by others.html and self.html.  Only changes to this
    (and to functions called by it) will influence
    the behavior of your agent.

    Note that minimax_specs.js doesn't test this at all.
    After all, it makes perfectly legal moves just with
    the code below...
	*/
	var DEPTH = 3;
	var makeMove = function(state){

		//To get all legal moves.
		//This will be useful.
		var allLegalMoves = state.legalMoves();

		// To get a successor state following a move,
		// do the following.  This will be useful.
		// var successor = state.move(someLegalMove)

		//To get the side which is moving (either
		//an 'x' or an 'o', do this.
		var playerMoving = state.nextMovePlayer;

		//You'll want to change this...		
		//Currently moves randomly.
		return max(allLegalMoves, function(move) {
			var suc = state.move(move)
			return minimax(suc, DEPTH, playerMoving)
		})
		return 0

		// return allLegalMoves[Math.floor(Math.random()*allLegalMoves.length)];
	}



	//Bonus function.  Might be useful.
	//Takes an array and a function, and returns 
	//the element of the array which gives the highest
	//value when fed into the function.
	var max = function(arr, func){
		return arr.reduce(function(tuple, cur, index){
			var value = func(cur)
			return (tuple.value >= value) ? tuple : {element: cur, value: value};
		},{element: arr[0], value: func(arr[0])}).element;
	}



	/*
	function heuristic(state, maximizingPlayer)

	Input:
	state: A state (see state.js)
	maximizingPlayer: The player who is maximizing ('x' or 'o');
	
	Output: A number evaluating how good the state is from
	the perspective of the player who is maximizing.
	
	The number should be higher the better the position is for the
	maximizing player, and lower the better the position is for
	the minimizing player.
	
	A useful method on state here would be .numLines, which takes an integer and a player
	like "state.numLines(2,'x')" and returns the number of lines of that length that 
	player. 
	
	You'll want to pass some of the tests defined in minimax_specs.js.
	If you have mocha installed generally, just type "mocha minimax_specs.js"
	at the command line in the correct folder to see if you
	pass it.
	*/
	var heuristic = function(state, maximizingPlayer){
		//Need some code here.
		var minPlayer = maximizingPlayer == 'x' ? 'o' : 'x',
				maxPlayer = maximizingPlayer || state.nextMovePlayer,
				fours = 4*(state.numLines(4, maxPlayer) - state.numLines(4, minPlayer)),
				threes = 3*(state.numLines(3, maxPlayer) - state.numLines(3, minPlayer)),
				twos = 2*(state.numLines(2, maxPlayer) - state.numLines(2, minPlayer));
		
		//if someone won then return 100 for max player and -100 for min; if draw return 0	
		if (state.someoneWon()) {
			return state.winner() == max ? 100 : -100
		} else if(state.isDraw()) {
			return 0
		}

		//if there are 3 in a row -- does it have an opening at the end of the 3
		//are there 2 in a row -- does it have an opening at the end
		//are there many openings in the middle
		if (max == 'x') {
			return twos+threes + fours + 0
			// (2*state.numLines(2, 'x')) + (3*state.numLines(3, 'x')) - (2*state.numLines(2, 'o')) - (3*state.numLines(3, 'o')) + 0			
		} 
		return -twos - threes - fours - 0
	}



	/*
    function minimax(state, depth, maximizingPlayer)

    Input:
    state: A state (see state.js)
    depth: An integer, >= 0.  The function should return the value
       of heuristic, defined above, if depth == 0.
    maximizingPlayer: 'x' or 'o'
    
    Output: Returns a number evaluating the state, just
    like heuristic does.
	
	You'll need to use state.nextStates(), which returns 
	a list of possible successor states to the state passed in
	as an argument.
	
	You'll also probably need to use state.nextMovePlayer,
	which returns whether the next moving player is 'x' or 'o',
	to see if you are maximizing or minimizing.

	That should be about all the API from State that you need to
	know, I believe.
	*/
	var minimax = function(state, depth, maximizingPlayer){
		var possibleStates = state.nextStates();
		var currentPlayer = state.nextMovePlayer;
		if (depth == 0 || possibleStates.length == 0) return heuristic(state, maximizingPlayer)
		else if (currentPlayer == maximizingPlayer) {
			return possibleStates.reduce(function(largestValueSoFar, aState){
				return Math.max(largestValueSoFar, minimax(aState, depth-1, maximizingPlayer))
			}, -10000)
		} else {
			return possibleStates.reduce(function(smallestValueSoFar, aState){
				return Math.min(smallestValueSoFar, minimax(aState, depth-1, maximizingPlayer))
			}, 10000)
		}
	}



	var minimaxAlphaBetaWrapper = function(state, depth, maximizingPlayer){
		/*
	    function minimaxAB(state, depth, alpha, beta, maximizingPlayer)

	    Input:
	    state: A state (see state.js)
	    depth: An integer, >= 0.  The function should return the value
	       of heuristic, defined above, if depth == 0.
	    alpha: What the maximizing player can certainly guarantee,
	       if it plays well.
	    beta: What the minimizing player can certainly guarantee, if
	       it plays well.
	    maximizingPlayer: 'x' or 'o'
	    
	    Output: Returns a number evaluating the state.

	    minimax_specs.js doesn't test this at all either.
		*/
		var minimaxAB = function(state, depth, alpha, beta){
			//Need some code here.

		}
		return minimaxAB(state, depth, -10000,10000)
	}	




	//Ignore everything here.
	if(typeof window === 'undefined'){
		module.exports = {
			makeMove: makeMove,
			minimax: minimax,
			heuristic: heuristic
		}
	}else {
		set('makeMove', makeMove)
	}

})()