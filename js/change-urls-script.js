var elements = document.getElementsByClassName("AddGitHubUrlToHref");
        elements.forEach(element => {
            element.href = "/remont.github.io" + element.href;
        });

elements = document.getElementsByClassName("AddGitHubUrlToSrc");
        elements.forEach(element => {
            element.src = "/remont.github.io" + element.src;
        });