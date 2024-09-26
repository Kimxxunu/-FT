/*global kakao*/ 
import React, { useEffect } from 'react';

const Location = ({ nowLocation }) => {
    useEffect(() => {
        if (nowLocation) {
            const [lat, lng] = nowLocation.split(',').map(coord => parseFloat(coord.trim()));
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(lat, lng),
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
            const markerPosition = new kakao.maps.LatLng(lat, lng);
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
        }
    }, [nowLocation]);

    return (
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
    );
}

export default Location;
