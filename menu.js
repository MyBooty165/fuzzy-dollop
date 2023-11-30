$(document).ready(function () {
    const textToType = "Tam's Alternative Project";
    const terminal = $(".terminal");
    const typedText = $("#typed-text");
    const subText = $("#sub-text");
    const leftButton = $(".left-btn");
    const rightButton = $(".right-btn");

    setTimeout(function () {
        terminal.find(".cursor").remove();
        typedText.text("");
        typeText(0);
    }, 1500);

    function typeText(index) {
        if (index < textToType.length) {
            typedText.text(typedText.text() + textToType.charAt(index));
            setTimeout(function () {
                typeText(index + 1);
            }, 100);
        } else {
            typedText.addClass("finished");
            subText.removeClass("hidden");
            setTimeout(function () {
                leftButton.removeClass("hidden");
                rightButton.removeClass("hidden");
                setTimeout(function () {
                    leftButton.addClass("zoom-out");
                }, 50);
                setTimeout(function () {
                    rightButton.addClass("zoom-out");
                }, 100); 
            }, 500);
        }
    }
});
