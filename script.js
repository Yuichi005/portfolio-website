const professions = [
    "Web Developer",
    "Graphic Designer",
    "Digital Artist",
    "Video Editor",
    "IT Student"
];

const profession =
    document.getElementById("profession");

let professionIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeAnimation() {

    const currentProfession =
        professions[professionIndex];

    if (!deleting) {

        profession.textContent =
            currentProfession.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentProfession.length
        ) {

            deleting = true;

            setTimeout(
                typeAnimation,
                1500
            );

            return;
        }

    } else {

        profession.textContent =
            currentProfession.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            professionIndex++;

            if (
                professionIndex >=
                professions.length
            ) {
                professionIndex = 0;
            }
        }
    }

    setTimeout(
        typeAnimation,
        deleting ? 50 : 100
    );
}

typeAnimation();


const pages =
    document.querySelectorAll(".page");

const pageButtons =
    document.querySelectorAll("[data-page]");

pageButtons.forEach(button => {

    button.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const targetPage =
                this.dataset.page;

            pages.forEach(page => {

                page.classList.remove(
                    "active"
                );

            });

            document
                .getElementById(
                    targetPage
                )
                .classList.add(
                    "active"
                );
        }
    );

});