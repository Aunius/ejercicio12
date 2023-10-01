document.addEventListener("DOMContentLoaded", () => {

        const pantalla = document.querySelector(".pantalla");
        const botones = document.querySelectorAll(".boton");

        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                let botonApretado = boton.textContent;
                console.log(botonApretado);

                if (boton.id === "ac") {
                    pantalla.textContent = "0";
                    return;
                };

                if (boton.id === "borrar") {
                    if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                        pantalla.textContent = "0";
                    } else {
                        pantalla.textContent = pantalla.textContent.slice(0, -1);
                        return;
                    }
                };

                if (boton.id === "igual") {
                    try {
                        pantalla.textContent = eval(pantalla.textContent);
                    } catch {
                        pantalla.textContent = "Error!";
                    }
                    return;
                };

                if (pantalla.textContent === "0") {
                    pantalla.textContent = botonApretado;
                } else { pantalla.textContent += botonApretado; }
            });
        });
    });
