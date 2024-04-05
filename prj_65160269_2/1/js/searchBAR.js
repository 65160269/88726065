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


// document.addEventListener('DOMContentLoaded', function () {
//     const searchInput = document.getElementById('search');
//     const cards = document.querySelectorAll('.card');
//     const nothingFound = document.getElementById('nothing-alert');
//     const searchIcon = document.getElementById('searchIcon');

//     function filterCards(searchQuery) {
//         let foundMatch = false;

//         cards.forEach(function (card) {
//             const category = card.querySelector('.card__category').textContent.toLowerCase();
//             const title = card.querySelector('.card__title').textContent.toLowerCase();

//             if (category.includes(searchQuery.toLowerCase()) || title.includes(searchQuery.toLowerCase())) {
//                 card.style.display = '';
//                 foundMatch = true;
//             } else {
//                 card.style.display = 'none';
//             }
//         });

//         if (foundMatch) {
//             nothingFound.style.display = 'none';
//         } else {
//             nothingFound.style.display = 'block';
//         }
//     }

//     searchInput.addEventListener('input', function (event) {
//         const searchQuery = event.target.value.trim();
//         filterCards(searchQuery);
//     });

//     searchInput.addEventListener('keydown', function (event) {
//         if (event.key === 'Enter') {
//             event.preventDefault();
//             const searchQuery = searchInput.value.trim();
//             filterCards(searchQuery);
//         }
//     });

//     searchIcon.addEventListener('click', function () {
//         const searchQuery = searchInput.value.trim();
//         filterCards(searchQuery);
//     });
// });

