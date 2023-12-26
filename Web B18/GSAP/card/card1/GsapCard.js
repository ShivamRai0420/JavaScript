// gsap.to("#card",{
    
//     x:100,
//     duration:5,
//     delay:1,
//     y:100,
//     rotate: "190deg",
//     borderRadius:"50%",
// })

// gsap.from("#card2",{
//     x:100,
//     duration:5,
//     backgroundColor:"yellow",
//     y:200,
//     rotate: "190deg",
// })

var tl=gsap.timeline()
tl.to("#card1",{
    x:400,
    duration:3,
    backgroundColor:"red"
})
.to("#card2",{
    x:200,
    duration:5,
    backgroundColor:"blue"
})