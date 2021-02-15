$( document ).ready( onReady );

function onReady(){
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