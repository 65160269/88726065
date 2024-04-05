<script setup>
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const cards = document.querySelectorAll('.card');
    const nothingFound = document.getElementById('nothing-alert');
    const searchIcon = document.getElementById('searchIcon');

    function filterCards(searchQuery) {
        let foundMatch = false;

        cards.forEach(function (card) {
            const category = card.querySelector('.card__category').textContent.toLowerCase();
            const title = card.querySelector('.card__title').textContent.toLowerCase();

            if (category.includes(searchQuery.toLowerCase()) || title.includes(searchQuery.toLowerCase())) {
                card.style.display = '';
                foundMatch = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (foundMatch) {
            nothingFound.style.display = 'none';
        } else {
            nothingFound.style.display = 'block';
        }
    }

    searchInput.addEventListener('input', function (event) {
        const searchQuery = event.target.value.trim();
        filterCards(searchQuery);
    });

    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const searchQuery = searchInput.value.trim();
            filterCards(searchQuery);
            saveSearchHistory(searchQuery); 
        }
    });

    searchIcon.addEventListener('click', function () {
        const searchQuery = searchInput.value.trim();
        filterCards(searchQuery);
        saveSearchHistory(searchQuery); 
    });

    function saveSearchHistory(searchQuery) {
        const searchResult = {
            keyword: searchQuery,
            date: new Date().toISOString().slice(0, 10) 
        };
        const jsonData = JSON.stringify(searchResult);
        localStorage.setItem('searchHistory', jsonData);
    }

    function loadSearchHistory() {
        const storedData = localStorage.getItem('searchHistory');
        if (storedData) {
            const searchHistory = JSON.parse(storedData);
            console.log('Keyword:', searchHistory.keyword);
            console.log('Date:', searchHistory.date);
        } else {
            console.log('No search history found.');
        }
    }

    loadSearchHistory();
});

</script>

<template> 
  <body>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <header class="top">
          <div class="menu">
              <a class="Travel" href="index.html">Travel</a>
              <div class="box">
                  <form action="searchTOP">
                      <input type="text" placeholder="Search..." id="search">
                      <a href="#" id="searchIcon">
                          <i class="fa fa-search"></i>
                      </a>                    
                      <!-- <button type="submit"><i class="fa fa-search"></i></button> -->
                  </form>
              </div>
          </div>
      </header>
      <div class="main">
          <div id="nothing-alert">Nothing Found</div>
          <div>
          <section class="cards">
                  <article class="card card--1">
                          <div class="card__img"></div>
                          <a href="https://th.hotels.com/go/thailand/bangkok" target="_blank" class="card_link">
                              <div class="card__img--hover"></div>
                          </a>
                          <div class="card__info">
                              <span class="card__category">Bangkok</span>
                              <h3 class="card__title">Bangkok, Thailand's capital, is a large city known for ornate shrines and vibrant street life.</h3>
                              <span class="card__by">by <a href="https://th.hotels.com/go/thailand/bangkok" class="card__author" title="Bangkok" target="_blank">Bangkok</a></span>
                          </div>
                  </article>
  
                  <article class="card card--2">
                      <div class="card__img"></div>
                      <a href="https://www.japan.travel/th/th/" target="_blank" class="card_link">
                          <div class="card__img--hover"></div>
                      </a>
                      <div class="card__info">
                          <span class="card__category">Japan</span>
                          <h3 class="card__title">Japan boasts a diverse and unique culture, with a rich history and heritage that spans from ancient times to the present day.</h3>
                          <span class="card__by">by <a href="https://www.japan.travel/th/th/" class="card__author" title="Japan" target="_blank">Japan</a></span>
                      </div>
                  </article>
  
                  <article class="card card--3">
                      <div class="card__img"></div>
                      <a href="https://www.travelodge.co.uk/blog/destination-guides/london/why-everyone-should-visit-london-at-least-once-in-their-lifetime/" target="_blank" class="card_link">
                          <div class="card__img--hover"></div>
                      </a>
                      <div class="card__info">
                          <span class="card__category">London</span>
                          <h3 class="card__title">London is a vibrant and dynamic city known for its rich history, iconic landmarks, diverse culture, and bustling atmosphere.</h3>
                          <span class="card__by">by <a href="https://www.travelodge.co.uk/blog/destination-guides/london/why-everyone-should-visit-london-at-least-once-in-their-lifetime/" class="card__author" title="London" target="_blank">London</a></span>
                      </div>
                  </article>
  
                  <article class="card card--4">
                      <div class="card__img"></div>
                      <a href="https://www.worldpackers.com/articles/reasons-to-visit-paris" target="_blank" class="card_link">
                          <div class="card__img--hover"></div>
                      </a>
                      <div class="card__info">
                          <span class="card__category">Paris</span>
                          <h3 class="card__title">Paris is renowned for its romantic ambiance, exquisite cuisine, stunning architecture, and world-class art and culture scene.</h3>
                          <span class="card__by">by <a href="https://www.worldpackers.com/articles/reasons-to-visit-paris" class="card__author" title="Paris" target="_blank">Paris</a></span>
                      </div>
                  </article>
  
                  <article class="card card--5">
                      <div class="card__img"></div>
                      <a href="https://www.linkedin.com/pulse/10-reasons-why-everyone-should-visit-switzerland-ajay-patra#:~:text=Switzerland%20is%20known%20as%20the,every%20traveler%20in%20the%20world." class="card_link"  target="_blank">
                          <div class="card__img--hover"></div>
                      </a>
                      <div class="card__info">
                          <span class="card__category">Switzerland</span>
                          <h3 class="card__title">Switzerland is a picturesque country known for its stunning landscapes of majestic mountains, serene lakes, and charming villages.</h3>
                          <span class="card__by">by <a href="https://www.linkedin.com/pulse/10-reasons-why-everyone-should-visit-switzerland-ajay-patra#:~:text=Switzerland%20is%20known%20as%20the,every%20traveler%20in%20the%20world." class="card__author" title="Switzerland"  target="_blank">Switzerland</a></span>
                      </div>
                  </article>
  
                  <article class="card card--6">
                      <div class="card__img"></div>
                      <a href="https://www.greatvaluevacations.com/travel-inspiration/5-reasons-to-visit-austria#:~:text=Sunny%20alpine%20meadows%2C%20sky%2Dhigh,tallest%20falls%20in%20Central%20Europe!" class="card_link" target="_blank">
                          <div class="card__img--hover"></div>
                      </a>
                      <div class="card__info">
                          <span class="card__category">Austria</span>
                          <h3 class="card__title">Austria is a captivating destination renowned for its rich history, stunning architecture, and breathtaking natural scenery.</h3>
                          <span class="card__by">by <a href="https://www.greatvaluevacations.com/travel-inspiration/5-reasons-to-visit-austria#:~:text=Sunny%20alpine%20meadows%2C%20sky%2Dhigh,tallest%20falls%20in%20Central%20Europe!" class="card__author" title="Austria" target="_blank">Austria</a></span>
                      </div>
                  </article>
  
                  <article class="card card--7">
                      <div class="card__img"></div>
                      <a href="https://canadiantrainvacations.com/blog/21-reasons-to-visit-canada" class="card_link" target="_blank">
                          <div class="card__img--hover"></div>
                      </a>
                      <div class="card__info">
                          <span class="card__category">Canada</span>
                          <h3 class="card__title">Canada is a captivating destination renowned for its vast natural landscapes, including majestic mountains, pristine lakes, and dense forests.</h3>
                          <span class="card__by">by <a href="https://canadiantrainvacations.com/blog/21-reasons-to-visit-canada" class="card__author" title="Canada" target="_blank">Canada</a></span>
                      </div>
                  </article>
  
  
                  <article class="card card--8">
                      <div class="card__img"></div>
                      <a href="https://www.klook.com/en-SG/blog/reasons-to-visit-new-zealand/" class="card_link" target="_blank">
                          <div class="card__img--hover"></div>
                      </a>
                      <div class="card__info">
                          <span class="card__category">New Zealand</span>
                          <h3 class="card__title">New Zealand is a captivating destination known for its breathtaking natural beauty, including rugged coastlines, pristine beaches, lush forests, and majestic mountains.</h3>
                          <span class="card__by">by <a href="https://www.klook.com/en-SG/blog/reasons-to-visit-new-zealand/" class="card__author" title="New Zealand" target="_blank">New Zealand</a></span>
                      </div>
                  </article>
  
                  <article class="card card--9">
                      <div class="card__img"></div>
                      <a href="https://www.nordicvisitor.com/blog/10-reasons-visit-ireland/" class="card_link" target="_blank">
                          <div class="card__img--hover"></div>
                      </a>
                      <div class="card__info">
                          <span class="card__category">Ireland</span>
                          <h3 class="card__title">Ireland is a charming destination renowned for its stunning landscapes, rich history, and vibrant culture.</h3>
                          <span class="card__by">by <a href="https://www.nordicvisitor.com/blog/10-reasons-visit-ireland/" class="card__author" title="Ireland" target="_blank">Ireland</a></span>
                      </div>
                  </article>
              </section>
          </div>
      </div>
  </body>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    margin: -8px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #D2DBDD;
  }

.Travel{
    background-color: transparent;
}

.menu {
    display: flex;
    background-color: black;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 1;
}

.menu a {
    margin-right: 20px;
    float: left;
    display: flex;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
}

form {
    display: flex;
    background-color: transparent;
} 
form a,i {
    background-color: transparent;
}

@media screen and (max-width: 600px) {
    .top {
        flex-direction: column;
    }
    .menu {
        flex-direction: column;
        height: auto;
        padding: 1rem 0;
    }
    form {
        width: 100%;
    }

    form input[type="text"] {
        width: 0;
    }
}
.box {
    height: 40px;
    display: flex;
    cursor: pointer;
    padding-left: 10px;
    margin-right: 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 30px;
    align-items: center;
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.219);
}
.box:hover input {
    width: 400px;
}
.box input {
    width: 0;
    outline: none;
    border: none;
    font-weight: 500;
    transition: 0.8s;
    background: transparent;
}
.box a .fa {
    color: rgb(0, 0, 0);
    font-size: 20px;
}
#nothing-alert {
    display: none;
    width: 100%;
    margin: 50px auto;
    font-size: 400%;
    font-weight: bold;
    text-align: center;
    margin-top: 400px;
}

@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

.main {
    
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
.cards {
    display: flex;
    padding: 40px;
    width: 100%; 
    height: 100%; 
    flex-wrap: wrap;
    justify-content: space-around;
    /* max-width: 1920px;
    max-height: 900px; */
}

.card--1 .card__img, .card--1 .card__img--hover {
    background-image: url(https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSgBKo4Gj-QXylORkdrqLQPPrGcel41Pryy432PhUHem0xe0-fy3shGT8q0cTRfkp-PLZ3VF1TlFy44qJG2Q39FBX6hgzy817da_xighQ);
}

.card--2 .card__img, .card--2 .card__img--hover {
    background-image: url(https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT4ctmqBhRVCQ8NqwbD8m8Qb2UZ_V-7O6bM1x5mgithZrfDGSWgDsbEyOM399J-EhGH7FbbFuJS8BosJI8JW7I9fUiuL_YKOZ68SQKJUk0);
}

.card--3 .card__img, .card--3 .card__img--hover {
    background-image: url(https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQdICb_YNsi0t0OOJ014tRdG3AiU1hRQ5Wbt4wgGRQV3oyj5usCyTB26flnOKn24kw9LGkc_gOvbJN1ob35q7Bc8zwXWpTsKDCCK_itGw);
}

.card--4 .card__img, .card--4 .card__img--hover {
    background-image: url(https://pbs.twimg.com/media/GFj-JjhW4AARZBk?format=jpg&name=large);
}

.card--5 .card__img, .card--5 .card__img--hover {
    background-image: url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRxY-8MNmQQc5HXAGCRA3XJr1h2jO15gqSCVq4Lsf_HhaNl2jht);
}

.card--6 .card__img, .card--6 .card__img--hover {
    background-image: url(https://cdn.nwmgroups.hu/s/img/i/2008/20200810ezert-valaszd-ausztriat-ha-mindenkepp3.jpg?w=800&h=800&t=5);
}

.card--7 .card__img, .card--7 .card__img--hover {
    background-image: url(https://lh5.googleusercontent.com/p/AF1QipNb-QPr5kbm7Pc2ZZ1bPZakCbwF4wT4NbM6akHm=w540-h312-n-k-no);
}

.card--8 .card__img, .card--8 .card__img--hover {
    background-image: url(https://lh5.googleusercontent.com/p/AF1QipMZ1zq8NXbl4YWCcQwI2UUNCR7uOiBOOTRKwkPI=w540-h312-n-k-no);
}

.card--9 .card__img, .card--9 .card__img--hover {
    background-image: url(https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR-eQ-6lxWFWml6j-yCljVr_TxbccVt6UtNF3Wt9CkoAi91-B21yS7gEJzpzUa-B1Pig7iW6rgYQt8rT-_8EnTZPTIXszTwtoDwd528bw);
}
.card__img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.card__img--hover {
  transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
  
}
.card {
  margin: 60px;
  margin-top: 100px;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  width: calc(25%);
  width: 25vw;
  height: auto;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
  z-index: 0;
}
.card:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    transform: scale(1.10, 1.10);
}

.card__info {
z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
   padding: 16px 24px 24px 24px;
}

.card__category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
}

.card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
}

.card__by {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    color: #868686;
}

.card__author {
    font-weight: 600;
    text-decoration: none;
    color: #AD7D52;
}

.card:hover .card__img--hover {
    height: 100%;
    /* opacity: 0.9; */
}

.card:hover .card__info {
    background-color: transparent;
    position: relative;
    color: transparent;
}


.card:hover .card__info-hover {
    opacity: 1;
}
</style>
