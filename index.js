/*BUTTON ADD*/
$("#addbutton").on("click", function(e) 
{
	e.preventDefault();
	if ($("#TextInput").val() != "") 
	{
		let input = $("#TextInput").val();
		let flista = $("<li></li>");
		let newInput = "<p>" + input + "</p>";
		let checkB = $("<button type='submit' class='check-button'>Check</button>");
		let deleteB = $("<button type='submit' class='delete-button'>Delete</button>");
		flista.append(newInput);
		flista.append(checkB);
		flista.append(deleteB);
		$("#crearlista").append(flista);
		$("#TextInput").val("");	//Reset input text
	}
});

/*BUTTON CHECK*/
$("#crearlista").on("click",".check-button", function(e) 
{
	e.preventDefault();
	let checkline = $(this).parent().css("text-decoration");
	if (checkline === "line-through")
	{
		$(this).parent().css("text-decoration", "");
	}
	else
	{
		$(this).parent().css("text-decoration", "line-through");
	}
});

/*BUTTON DELETE*/
$("#crearlista").on("click", ".delete-button", function(e)
{
    event.preventDefault();
    $(this).parent().remove();
});
