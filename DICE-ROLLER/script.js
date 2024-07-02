function roll(){
  let input = document.getElementById("in").value;
    let numbers = document.getElementById("numbers");
    let images = document.getElementById("images");
    let random=0;
    let images_array=[];
    let numbers_array=[];
    for (let i = 0; i < input; i++) {
        random = Math.floor(Math.random()*6)+1;
        console.log(random);
        numbers_array.push(random);
        images_array.push(`<img src="${random}.png">`);
    }
    numbers.innerHTML = `dice: ${numbers_array.join(',')}`;
    images.innerHTML =images_array.join(' ');
}