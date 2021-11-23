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

//Signin to New Page
    $('#signInToPage').click(function(){
        window.location.href = 'client.html';
        return false;
    })

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
});
