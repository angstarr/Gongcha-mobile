
createMap(); 

function createMap() {
    var mapContainer = document.getElementById('map');
    var mapOption = {
            center: new kakao.maps.LatLng(37.558058, 126.936716),
            level: 3
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); 

    var positions = [
        {
            title: '현대신촌점', 
            latlng: new kakao.maps.LatLng(37.556095, 126.935835)
        },
        {
            title: '이대 익스프레스점', 
            latlng: new kakao.maps.LatLng(37.559056, 126.945869)
        },
        {
            title: '신촌 연세로점', 
            latlng: new kakao.maps.LatLng(37.558058, 126.936716)
        },
        ];

    var imageSrc = "images/icon_map.png"; 

    for (var i = 0; i < positions.length; i ++) {

        var imageSize = new kakao.maps.Size(24, 30); 

        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

        var marker = new kakao.maps.Marker({
            map: map,
            position: positions[i].latlng,
            title : positions[i].title,
            image : markerImage
            });
    }

    var content = '<div class="info">' +
                        '<div class="top_info">' +
                            '<h3>신촌연세로점</h3>' +
                            '<button type="button" class="btn_close">정보창 닫기</button>' +
                        '</div>' +
                        '<div class="mid_info">' +
                            '<dl>' +
                                '<dt>· 주소</dt>' +
                                '<dd>서울특별시 서대문구 창천동 33-30</dd>' +
                                '<dt>· 연락처</dt>' +
                                '<dd>02-3143-0404</dd>' +
                                '<dt>· 영업시간</dt>' +
                                '<dd>08:00 - 22:30</dd>' +
                            '</dl>' +
                        '</div>' +
                        '<div class="bottom_info">' +
                            '<a href="#" target="_blank" class="btn_detail">' +
                                '자세히보기' +
                                '<span class="detail_arrow"></span>' +
                            '</a>' +
                        '</div>' +
                    '</div>';

    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()       
    });

    kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
        panTo();
    });

    function closeOverlay() {
        overlay.setMap(null);
    }

    // 인포윈도우 닫는버튼
    document.querySelector('.info .btn_close').addEventListener('click', function(){
        closeOverlay();
    });

    function panTo() {
        var moveMap01 = new kakao.maps.LatLng(37.558058, 126.936716);
        map.panTo(moveMap01);            
        overlay.setMap(map);
    }
    
    
    // 검색결과창 아이콘 클릭시 해당 지점이있는 마커로 지도 중심좌표이동 
    $('.list_result .icon_map').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('icon_map1')) {
            panTo();
    }
    });
};
