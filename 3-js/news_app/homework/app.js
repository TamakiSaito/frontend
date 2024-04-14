// https://api.hnpwa.com/v0/news.json

function getNews() {
  fetch("https://api.hnpwa.com/v0/news.json")
    .then((res) => res.json())
    .then((json) => {
      const news = json;
      console.log("news: ", news);
      addItem(news);
    });
}

function addItem(news){
  for(let i = 0; i < news.length; i++){
    const app = document.getElementById('news')
    // Add Titile
    const addTitle = document.createElement('a')
    addTitle.innerHTML = news[i].title
    addTitle.href = news[i].url
    addTitle.target = '_blank'
    app.appendChild(addTitle)
  }
}
getNews()