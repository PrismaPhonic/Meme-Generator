let memeGen = {
  memes: [],
  addMeme: function () {
    //grab inputs
    let url = document.getElementById('url');
    let top = document.getElementById('top-text');
    let bottom = document.getElementById('bottom-text');
    //push meme data as an object into memes array on this object
    this.memes.push({ url: url.value, top: top.value, bottom: bottom.value });
    //refresh the memes section of the website to display memes stored in array
    view.loadMemes(this.memes);
    //clear input values
    (url.value = ''), (top.value = ''), (bottom.value = '');
  },
  deleteMeme: function (position) {
    this.memes.splice(position, 1);
    view.loadMemes(this.memes);
  }
};

let view = {
  loadMemes: function (memes) {
    //clear memes section
    document.getElementById('memes').innerHTML = '';
    //add each meme from storage array to meme section
    for (let i = 0; i < memes.length; i++) {
      let meme = memes[i];
      let url = meme.url,
        top = meme.top,
        bottom = meme.bottom;
      let memeDiv = `
        <div id='meme-col'>
          <div id='meme'>
            <img src='${url}'>
            <div id='delete' onclick='memeGen.deleteMeme(${i.toString()})'>
              <h2>X</h2>
            </div>
            <div class='top-center'>
              <h3>${top.toUpperCase()}</h3>
            </div>
            <div class='bottom-center'>
              <h3>${bottom.toUpperCase()}</h3>
            </div>
          </div>
        </div>`;
      document.getElementById('memes').insertAdjacentHTML('beforeend', memeDiv);
    }
  }
};
