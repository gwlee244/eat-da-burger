$(document).ready(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("burgerid");

        var devouredBurger = {
            devoured: true
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function () {
            console.log("changed burger", id);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#newBurgerEnter").val(),
          devoured: $("[name=devoured]:checked").val()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
})
