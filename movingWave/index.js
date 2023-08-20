const REST_API_KEY = "9a66c3afff2a7161c4aec6d2961c2c5d"

$.ajax({
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    method: 'GET',
    data:{ query: "미움받을 용기" },
    headers: {Authorization: `KakaoAK ${REST_API_KEY}`},
    
}).done (function(data) {
    alert('성공!');
    console.log(data);
    })