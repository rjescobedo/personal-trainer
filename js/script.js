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
    
    $("#loginForm").submit(function(e){
        e.preventDefault();
        const form = this;
        if ( $('input[name="customRadioInline1"]:checked').val() === "client"){
            this.action = "client.html";
            form.submit();
        } else {
            this.action = "trainer.html";
            form.submit();
        }
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
    
    //Footer Tooltips
        $('[data-toggle="tooltip"]').tooltip();
    
    //Trainer Workout Modal
        $('#workoutSubmitButton').click(function(){
            $('#workoutSubmitModal').modal('show');
    });
    
    });
    