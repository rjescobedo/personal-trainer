$(function(){
//Login Modal
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");

    });

//Logout to index.html
$('#logoutButton').click(function(){
    window.location.href = 'index.html';
    return false;
})

//If Statement for Login
/* $('#signInToPage').click(function() {
    if ($('#clientSelection').click){
        window.location.href = 'client.html';
        return false;
    } else {
        window.location.href = 'trainer.html';
        return false;
    }
}); */

//Signin to Client Page
    $('#clientSelection').click(function(){
        window.location.href = 'client.html';
        return false;
    });

//Signin to Trainer Page
    $('#trainerSelection').click(function(){
        window.location.href = 'trainer.html';
        return false;
    });

//Chest Press Modal
    $('#chestPressButton').click(function(){
        $('#chestPressModal').modal('show');
    });

//Congrats Modal
    $('#upperBodyComplete').click(function(){
        $('#congratsModal').modal('show');
    });
    
    $('#lowerBodyComplete').click(function(){
        $('#congratsModal').modal('show');
    });

//Contact Modal
    $('#submitContact').click(function(){
        $('#contactModal').modal('show');
    });

//Footer Tooltips
    $('[data-toggle="tooltip"]').tooltip();

});
