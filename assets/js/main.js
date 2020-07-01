document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    const $navbarLink = Array.prototype.slice.call(document.querySelectorAll('.Plink'), 0);
    const $home = document.getElementById("home");
    const $function = document.getElementById("function");
    const dropdown = document.querySelector('.Pdropdown');

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
    if ($navbarLink.length > 0) {

        // Add a click event on each of them
        $navbarLink.forEach( nl => {
            nl.addEventListener('click', () => {
                console.log(nl.id)
                if(nl.id === "function") {
                    $home.classList.remove('is-active');
                    $function.classList.add('is-active');
                } else if(nl.id === "home") {
                    $function.classList.remove('is-active');
                    $home.classList.add('is-active');
                }
                $navbarBurgers.forEach( el => {
                    const target = document.getElementById((el.dataset.target));
                    target.classList.remove('is-active');
                    el.classList.remove('is-active')
                });
            });
        });
    }/*
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdown.classList.toggle('is-active');
    });*/
});

