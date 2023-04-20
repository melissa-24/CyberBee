log("Welcome to CyberBee!");
// log(`
//  _____       _              ______           _ 
// /  __ \     | |             | ___ \         | |
// | /  \/_   _| |__   ___ _ __| |_/ / ___  ___| |
// | |   | | | | '_ \ / _ \ '__| ___ \/ _ \/ _ \ |
// | \__/\ |_| | |_) |  __/ |  | |_/ /  __/  __/_|
//  \____/\__, |_.__/ \___|_|  \____/ \___|\___(_)
//         __/ |                                  
//        |___/                                           

// `)
update_user_title("Guest User");
commandList = {
    "- LIST": "Simplified Registry Command List",
    "- HELP": "Used to bring  up the list of commands",
    "- LOGIN": "Used along with your name to change the terminal to your name",
    "- UPDATE": "Also used to update the username - type update title YourName"
}

register_cmd("help", function(cmd) {
    // var parameters = cmd.split(" ").slice(1);
    block_log(`Here is a list of commands you can use: `)
    for (var [key, value] of Object.entries(commandList)) {
        block_log(`${key}: ${value}`)
    }
})

register_cmd("login", function(cmd) {
    var parameters = cmd.split(" ").slice(1);
    for (var i = 0; i < parameters.length; i++) {
        block_log("Hello " + parameters[i]);
        update_user_title(parameters)
    }
});
