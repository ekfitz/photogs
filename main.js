//Image Gallery
//Studio Portraits
var category1 = [
  "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/p843x403/96829993_4482215411795929_8192111287702913024_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=FlIHmktW6fgAX9JlsSr&_nc_ht=scontent.fphx1-1.fna&_nc_tp=6&oh=c684b2e6c8f634d9ede9ba764339bf8f&oe=5F3592DA",
  "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/s960x960/97278551_4464395136911290_7036245127748124672_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=y0dTmYRx6IsAX_Bl7Lb&_nc_ht=scontent.fphx1-1.fna&_nc_tp=7&oh=4abb355d0fee4cac78a797b1e26f0542&oe=5F34977E",
  "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/s960x960/97355004_4464394376911366_5872424915994411008_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=8QEfgomKyh4AX_hMTIy&_nc_ht=scontent.fphx1-1.fna&_nc_tp=7&oh=4eb14f9d715d3ba6b531727933692393&oe=5F33EECF",
  "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/s960x960/83444298_4049372078413600_7487066614785900544_o.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=g3tcW9o77qEAX910k5W&_nc_ht=scontent.fphx1-1.fna&_nc_tp=7&oh=3149313d21d2bff354280dd1bec0f3b8&oe=5F33215C",
  "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/79723742_3920561804627962_7789205752899436544_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=_bua-TZVR2sAX8I9qJt&_nc_ht=scontent.fphx1-2.fna&oh=0f0d18c7827256a86e516a1349bc6f66&oe=5F3203C8",
  "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/78974548_3891086904242119_5347636442782760960_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=ZiCWEoqtb9gAX9XB7zt&_nc_ht=scontent.fphx1-1.fna&oh=70830da7d74d7bc7ad84f60125086090&oe=5F34893A",
  "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/79930053_3891086890908787_3496008189583818752_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=kBZNqPzr9gQAX8IawAS&_nc_ht=scontent.fphx1-2.fna&_nc_tp=7&oh=25dac63735ab38ebb12d5c15e31e48e8&oe=5F345DD9",
  "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/s960x960/51753226_2990307174320101_406709630287216640_o.jpg?_nc_cat=106&_nc_sid=8024bb&_nc_ohc=pfmdqFzPP-AAX8a0x2I&_nc_ht=scontent.fphx1-1.fna&_nc_tp=7&oh=032551f77d7fae7fdda3659fd40e99f9&oe=5F324166",
  "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/60460269_3238510696166413_7988916878850392064_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=1w1Wl34oAXgAX_40K_X&_nc_ht=scontent.fphx1-2.fna&_nc_tp=7&oh=0dc6517a426df7db5a2d6aa6d487395f&oe=5F320DE6",
];

var category2 = [
  "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/49472142_2892383884112431_6138923646686593024_o.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_ohc=0jI3zYNCXdUAX9SNBHj&_nc_ht=scontent.fphx1-2.fna&oh=b173a6b587004d0e2c692d3663ff197c&oe=5F34496E",
  "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/35194182_2490142174336606_8464667618794536960_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=woI3PCN7t5IAX9vPxeH&_nc_ht=scontent.fphx1-2.fna&oh=6cf2047238a6ab46d1ab2b86216579f4&oe=5F331093",
  "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/36035058_2490142134336610_5411071954398478336_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=ycuSLHw9BmwAX-UnGCZ&_nc_ht=scontent.fphx1-2.fna&oh=a64246a72490c12557e0c33527cb6310&oe=5F323A66",
  "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/36051484_2490142067669950_1321328593917181952_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=QKE9aimxFF4AX_G1twV&_nc_ht=scontent.fphx1-2.fna&_nc_tp=7&oh=62e0f4b985ad9117141ad386ec0833c4&oe=5F33059B",
  "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/36199848_2490142034336620_8491517396392083456_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=TArTrpUvH80AX-bXVvS&_nc_ht=scontent.fphx1-1.fna&oh=04c1d43005d1707eb4111cbc5ff261ef&oe=5F33FD36",
  "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/36255742_2490142011003289_86879702270083072_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=yHqH-PI7KJwAX9YgYrl&_nc_ht=scontent.fphx1-1.fna&oh=5cfa31c1ee8bfdc12415757dbbe4ce1f&oe=5F336B72",
  "https://scontent.fphx1-2.fna.fbcdn.net/v/t31.0-8/s960x960/25182411_2183413648342795_1186752368703226714_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=hAfqfN6YkZEAX-fnlt-&_nc_ht=scontent.fphx1-2.fna&_nc_tp=7&oh=626f1a5af7149fc2d1e91283aa5f7c8a&oe=5F35AC88",
  "https://scontent.fphx1-2.fna.fbcdn.net/v/t31.0-8/s960x960/24955781_2179246468759513_616070046826731502_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=eOUno6BSSI8AX976C7V&_nc_ht=scontent.fphx1-2.fna&_nc_tp=7&oh=e3257bbaf357c27c65294a6e430bffce&oe=5F34834A",
  "https://scontent.fphx1-2.fna.fbcdn.net/v/t31.0-8/p960x960/18922773_1921669591183870_8234494109777762803_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=oHLvOfPp3NwAX8vHxph&_nc_ht=scontent.fphx1-2.fna&_nc_tp=6&oh=3944c02f8a725cc937c9a108e825b8b9&oe=5F3277B2"
];

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
image2.src = category1[0];
image3.src = category1[1];
image4.src = category1[2];
image5.src = category1[3];

//Albums
thumbnail1.src = category1[1];
thumbnail2.src = category1[2];
thumbnail3.src = category1[3];

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
