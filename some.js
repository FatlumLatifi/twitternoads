function removeAds() {
    console.log("removing ads.." + Date.now());
        document.querySelectorAll("article div[dir=ltr]").forEach(
            element => 
                {
                    if (element.querySelector("span")?.textContent == "Ad") 
                    { findArticleFather(element)?.setAttribute("isad", "yes"); }
                }
        );
}

function findArticleFather(element)
{
    if (element == null || element == undefined) {return null;}
    if (element.tagName == "ARTICLE")
    {
        return element;
    }
    return findArticleFather(element.parentElement);
}





setTimeout(removeAds, 500);
setTimeout(removeAds, 1000);
setTimeout(removeAds, 1500);
setTimeout(removeAds, 2500);
setTimeout(removeAds, 5000);
setTimeout(removeAds, 7000);
window.setInterval(removeAds, 15000);



