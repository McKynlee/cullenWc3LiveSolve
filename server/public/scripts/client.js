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
    const myId = $( this ).data( 'id' );
    console.log( 'in completeTask:', myId );
    $.ajax({
        type: 'PUT',
        url: '/task/' + myId
    }).then( function( response ){
        console.log( 'back from PUT:', response );
        getTasks();
    }).catch( function( err ){
        console.log( err );
        alert( 'sedfgdf' )
    }) //end ajax
} // end completeTask

function createTask(){
    console.log( 'in createTask' );
    // get user input put in an object
    let objectToSend = {
        name: $( '#taskNameIn' ).val()
    } // end objectToSend
    // send to server via ajax POST
    $.ajax({
        type: 'POST',
        url: '/task',
        data: objectToSend
    }).then( function( response ){
        // update DOM
        getTasks();
    }).catch( function( err ){
        // pop alerts
        alert( 'uh uh...' );
        console.log( err );
    }) // end ajax
} // end createTask

function deleteTask(){
    const myId = $( this ).data( 'id' );
    console.log( 'in deleteTask:', myId );
    // ajax DELETE to server w/ id
    $.ajax({
        type: 'DELETE',
        url: '/task/' + myId
    }).then( function( response ){
        // update DOM
        console.log( 'back from DELETE:', response );
        getTasks();
    }).catch( function( err ){
        // catch any errors
        alert( 'problem!' );
        console.log( err );
    })
} // end deleteTask

function getTasks(){
    console.log( 'in getTasks' );
    // ajax GET call
    $.ajax({
        type: 'GET',
        url: '/task'
    }).then( function( response ){
        console.log( 'back from GET:', response );
        // empty the ul element
        let el = $( '#tasksOut' );
        el.empty();
        // loop through response
        for( let i=0; i< response.length; i++ ){
            // display each task on DOM
            let appendText = `<li><span class="taskName`;
            if( response[ i ].complete ){
                appendText += ` complete`; 
            }
            appendText += `" data-id="${ response[ i ].id }">${ response[ i ].name }</span>`;
            appendText += `<button class="deleteTaskButton" data-id="${ response[ i ].id }">Delete</button></li>`;
            el.append( appendText );
        } //end for
    }).catch( function( err ){
        console.log( err );
        alert( 'nope' );
    }) //end ajax
} //end getTasks