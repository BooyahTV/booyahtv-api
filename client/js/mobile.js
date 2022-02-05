const isMobile = navigator.userAgentData.mobile; //resolves true/false

if (isMobile) {

    // creates a centralized joystick
    var joystick = new JoyStick({
        radius: 50,
        x: 100,
        y: window.innerHeight - 100,
        inner_radius: 30
    });

    function check() {

        requestAnimationFrame( check );

        if ( joystick.up ) {
            socket.emit("key", 38);
        }else if ( joystick.down ) {
            socket.emit("key", 40);
        }else if ( joystick.left ) {
            socket.emit("key", 37);
        }else if ( joystick.right ) {
            socket.emit("key", 39);
        }
    }
    check();

}