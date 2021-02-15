$( document ).ready( onReady );

function onReady(){
    // get tasks on page load
    getTasks();
    // click handlers
    // elements on screen when page loads
    $( '#createTaskButton' ).on( 'click', createTask );
    // elements dynamically created
    $( '#tasksOut' ).on( 'click', '.taskName', completeTask );
    $( '#tasksOut' ).on( 'click', '.deleteTaskButton', deleteTask );
} // end onReady

function completeTask(){
    console.log( 'in completeTask' );
} // end completeTask

function createTask(){
    console.log( 'in createTask' );
} // end createTask

function deleteTask(){
    console.log( 'in deleteTask' )
} // end deleteTask

function getTasks(){
    console.log( 'in getTasks' );
    // ajax GET call
    $.ajax({
        type: 'GET',
        url: '/task'
    }).then( function( response ){
        console.log( 'back from GET:', response );
        // loop through response
        // display each task on DOM
    }).catch( function( err ){
        console.log( err );
        alert( 'nope' );
    }) //end ajax
} //end getTasks