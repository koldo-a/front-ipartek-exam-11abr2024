function toggleVisibility() {
    var navbar = document.getElementById("navbar");
    // Toggle the 'show-navbar' class when clicking the burger menu
    navbar.classList.toggle("show-navbar");
    console.log("toggleVisibility: "+navbar.classList);
}