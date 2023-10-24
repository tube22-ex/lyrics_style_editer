let color = '#FF0000';
let size = 4;
const lyrics_input = document.querySelector('textarea[name="lyrics-input"]');
const lyricsDisplayArea = document.getElementById('lyricsDisplayArea');

document.getElementById('Color').addEventListener('input',(e)=>{
    color = e.target.value;
    const colorCode = document.getElementById('colorCode')
    colorCode.textContent = color;
    colorCode.style.color = color;

})

document.querySelector('input[name="font-size-input"]').addEventListener('input',(e)=>{
    size = e.target.value;
})

lyrics_input.addEventListener(`click`, (e) => {
	if (e.ctrlKey) {
        const textarea = e.target;
        const start = textarea.selectionStart;
        const before = textarea.value.slice(0,start);
        const selectionText = window.getSelection().toString();
        if(!selectionText){return}
        const after = textarea.value.slice(selectionText.length + start);
        const HtmlTag = addTag(selectionText)
        textarea.value = before + HtmlTag + after;
        HTML();
	}
});

lyrics_input.addEventListener('input',HTML)

function HTML(){
    lyricsDisplayArea.innerHTML = '';
    const inputValueArr = lyrics_input.value.split('\n');
    inputValueArr.forEach(element => {
        let divElement = '';
        if(element){
            divElement = `<div>${element}</div>`;
        }else{
            divElement = `<div>&nbsp;</div>`
        }
        lyricsDisplayArea.insertAdjacentHTML('beforeend',divElement);
    });
}


function addTag(T){

    const COLOR = document.querySelector('input[name="checkbox01"]').checked;
    const SIZE = document.querySelector('input[name="checkbox02"]').checked;

    let tag = '';
    if(COLOR){tag += ` color="${color}"`}
    if(SIZE){tag += ` size="${size}"`}

   return `<font${tag}>${T}</font>`;
}


lyrics_input.addEventListener('scroll',()=>{
    lyricsDisplayArea.scrollTop = lyrics_input.scrollTop;
})
lyricsDisplayArea.addEventListener('scroll',()=>{
    lyrics_input.scrollTop = lyricsDisplayArea.scrollTop;
})

//スクロール同期
