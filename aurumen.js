// =========================
// GALLERIES
// =========================

const galleries = {

    bluete: [
        "pic/Blüte der Erinnerung/Blüte der Erinnerung.png",
        "pic/Blüte der Erinnerung/Blüte der Erinnerung).png",
        "pic/Blüte der Erinnerung/Blüte der Erinnerung (2).png"
    ],

    sahara: [
        "pic/Sahara Fragment/SaharaLumi1.png",
        "pic/Sahara Fragment/SaharaLumi12.png",
        "pic/Sahara Fragment/SaharaLumi22.png"
    ],

    kinderspielplatz: [
        "pic/Kinderspielplatz/Kinderspielplatz1.jpg",
        "pic/Kinderspielplatz/Kinderspielplatz2.png",
        "pic/Kinderspielplatz/Kinderspielplatz4.png",
        "pic/Kinderspielplatz/Kinderspielplatz8.png"
    ],

    kosmische: [
        "pic/Kosmische Fragmente/Kosmische Fragmente1.png",
        "pic/Kosmische Fragmente/Kosmische Fragmente2.png",
        "pic/Kosmische Fragmente/Kosmische Fragmente3.png"
    ],

    kristalline: [
        "pic/Kristalline Resonanz/Kristalline Resonanz1.png",
        "pic/Kristalline Resonanz/Kristalline Resonanz2.png"
    ],

    levitation: [
        "pic/Levitation/Harzuntergrund1.png",
        "pic/Levitation/Harzuntergrund2.png",
        "pic/Levitation/Harzuntergrund3.png"
    ],

    orbit: [
        "pic/Orbit of Colors/Fragmente1.png",
        "pic/Orbit of Colors/FragmenteLumi2.png",
        "pic/Orbit of Colors/FragmenteLumi4.png"
    ],

    spektrum: [
        "pic/Spektrum der Stille/Regenbogen2.jpg",
        "pic/Spektrum der Stille/Regenbogen3.JPG",
        "pic/Spektrum der Stille/Regenbogen4.jpg",
        "pic/Spektrum der Stille/Regenbogen4.png"
    ],

    strömung: [
        "pic/Strömung/Afrika1.png",
        "pic/Strömung/Afrika2.png"
    ],

    treibgut: [
        "pic/Treibgut Erinnerung/Treibgut.png",
        "pic/Treibgut Erinnerung/Treibgut3Lumi.png",
        "pic/Treibgut Erinnerung/TreibgutLumi2.png"
    ],

    urknall: [
        "pic/Urknall/Urknall1.png",
        "pic/Urknall/Urknall2.png",
        "pic/Urknall/Urknall3.png"
    ],

    zwichen: [
        "pic/Zwichen Stille und Bewegung/HármasLumi1.png",
        "pic/Zwichen Stille und Bewegung/HármasLumi2.png",
        "pic/Zwichen Stille und Bewegung/HármasLumi3.png"
    ],

    golden: [
        "pic/Golden Drift Miniatur.png"
    ],

    primordia: [
        "pic/Primordia/Primordia1.png",
        "pic/Primordia/Primordia Original.png",
        "pic/Primordia/Primordia2.png",
        "pic/Primordia/PrimordiaDetail.png"
    ],

    abyss: [
        "pic/Abbys Bloom/Abbys Bloom.png",
        "pic/Abbys Bloom/Abyss Bloom1.png",
        "pic/Abbys Bloom/Abyss Bloom2.png",
        "pic/Abbys Bloom/Abyss Bloom3.png",
        "pic/Abbys Bloom/Abyss Bloom4.png",
        "pic/Abbys Bloom/Abyss Bloom5.png",
        "pic/Abbys Bloom/Abyss Bloom6.png",
        "pic/Abbys Bloom/Abyss Bloom7.png"
    ],

    ignis: [
        "pic/Ki/Ki1.png",
        "pic/Ki/Ki2.png",
        "pic/Ki/Ki3.png",
        "pic/Ki/Ki4.png",
        "pic/Ki/Ki5.png",
        "pic/Ki/Ki6.png"
    ],

    triptichon: [
        "pic/Triptichon/Triptichon beleuchtet.png",
        "pic/Triptichon/Triptichon unbeleuchtet.png",
        "pic/Triptichon/Triptichon unbeleuchtet1.png",
        "pic/Triptichon/Triptichon unbeleuchtet3.png"
    ],

    oceanic: [
        "pic/Oceanic rift/Oceabic rift2.png",
        "pic/Oceanic rift/Oceanic rift Unterrahmen.png",
        "pic/Oceanic rift/Oceanic rift.png",
        "pic/Oceanic rift/Oceanic rift1.png",
        "pic/Oceanic rift/Oceanic rift2.png",
        "pic/Oceanic rift/Oceanic rift3.png",
        "pic/Oceanic rift/Oceanic rift4.png",
        "pic/Oceanic rift/Oceanrift galéria.png",
        "pic/Oceanic rift/Oveanic rift leuchtend mt Unterrahmen.png"
    ],
    
    genesis: [
        "pic/Genesis void/Genesis void unbeleuchtet.png",
        "pic/Genesis void/Genesis void10.png",
        "pic/Genesis void/Genesis void5.png",
        "pic/Genesis void/Genesis void6.png",
        "pic/Genesis void/Genesis void7.png",
        "pic/Genesis void/Genesis void8.png",
        "pic/Genesis void/Genesis void9.png",
        "pic/Genesis void/Genesis vuid2.png",
        "pic/Genesis void/Genesis vuid3.png",
        "pic/Genesis void/Genesis vuid4.png"
    ],

    singularity: [
        "pic/Singularity/UVBild2.png",
        "pic/Singularity/Singularität1.png",
        "pic/Singularity/Singularität2.png",
        "pic/Singularity/Singularität3.png",
        "pic/Singularity/Singularität5.png"
    ],

    zertifikat: [
        "pic/Zertifikat/zertifikat.png"
    ],
};

// =========================
// LIGHTBOX STATE
// =========================

let currentGallery = null;
let currentImage = 0;

// =========================
// OPEN GALLERY LIGHTBOX
// =========================

function openGallery(galleryName, imageIndex) {

    if (!galleries[galleryName]) return;

    currentGallery = galleryName;
    currentImage = imageIndex || 0;

    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightboxImg");

    if (!lightbox || !img) return;

    lightbox.style.display = "flex";

    showCurrentImage();
}

// =========================
// SHOW IMAGE
// =========================

function showCurrentImage() {

    if (!galleries[currentGallery]) return;

    const imgPath = galleries[currentGallery][currentImage];

    const lightboxImg = document.getElementById("lightboxImg");
    if (!lightboxImg) return;

    lightboxImg.src = imgPath;
}

// =========================
// NEXT / PREV
// =========================

function nextImage() {

    if (!galleries[currentGallery]) return;

    currentImage++;

    if (currentImage >= galleries[currentGallery].length) {
        currentImage = 0;
    }

    showCurrentImage();
}

function prevImage() {

    if (!galleries[currentGallery]) return;

    currentImage--;

    if (currentImage < 0) {
        currentImage = galleries[currentGallery].length - 1;
    }

    showCurrentImage();
}

// =========================
// CLOSE LIGHTBOX
// =========================

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

// =========================
// KEYBOARD CONTROL
// =========================

document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowRight") {
        nextImage();
    }

    if (e.key === "ArrowLeft") {
        prevImage();
    }

    if (e.key === "Escape") {
        closeLightbox();

        if (typeof closeModal === "function") closeModal();
        if (typeof closeCertificate === "function") closeCertificate();
    }
});

// =========================
// MODAL
// =========================

function openModal(title, text) {

    const modal = document.getElementById("artModal");
    if (!modal) return;

    modal.style.display = "flex";

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = text;
}

function closeModal() {

    const modal = document.getElementById("artModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// =========================
// ARTWORKS
// =========================

const artworks = [
    {
        title: "Blüte der Erinnerung",
        image: "img/bluete.jpg",
        description: "Eine kraftvolle Skulptur über Erinnerung und Vergänglichkeit.",
        specs: {
            material: "Resin, Pigmente",
            size: "30 × 25 cm",
            weight: "1.5 kg"
        }
    },
    {
        title: "Sahara Fragment",
        image: "img/sahara.jpg",
        description: "Wüstenästhetik im Sonnenuntergang.",
        specs: {
            material: "Resin, Ockerpigmente",
            size: "20 × 18 cm",
            weight: "0.7 kg"
        }
    },
    {
        title: "Kinderspielplatz",
        image: "img/kinder.jpg",
        description: "Farbenexplosion aus Kindheitsenergie.",
        specs: {
            material: "Resin, Glas",
            size: "30 × 25 cm",
            weight: "1.9 kg"
        }
    }
];

// =========================
// ARTWORK OPEN
// =========================

function openArtwork(index) {

    const art = artworks[index];
    if (!art) return;

    openModal(art.title, art.description);

    document.getElementById("modalSpecs").innerHTML = `
        <hr>
        <p><strong>Material:</strong> ${art.specs.material}</p>
        <p><strong>Size:</strong> ${art.specs.size}</p>
        <p><strong>Weight:</strong> ${art.specs.weight}</p>
    `;
}

// =========================
// ARTWORK BY NAME
// =========================

function openArtworkByName(name) {

    const art = artworks.find(a => a.title === name);
    if (!art) return;

    openModal(art.title, art.description);
}

// =========================
// CERTIFICATE
// =========================

function openCertificate() {

    const modal = document.getElementById("certificateModal");
    if (modal) modal.style.display = "block";
}

function closeCertificate() {

    const modal = document.getElementById("certificateModal");
    if (modal) modal.style.display = "none";
}

// =========================
// ACCORDION – az egész oldalon max. 1 nyitott kártya
// =========================

document.addEventListener("DOMContentLoaded", function () {

    document.body.addEventListener('show.bs.collapse', function (e) {

        document.querySelectorAll('.collapse.show').forEach(function (openItem) {

            if (openItem !== e.target) {
                bootstrap.Collapse.getOrCreateInstance(openItem).hide();
            }

        });
    });
});

// =========================
// CARD SLIDER (AUTO)
// =========================

document.querySelectorAll(".art-slider").forEach(slider => {

    const images = slider.querySelectorAll(".slider-image");

    if (!images.length) return;

    let current = 0;

    setInterval(() => {

        images[current].classList.remove("active");

        current++;

        if (current >= images.length) {
            current = 0;
        }

        images[current].classList.add("active");

    }, 3000);
});

// =========================
// FOOTER MODAL
// =========================

function openFooterModal(type) {

    const source =
        document.getElementById("content-" + type);

    if (!source) return;

    const title =
        source.querySelector("h2");

    document.getElementById(
        "footerModalBody"
    ).innerHTML = source.innerHTML;

    document.getElementById(
        "footerModal"
    ).classList.add("open");

    document.body.style.overflow = "hidden";
}

function closeFooterModal() {

    document.getElementById(
        "footerModal"
    ).classList.remove("open");

    document.body.style.overflow = "";
}

// ESC billentyűvel is zárható
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeFooterModal();
});

// Háttérre kattintva is zárható
document.getElementById('footerModal') && 
document.getElementById('footerModal').addEventListener('click', function(e) {
    if (e.target === this) closeFooterModal();
});
// =========================
// FOOTER MODAL
// =========================

function openFooterModal(type) {

    const source = document.getElementById("content-" + type);
    if (!source) return;

    document.getElementById("footerModalBody").innerHTML = source.innerHTML;
    document.getElementById("footerModal").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeFooterModal() {

    const modal = document.getElementById("footerModal");
    if (!modal) return;

    modal.classList.remove("open");
    document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("footerModal");
    if (modal) {
        modal.addEventListener("click", function (e) {
            if (e.target === this) closeFooterModal();
        });
    }
});