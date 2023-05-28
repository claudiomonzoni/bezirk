// importo gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({ repeat: 0 });

tl.from(
  "img",
  {
    stagger: 0.1,
    y: -200,
    opacity: 0,
    duration: 1,
  },
  "-=.5"
);

gsap.from(
  "input, select, #contactoBtn",
  {
    scrollTrigger: {
      trigger: "input, select",
    },
    stagger: 0.1,
    y: -80,
    opacity: 0,
    duration: 1,
  },
  "=.6"
);

gsap.from(
  "nav, ul, li",
  {
    scrollTrigger: {
      trigger: "nav",
    },
    stagger: 0.1,
    y: 80,
    opacity: 0,
    duration: 1,
  },
  "-=.8"
);

gsap.from(
  "#social",
  {
    scrollTrigger: {
      trigger: "#social",
    },
    stagger: 0.1,
    y: 80,
    opacity: 0,
    duration: 1,
  },
  "-=.5"
);

window.$ = require("jquery");

$(document).ready(function () {
  $("#contactoBtn").click(function (e) {
    var nombre = $("#nombre").val();
    var fecha = $("#fecha").val();
    var celular = $("#celular").val();
    var edo = $("#edo").val();
    var curso = $("#curso").val();
    var promos  = $("#promos").val();

    $("#msj").empty(); // To empty previous error/success message.
    // Checking for blank fields.

    if (
      nombre == "" ||
      fecha == "" ||
      celular == "" ||
      curso == "")
       {
      alert("Por favor llena todos los campos");
    } else {
      $.post(
        "contacto.php",
        {
          nombre1: nombre,
          fecha1: fecha,
          celular1: celular,
          edo1: edo,
          curso1: curso,
          promos1: promos,
        },
        function (data) {
          $("#msj").append(data); // Append returned message to message paragraph.
          if (
            data == "Gracias por tu registro, pronto un asesor se pondra en contacto contigo 😎"
          ) {
            $("#formu").reset(); // To reset form fields on success.
          }
        }
      );
    }

    e.preventDefault();
  });
});
// cargar modulos solo por secciones
// switch (document.location.pathname)
// {
//   case '/seccion':
//   break

//   default:
// }
