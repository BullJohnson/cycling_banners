"use strict";

// William S. Johnson, Jr | 10-22-23 | DPR214 - Cycling Banners

const $ = selector => document.querySelector(selector);

let image = null;
let imageCounter = 0;
const imageCache = [];
const linkCache = [];

const mainImage = $("#main_image");     // this will hold the current, visible image
const caption = $("#caption");
const landingPage = $("#landing_page");     // the address which will hyperlink upon image click


const shuffleImages = function () {
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    landingPage.href = linkCache[imageCounter];     //matches hyperlink  with the appropriate image
    caption.textContent = linkCache[imageCounter].title;
};

//  preloading and creating an array of images
document.addEventListener("DOMContentLoaded", () => {
    const banners = $("#image_list").querySelectorAll("img");
    for (let banner of banners) {
        image = new Image();
        image.src = banner.src;
        image.alt = banner.alt;
        imageCache[imageCache.length] = image;
    }
// creating an array of hyperlinks, to correspond with images
    const links = $("#image_list").querySelectorAll("a");
    for (let link of links) {
        linkCache[linkCache.length] =link;
    }
    setInterval(shuffleImages,3000);
});