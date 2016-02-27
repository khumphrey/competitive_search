(function(){

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
		return 0;
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
	Using that, the heuristic function defined above, recursive calls,
	and standard JS should be sufficient.
	*/
	var minimax = function(state, depth, maximizingPlayer){
		//need some code here.
		return 0;
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
		*/
		var minimaxAB = function(state, depth, alpha, beta){
			//Need some code here.
		}
		return minimaxAB(state, depth, -10000,10000)
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
    function makeMove(state, depth, alpha, beta, maximizingPlayer)

    Input:
    state: A state (see state.js)
    
    Output: Returns an integer indicating the location
    to drop the piece.

    This should be the piece the next moving
    player wants to move, which is indicated by
    state.nextMovePlayer, which will be 'x' or 'o'
	*/
	var DEPTH = 6;
	var makeMove = function(state){
		//This might be useful
		var allLegalMoves = state.legalMoves();
		//Maaaybe this might be useful.
		var nextStates = state.nextStates();
		// To get a successor state following a move,
		// do the following.
		// var successor = state.move(someLegalMove)
		//
		// That will be useful.
		return allLegalMoves[Math.floor(Math.random()*allLegalMoves.length)];
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