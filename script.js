/* =========================================================
   NOOF ABDUL RAHEEM - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================= MOBILE NAVIGATION ================= */

const navToggle =
    document.getElementById("nav-toggle");

const nav =
    document.getElementById("nav");

const body =
    document.body;


if (navToggle && nav) {

    navToggle.addEventListener(
        "click",
        () => {

            nav.classList.toggle("active");

            body.classList.toggle(
                "menu-open"
            );

            if (nav.classList.contains("active")) {

                navToggle.innerHTML = "✕";

            } else {

                navToggle.innerHTML = "☰";

            }

        }
    );

}


/* ================= CLOSE MOBILE MENU ================= */

document
    .querySelectorAll("#nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove("active");

                body.classList.remove(
                    "menu-open"
                );

                navToggle.innerHTML = "☰";

            }
        );

    });


/* ================= HEADER SCROLL ================= */

const header =
    document.getElementById("header");


function updateHeader() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("#nav a");


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 150;

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* ================= SMOOTH SCROLL ================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    !targetId
                ) {

                    return;

                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {

                    return;

                }

                event.preventDefault();

                const headerHeight =
                    header.offsetHeight;

                const targetPosition =
                    target.offsetTop -
                    headerHeight;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-text, " +
        ".highlight-card, " +
        ".skill-category, " +
        ".experience-item, " +
        ".project-featured, " +
        ".project-card, " +
        ".leadership-card, " +
        ".education-item"
    );


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

    }
);


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* ================= STAGGER SKILLS ================= */

const skillCards =
    document.querySelectorAll(
        ".skill-category"
    );


skillCards.forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 70}ms`;

    }
);


/* ================= STAGGER PROJECTS ================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    }
);


/* ================= DASHBOARD PARALLAX ================= */

const dashboard =
    document.querySelector(
        ".dashboard-card"
    );


if (
    dashboard &&
    window.matchMedia(
        "(min-width: 1051px)"
    ).matches
) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (window.innerWidth / 2 -
                    event.clientX) /
                80;

            const y =
                (window.innerHeight / 2 -
                    event.clientY) /
                100;

            dashboard.style.transform =
                `perspective(1000px)
                 rotateY(${x - 5}deg)
                 rotateX(${y + 2}deg)`;

        }
    );

}


/* ================= DYNAMIC YEAR ================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ================= EMAIL LINK ================= */

const emailLink =
    document.querySelector(
        ".contact-email"
    );


if (emailLink) {

    emailLink.addEventListener(
        "click",
        () => {

            console.log(
                "Opening email client..."
            );

        }
    );

}


/* ================= KEYBOARD ESCAPE ================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            nav.classList.contains("active")
        ) {

            nav.classList.remove(
                "active"
            );

            body.classList.remove(
                "menu-open"
            );

            navToggle.innerHTML = "☰";

        }

    }
);


/* ================= PAGE LOAD ================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
