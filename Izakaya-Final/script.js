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

document.getElementById('navbar').addEventListener('click', (e)=>{
	document.getElementById('navbar').classList.toggle('active');
})

var slider = tns({
	container: '.cards',
	items:1,
	gutter:20,
	slideBy:"page",
	autoplayButton: false,
	controlsPosition: 'bottom',
	navPosition: 'bottom',
	controlsText: ["&laquo prev", "next &raquo"],
	responsive:{
		720:{
			items:2,
		},
		980:{
			items:3,
		},
	}
}); 

  
  
