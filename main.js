//Header info
var about = "Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.";
var twitter = "www.twitter.com";
var facebook = "https://www.facebook.com/pg/BlackDogAZ/photos/?ref=page_internal";
var email = "email@gmail.com";

aboutText.innerHTML = about;
socialLink1.onclick = function(){window.open(twitter)};
socialLink2.onclick = function(){window.open(facebook)};
socialLink3.onclick = function(){window.open(email)};

//Carousel images
var image1 = document.querySelector('.first-slide');
var image2 = document.querySelector('.second-slide');
var image3 = document.querySelector('.third-slide');
var image4 = document.querySelector('.fourth-slide');
var image5 = document.querySelector('.fifth-slide');

image1.src = "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/49472142_2892383884112431_6138923646686593024_o.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_ohc=0jI3zYNCXdUAX9SNBHj&_nc_ht=scontent.fphx1-2.fna&oh=b173a6b587004d0e2c692d3663ff197c&oe=5F34496E";
image2.src = "images/stego.png";
image3.src = "images/stego.png";
image4.src = "images/stego.png";
image5.src = "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/36199848_2490142034336620_8491517396392083456_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=RaDuzTU3-3gAX_j2tC2&_nc_ht=scontent.fphx1-1.fna&oh=1b4bb1e367f405c9f398c2c169637fbc&oe=5F33FD36";

//Albums
thumbnail1.src = "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/36199848_2490142034336620_8491517396392083456_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=RaDuzTU3-3gAX_j2tC2&_nc_ht=scontent.fphx1-1.fna&oh=1b4bb1e367f405c9f398c2c169637fbc&oe=5F33FD36";
thumbnail2.src = "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/49472142_2892383884112431_6138923646686593024_o.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_ohc=0jI3zYNCXdUAX9SNBHj&_nc_ht=scontent.fphx1-2.fna&oh=b173a6b587004d0e2c692d3663ff197c&oe=5F34496E";
thumbnail3.src = "images/stego.png";

var album1 = "Dogs";
var album2 = "People";
var album3 = "Cars";

var album1About = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
var album2About = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
var album3About = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

albumTitle1.innerHTML = album1;
albumTitle2.innerHTML = album2;
albumTitle3.innerHTML = album3;

cardText1.innerHTML = album1About;
cardText2.innerHTML = album2About;
cardText3.innerHTML = album2About;


//Blog
var featuredPostTitle = "Featured Post";
var featuredPostDate = "July 13";
var featuredPostAbout = "This is a wider card with supporting text below as a natural lead-in to additional content.";
thumbnailFeaturedPost.src = "images/stego.png";

titleFeaturedPost.innerHTML = featuredPostTitle;
dateFeaturedPost.innerHTML = featuredPostDate;
aboutFeaturedPost.innerHTML = featuredPostAbout;
