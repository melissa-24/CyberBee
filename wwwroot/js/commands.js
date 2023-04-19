log("Welcome to Cyber Bee!");
update_user_title("Guest User");
notGuest = false
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
        notGuest=true
    }
});
