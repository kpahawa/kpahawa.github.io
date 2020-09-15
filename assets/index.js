const toggleVisibility = (visible) => {
    if (!visible) {
        $(".loader-section").css("display", "flex");
        $(".reveal").hide();
        activateTimer();
    }
}

const activateTimer = () => {
    setTimeout(() => {
        $(".loader-section").hide();
        $(".new-apt").show();
        $(".maps").show();
        $(".rent").show();
        $(".apt").css('display', 'inline');
    }, 3000)
}


const goToLink = (link) => {
    window.location.href = link;
}
