document.getElementById('dropdownButton').addEventListener('click', function() {
    // Toggle the display of the dropdown menu
    var dropdownMenu = document.getElementById('myDropdown');
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'block';
    }
  });

  // Close the dropdown menu if the user clicks outside of it
  window.addEventListener('click', function(event) {
    var dropdownMenu = document.getElementById('myDropdown');
    if (!event.target.matches('#dropdownButton') && !event.target.matches('.dropdown-content a')) {
      dropdownMenu.style.display = 'none';
    }
  });
