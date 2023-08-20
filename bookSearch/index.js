const REST_API_KEY = "9a66c3afff2a7161c4aec6d2961c2c5d"
let bookInfo;
let bookCardItem;
let searchTitle;

/* =======ajax======= */        
$('.search-btn').click(function(e) {
    e.preventDefault();

    searchTitle = $('.search-box').val();
    console.log(searchTitle);

    $.ajax({
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        method: 'GET',
        data: { query: `${searchTitle}` },
        headers: { Authorization: `KakaoAK ${REST_API_KEY}` },

    }).done(function (data) {
        alert('검색 완료');
        bookInfo = data.documents[0];
        console.log(bookInfo);

        bookCardItem = `
        <img class="book-img" src="${bookInfo.thumbnail}">
        <div class="book-info">
            <strong class="book-title">${bookInfo.title}</strong>
            <p class="book-author">${bookInfo.authors[0]}</p>
            <p class="book-content">${bookInfo.contents}</p>
            <p class="book-price">${bookInfo.price}원</p>
        </div>`;

        $('.book-card').html(bookCardItem);
    })
});

