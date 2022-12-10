/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

// particlesJS('particles-js',
  
//   {
    
//         "particles": {
//           "number": {
//             "value": 50,
//             "density": {
//               "enable": true,
//               "value_area": 1042.21783956259
//             }
//           },
//           "color": {
//             "value": "#3f00fc"
//           },
//           "shape": {
//             "type": "circle",
//             "stroke": {
//               "width": 0,
//               "color": "#3f00fe"
//             },
//             "polygon": {
//               "nb_sides": 5
//             },
//             "image": {
//               "src": "img/github.svg",
//               "width": 100,
//               "height": 100
//             }
//           },
//           "opacity": {
//             "value": 0.6012795228245711,
//             "random": false,
//             "anim": {
//               "enable": true,
//               "speed": 0.9744926547616141,
//               "opacity_min": 0.06496617698410762,
//               "sync": false
//             }
//           },
//           "size": {
//             "value": 7,
//             "random": true,
//             "anim": {
//               "enable": false,
//               "speed": 19.489853095232284,
//               "size_min": 0.1,
//               "sync": false
//             }
//           },
//           "line_linked": {
//             "enable": true,
//             "distance": 112.2388442605866,
//             "color": "#ffffff",
//             "opacity": 0.24051180912982842,
//             "width": 1.9240944730386271
//           },
//           "move": {
//             "enable": true,
//             "speed": 3.206824121731046,
//             "direction": "top",
//             "random": false,
//             "straight": false,
//             "out_mode": "out",
//             "bounce": false,
//             "attract": {
//               "enable": false,
//               "rotateX": 641.3648243462092,
//               "rotateY": 1200
//             }
//           }
//         },
//         "interactivity": {
//           "detect_on": "canvas",
//           "events": {
//             "onhover": {
//               "enable": true,
//               "mode": "repulse"
//             },
//             "onclick": {
//               "enable": false,
//               "mode": "push"
//             },
//             "resize": true
//           },
//           "modes": {
//             "grab": {
//               "distance": 400,
//               "line_linked": {
//                 "opacity": 1
//               }
//             },
//             "bubble": {
//               "distance": 400,
//               "size": 40,
//               "duration": 2,
//               "opacity": 8,
//               "speed": 3
//             },
//             "repulse": {
//               "distance": 200,
//               "duration": 0.4
//             },
//             "push": {
//               "particles_nb": 4
//             },
//             "remove": {
//               "particles_nb": 2
//             }
//           }
//         },
//         "retina_detect": true,
//         "config_demo": {
//           "hide_card": false,
//           "background_color": "#b61924",
//           "background_image": "",
//           "background_position": "50% 50%",
//           "background_repeat": "no-repeat",
//           "background_size": "cover"
//       }
//     }
  

// );
particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 50,
          "density": {
              "enable": true,
              "value_area": 1000
          }
      },
      "color": {
          "value": ["#5507fc"]
      },

      "shape": {
          "type": "circle",
          "stroke": {
              "width": 5,
              "color": "#5507fc"
          },
          "polygon": {
              "nb_sides": 5
          },
          "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
          }
      },
      "opacity": {
          "value": 0.6,
          "random": false,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 2,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 120,
          "color": "#5507fc",
          "opacity": 0.2,
          "width": 1.6
      },
      "move": {
          "enable": true,
          "speed": 3,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "grab"
          },
          "onclick": {
              "enable": false
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 140,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
});
