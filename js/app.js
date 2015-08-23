var PARAMS = {
    particles : {
        speed : {
            // speed max/min of particles
            // negatives or positives values
            max : 0.5, 
            min : -0.5
        },
        size : {
            // size max/min pf particles
            // positives values
            max : 1.5,
            min : 0.1
        },
        style : {
            // some style for particles
            color : '#F8C405', // color
            opacity : 1 // opacity
        }
    },
    lines : {
        enable : true, // true or false
        color : '#F8C405', // color
        opacity : .01, // opacity
        distance : 80 // distance when lines will be created between 2 particles
    },
    global : {
        particlesAtStart : 200, // nb particles at start
        limits : 50, // limits after screen where particles are deleted
        particlesMax : 200, // number max of particles
        mode : 'normal', // economy or normal
        retina: true
    },
    events : {
        onclick : {
            nb : 5 // nb of particles when click
        },
        newcreated : {
            // new particles are created every TIME
            time : 500, // ms
            nb : 4
        }
    },
    mobile : {
        speed : 2, // *
        size : 2, // *
        nb : 2, // /
        line_o : 2, // *
        line_d : 2 // *lin
    }
}
