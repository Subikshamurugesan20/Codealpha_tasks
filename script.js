let images = [
{src:"https://picsum.photos/id/1015/600/400", category:"camera"},
{src:"https://picsum.photos/id/1016/600/400", category:"camera"},
{src:"https://picsum.photos/id/1018/600/400", category:"camera"},
{src:"https://picsum.photos/id/1020/600/400", category:"screenshots"},
{src:"https://picsum.photos/id/1024/600/400", category:"screenshots"},
{src:"https://picsum.photos/id/1027/600/400", category:"screenshots"},
{src:"https://picsum.photos/id/1031/600/400", category:"camera"},
{src:"https://picsum.photos/id/1035/600/400", category:"screenshots"}
];

let gallery = document.getElementById("gallery");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let filtered = images;
let index = 0;

function loadImages(){

gallery.innerHTML="";

filtered.forEach((img,i)=>{

let image = document.createElement("img");
image.src = img.src;

image.onclick = ()=>{
index = i;
openLightbox();
};

gallery.appendChild(image);

});

}

function filterImages(category){

if(category==="all"){
filtered = images;
}
else{
filtered = images.filter(img => img.category===category);
}

loadImages();

}

function openLightbox(){

lightbox.style.display="flex";
lightboxImg.src = filtered[index].src;

}

document.getElementById("close").onclick=()=>{
lightbox.style.display="none";
}

document.getElementById("next").onclick=()=>{
index++;
if(index>=filtered.length) index=0;
openLightbox();
}

document.getElementById("prev").onclick=()=>{
index--;
if(index<0) index=filtered.length-1;
openLightbox();
}

loadImages();