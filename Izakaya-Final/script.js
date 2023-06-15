function openImage(img) {
	var modal = document.getElementById("modal");
	var modalImage = document.getElementById("modalImage");
  
	modal.style.display = "block";
	modalImage.src = img.src;
  }
  
  function closeImage() {
	var modal = document.getElementById("modal");
	modal.style.display = "none";
  }
  
  // Close the modal 
  window.onclick = function(event) {
	var modal = document.getElementById("modal");
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  };

  
  
