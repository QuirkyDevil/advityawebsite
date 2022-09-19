var members = {
    "member": [
        {
            "name": "Aditya Bhandari",
            "post": "President",
            "image": "member1.jpg"
        },
        {
            "name": "Aryan Banafal",
            "post": "Vice President",
            "image": "member1.jpg"
        },
        {
            "name": "Yash Patil",
            "post": "Post",
            "image": "member1.jpg"
        }
    ]
}

$(document).ready(function() {
    var memberTemp = $("#member-template").html();

    var compliedMemberTemp = Handlebars.compile(memberTemp);
    $(".row").html(compliedMemberTemp(members));
});
