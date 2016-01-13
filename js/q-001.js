/**
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

 Find the sum of all the multiples of 3 or 5 below 1000.
 *
 *
 *
 **/

(function () {
        var sum = 0;
        for ( j = 0; j < 10; j ++ ) {
            if ( ( j % 3 == 0 ) || ( j % 5 == 0) ) {
                sum += j;
            }
        }
        document.getElementById("q-001" ).innerHTML = sum;
    }
)();