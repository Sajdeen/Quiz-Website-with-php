const themeToggle = document.getElementById("theme-toggle");
const toggleIcon = document.getElementById("theme-icon");


themeToggle.addEventListener('click',() =>
    {
        console.log("button clicked");
        document.body.classList.toggle('darkmode');

        if  (document.body.classList.contains('dark-mode')){
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        else{
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        });

