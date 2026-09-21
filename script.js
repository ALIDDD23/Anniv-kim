// ========================================
// ELEMENT
// ========================================

const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");
const photoButton = document.getElementById("photoButton");
const whatsappButton = document.getElementById("whatsappButton");

const opening = document.getElementById("opening");
const surprise = document.getElementById("surprise");
const letter = document.getElementById("letter");
const photoSurprise = document.getElementById("photoSurprise");

const bgMusic = document.getElementById("bgMusic");
const lastSurprise =
    document.getElementById("lastSurprise");
const finalMessage =
    document.getElementById("finalMessage");


// ========================================
// MUSIK
// ========================================

let musicStarted = false;

function startMusic() {

    if (!musicStarted) {

        bgMusic.volume = 0.35;

        bgMusic.play()
            .then(() => {
                musicStarted = true;
            })
            .catch(() => {
                console.log("Musik belum bisa dimainkan.");
            });

    }

}


// ========================================
// OPENING → SURPRISE
// ========================================

startButton.addEventListener("click", () => {

    // Musik mulai ketika tombol pertama disentuh
    startMusic();

    // Hilangkan halaman opening
    opening.style.opacity = "0";

    opening.style.transform = "scale(1.05)";

    opening.style.transition =
        "opacity 1s ease, transform 1s ease";


    setTimeout(() => {

        opening.style.display = "none";

        // Tampilkan surprise
        surprise.classList.add("show");

        setTimeout(() => {
            surprise.classList.add("active");
        }, 100);

        // Scroll ke surprise
        surprise.scrollIntoView({
            behavior: "smooth"
        });

    }, 1000);

});


// ========================================
// SURPRISE → LETTER
// ========================================

nextButton.addEventListener("click", () => {

    letter.classList.add("show");

    setTimeout(() => {

        letter.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

});


// ========================================
// LETTER → PHOTO SURPRISE
// ========================================

photoButton.addEventListener("click", () => {

    photoSurprise.classList.add("show");

    setTimeout(() => {

        photoSurprise.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

    // Mulai ending surprise
    setTimeout(() => {

        const bubbles =
            document.querySelectorAll(".photo-bubble");

        // Bubble menyala satu per satu
        bubbles.forEach((bubble, index) => {

            setTimeout(() => {

                bubble.classList.add("surprise-bubble");

            }, index * 400);

        });

        // Bubble mulai berkumpul
        setTimeout(() => {

            const photoBubbles =
                document.querySelector(".photo-bubbles");

            photoBubbles.classList.add("final-arrangement");

            // Tampilkan pesan utama
            setTimeout(() => {

                finalMessage.classList.add("show");

                // Tampilkan pesan terakhir
                setTimeout(() => {

                    lastSurprise.classList.add("show");

                }, 900);

            }, 1500);

        }, 1800);

    }, 1200);

});


// ========================================
// BUBBLE FOTO
// ========================================

const photoBubbles =
    document.querySelectorAll(".photo-bubble");

photoBubbles.forEach((bubble) => {

    bubble.addEventListener("click", () => {

        bubble.classList.toggle("selected");

    });

});


// ========================================
// WHATSAPP
// ========================================

whatsappButton.addEventListener("click", () => {

    const phoneNumber = "6288801297799";

    const message =
        "(masukan kata kata kamu)";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(
        whatsappURL,
        "_blank"
    );

});

