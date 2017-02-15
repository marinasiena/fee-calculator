// TODO: DEFINE ANY VARIABLES HERE
( function() {

	const Calculator = function() {

		let storedOperation = [];
		let result = null;

		/**
		 * 		EDIT ME!
		 *
		 * This function is called each time a button is clicked. You must decide what
		 * to do in each case (most likely call another function).
		 *
		 * @param  {String} buttonValue   The value of the button that was clicked on, for example 6 or "+"
		 */


		function handleButtonClick( buttonValue ) {

			updateDisplay( buttonValue );
			if ( buttonValue == 'c' ) {
				storedOperation = [];
				clearDisplay();

			} else if ( buttonValue != '=' ) {
				storedOperation.push( buttonValue );

			} else {
				result = eval( storedOperation.join( '' ) );
				// console.log( 'storedOperation: ', storedOperation, '= pressed' );
				clearDisplay();
				updateDisplay( result );
			}

		} //end handleButtonClick

		/** **************************************************************
		 * These are our tests. If any of them fail you will see a message
		 * in the developer tools "Console" - in which case the assignment
		 * will NOT be considered complete!
		 *
		 *                  DO NOT CHANGE THESE LINES
		 ****************************************************************/

		document.querySelector( '.run-tests' ).addEventListener( 'click', function() {
			console.info( 'Running tests...' );
			var testOutput = document.querySelector( '.display figure' );
			clearDisplay();

			try {

				// Button click handler (addition)
				handleButtonClick( 1 );
				console.assert( testOutput.innerHTML === '1', 'pressing `1` did not result in "1" in the display (instead: ' + testOutput.innerHTML + ')' );
				handleButtonClick( 0 );
				console.assert( testOutput.innerHTML === '10', testOutput.innerHTML, 'pressing `0` did not result in correct display (expected "10", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( '+' );
				console.assert( testOutput.innerHTML === '10+', testOutput.innerHTML, 'pressing `+` did not result in correct display (expected "10+", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( 7 );
				console.assert( testOutput.innerHTML === '10+7', testOutput.innerHTML, 'pressing `7` did not result in correct display (expected "10+7", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( '=' );
				console.assert( testOutput.innerHTML === '17', testOutput.innerHTML, 'pressing `=` did not result in correct display (expected "17", but saw: ' + testOutput.innerHTML + ')' );

				// Clear
				handleButtonClick( 'c' );
				console.assert( testOutput.innerHTML === '', testOutput.innerHTML, 'pressing `C` did not clear the display' );
				handleButtonClick( 1 );
				handleButtonClick( '+' );
				handleButtonClick( 1 );
				handleButtonClick( '=' );
				console.assert( testOutput.innerHTML === '2', testOutput.innerHTML, 'Doing addition after clearing did not work! (`1+1=` expected to display: `2`, but saw: ' + testOutput.innerHTML + ')' );

				// Subtraction
				handleButtonClick( 'c' );
				handleButtonClick( 7 );
				handleButtonClick( '-' );
				handleButtonClick( 2 );
				handleButtonClick( '=' );
				console.assert( testOutput.innerHTML === '5', testOutput.innerHTML, '`7-2=` did not result in 5, instead: ' + testOutput.innerHTML + '' );

				// Division
				handleButtonClick( 'c' );
				handleButtonClick( 7 );
				handleButtonClick( '/' );
				handleButtonClick( 2 );
				handleButtonClick( '=' );
				console.assert( testOutput.innerHTML === '3.5', testOutput.innerHTML, '`7/2=` did not result in 3.5, instead: ' + testOutput.innerHTML + '' );

				// Multiplication
				handleButtonClick( 'c' );
				handleButtonClick( 7 );
				handleButtonClick( '*' );
				handleButtonClick( 2 );
				handleButtonClick( '=' );
				console.assert( testOutput.innerHTML === '14', testOutput.innerHTML, '`7*2=` did not result in 14, instead: ' + testOutput.innerHTML + '' );

				console.info( 'All tests have run. (If you see no errors, they all passed!)' );
				handleButtonClick( 'c' );

			} catch ( e ) {
				console.error( 'There was a syntax error during the test run:', e );
			}
		} );

		document.querySelector( '.run-epic-tests' ).addEventListener( 'click', function() {
			console.info( 'Running EPIC tests...' );
			var testOutput = document.querySelector( '.display figure' );
			clearDisplay();

			try {

				// Button click handler (addition)
				handleButtonClick( 1 );
				console.assert( testOutput.innerHTML === '1', 'pressing `1` did not result in "1" in the display (instead: ' + testOutput.innerHTML + ')' );
				handleButtonClick( 3 );
				console.assert( testOutput.innerHTML === '13', testOutput.innerHTML, 'pressing `3` did not result in correct display (expected "13", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( '+' );
				console.assert( testOutput.innerHTML === '13+', testOutput.innerHTML, 'pressing `+` did not result in correct display (expected "13+", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( 7 );
				console.assert( testOutput.innerHTML === '13+7', testOutput.innerHTML, 'pressing `7` did not result in correct display (expected "13+7", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( '=' );
				console.assert( testOutput.innerHTML === '20', testOutput.innerHTML, 'pressing `=` did not result in correct display (expected "20", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( '+' );
				console.assert( testOutput.innerHTML === '20+', testOutput.innerHTML, 'pressing `+` did not result in correct display (expected "20+", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( 5 );
				console.assert( testOutput.innerHTML === '20+5', testOutput.innerHTML, 'pressing `5` did not result in correct display (expected "20+5", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( '=' );
				console.assert( testOutput.innerHTML === '25', testOutput.innerHTML, 'pressing `=` did not result in correct display (expected "25", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( '/' );
				console.assert( testOutput.innerHTML === '25/', testOutput.innerHTML, 'pressing `/` did not result in correct display (expected "25/", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( 1 );
				console.assert( testOutput.innerHTML === '25/1', testOutput.innerHTML, 'pressing `1` did not result in correct display (expected "25/1", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( 0 );
				console.assert( testOutput.innerHTML === '25/10', testOutput.innerHTML, 'pressing `0` did not result in correct display (expected "25/10", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( '=' );
				console.assert( testOutput.innerHTML === '2.5', testOutput.innerHTML, 'pressing `=` did not result in correct display (expected "2.5", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( '+' );
				console.assert( testOutput.innerHTML === '2.5+', testOutput.innerHTML, 'pressing `+` did not result in correct display (expected "2.5+", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( 2 );
				console.assert( testOutput.innerHTML === '2.5+2', testOutput.innerHTML, 'pressing `2` did not result in correct display (expected "2.5+2", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( '.' );
				console.assert( testOutput.innerHTML === '2.5+2.', testOutput.innerHTML, 'pressing `.` did not result in correct display (expected "2.5+2.", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( 3 );
				console.assert( testOutput.innerHTML === '2.5+2.3', testOutput.innerHTML, 'pressing `3` did not result in correct display (expected "2.5+2.3", but saw: ' + testOutput.innerHTML + ')' );
				handleButtonClick( '=' );
				console.assert( testOutput.innerHTML === '4.8', testOutput.innerHTML, 'pressing `=` did not result in correct display (expected "4.8", but saw: ' + testOutput.innerHTML + ')' );

				console.info( 'All tests have run. (If you see no errors, they all passed!)' );
				handleButtonClick( 'c' );

			} catch ( e ) {
				console.error( 'There was a syntax error during the test run:', e );
			}
		} );


		/**
		 * 		DO NOT CHANGE ANY LINES BELOW HERE!!
		 *
		 * This event handler will fire for ALL button clicks. You need to decide
		 * what to do based on which button was clicked in the handler function
		 * defined above.
		 */
		[].slice.call( document.querySelectorAll( 'button' ) ).forEach( function( element ) {
			element.addEventListener( 'click', function() {
				var val = this.value;
				if ( Number( this.value ) || this.value === '0' ) {
					val = Number( this.value );
				}
				handleButtonClick( val );
			} );
		} );

		var display = document.querySelector( '.display figure' );

		function updateDisplay( text ) {
			display.innerText += text;
		}

		function clearDisplay() {
			display.innerText = '';
		}


	}; //end Calculator

	Calculator();

} )(); //end iife
