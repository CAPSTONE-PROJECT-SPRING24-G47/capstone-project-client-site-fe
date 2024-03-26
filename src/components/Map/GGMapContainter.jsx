import React, { useEffect } from 'react';
import { Map, AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';

function createAccomodationIcon() {
  const svgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  svgElement.setAttribute('width', '25');
  svgElement.setAttribute('height', '24');
  svgElement.setAttribute('viewBox', '0 0 25 24');
  svgElement.setAttribute('fill', 'none');

  const pathElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  pathElement.setAttribute('fillRule', 'evenodd');
  pathElement.setAttribute('clipRule', 'evenodd');
  pathElement.setAttribute(
    'd',
    'M3.66226 5.40505C3.66226 4.93505 4.04226 4.55505 4.51226 4.55505H20.1363C20.6063 4.55505 20.9863 4.93505 20.9863 5.40505V12.0541C21.6663 12.6161 22.2063 13.4471 22.2063 14.5981V19.4451H20.7063V17.7701H4.11426V19.4441H2.61426V14.5701C2.63926 13.9161 2.91826 12.9821 3.66426 12.2201V5.40405L3.66226 5.40505ZM6.29726 10.9921C6.57454 10.957 6.85377 10.9397 7.13326 10.9401H11.0293C10.5273 10.4581 9.71926 10.0101 8.59626 10.0101C7.50626 10.0101 6.76726 10.4761 6.29726 10.9921ZM13.6863 10.9401H18.1543L18.1903 10.9441C18.3706 10.962 18.5498 10.9894 18.7273 11.0261C18.6587 10.9434 18.5845 10.8656 18.5053 10.7931C18.0583 10.3831 17.3253 10.0101 16.2513 10.0101C15.1733 10.0101 14.5013 10.2831 14.0713 10.5941C13.9308 10.6951 13.8017 10.8112 13.6863 10.9401ZM19.4863 9.65805C18.7603 9.00605 17.6743 8.51005 16.2513 8.51005C14.9043 8.51005 13.9133 8.85705 13.1913 9.37805C12.8493 9.62505 12.5813 9.90305 12.3703 10.1801C11.6343 9.31905 10.3653 8.51005 8.59626 8.51005C6.96726 8.51005 5.86326 9.22205 5.16226 10.0131V6.05505H19.4863V9.65805ZM4.11326 16.2701H20.7073V14.5971C20.7073 13.8941 20.3523 13.4091 19.8193 13.0521C19.2593 12.6781 18.5563 12.4911 18.0793 12.4391H7.13426C6.01626 12.4391 5.32426 12.7561 4.89726 13.1171C4.32726 13.5991 4.13226 14.2401 4.11426 14.6131L4.11326 16.2701Z'
  );
  pathElement.setAttribute('fill', 'black');

  svgElement.appendChild(pathElement);

  return svgElement;
}

function createRestaurantIcon() {
  const svgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  svgElement.setAttribute('width', '24');
  svgElement.setAttribute('height', '24');
  svgElement.setAttribute('viewBox', '0 0 24 24');
  svgElement.setAttribute('fill', 'none');

  const pathElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  pathElement.setAttribute('fillRule', 'evenodd');
  pathElement.setAttribute('clipRule', 'evenodd');
  pathElement.setAttribute(
    'd',
    'M13.8369 5.00419L16.9457 2L18.179 3.19223L15.0713 6.19755C14.2813 6.96125 13.8438 7.84192 13.7682 8.67086C13.7182 9.23323 13.831 9.79898 14.1487 10.3265L19.8545 4.81186L21.0878 6.00409L15.3797 11.5221C15.93 11.8381 16.5129 11.9574 17.0853 11.9202C17.9207 11.8674 18.7922 11.4771 19.524 10.7696C20.5166 9.80922 21.5072 8.84681 22.4956 7.88241L22.7586 7.62597L24 8.81258L23.7359 9.07127C22.7449 10.0366 21.752 11.0001 20.7573 11.9619C19.7695 12.9168 18.5153 13.5185 17.2005 13.6029C16.1008 13.6742 15.0102 13.3683 14.1208 12.7391L12.6885 14.1247L21.6707 22.8078L20.4362 24L13.4901 17.2853L9.99965 20.6595L7.96353 18.6912L2.47183 24L1.23852 22.8078L6.73023 17.499L1.61899 12.5613C1.10571 12.0652 0.698552 11.4762 0.420764 10.828C0.142976 10.1798 0 9.48499 0 8.78333C0 8.08168 0.142976 7.38689 0.420764 6.73865C0.698552 6.09042 1.10571 5.50143 1.61899 5.00532L2.43576 4.21575L11.4529 12.9325L12.8863 11.5468C12.2325 10.6729 11.9279 9.59984 12.0288 8.52577C12.1451 7.23568 12.8083 5.99959 13.8357 5.00532L13.8369 5.00419ZM12.2557 16.0942L2.4695 6.6317C1.93961 7.33583 1.68713 8.1997 1.75752 9.06778C1.8279 9.93587 2.21654 10.7512 2.85346 11.3669L9.99965 18.2728L12.2568 16.0919L12.2557 16.0942Z'
  );
  pathElement.setAttribute('fill', 'black');

  svgElement.appendChild(pathElement);

  return svgElement;
}

function createAttractionIcon() {
  const svgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  svgElement.setAttribute('width', '25');
  svgElement.setAttribute('height', '24');
  svgElement.setAttribute('viewBox', '0 0 25 24');
  svgElement.setAttribute('fill', 'none');

  const pathElement1 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  pathElement1.setAttribute('fillRule', 'evenodd');
  pathElement1.setAttribute('clipRule', 'evenodd');
  pathElement1.setAttribute(
    'd',
    'M3.06982 5.25H22.5698V9.704L22.0338 9.864C21.4669 10.034 20.9699 10.3823 20.6166 10.8572C20.2632 11.332 20.0724 11.9081 20.0724 12.5C20.0724 13.0919 20.2632 13.668 20.6166 14.1428C20.9699 14.6177 21.4669 14.966 22.0338 15.136L22.5698 15.296V19.75H3.06982V15.296L3.60582 15.136C4.17276 14.966 4.66976 14.6177 5.0231 14.1428C5.37643 13.668 5.56725 13.0919 5.56725 12.5C5.56725 11.9081 5.37643 11.332 5.0231 10.8572C4.66976 10.3823 4.17276 10.034 3.60582 9.864L3.06982 9.704V5.25ZM4.56982 6.75V8.626C5.31551 8.96242 5.94826 9.5069 6.39212 10.1941C6.83598 10.8813 7.07208 11.6819 7.07208 12.5C7.07208 13.3181 6.83598 14.1187 6.39212 14.8059C5.94826 15.4931 5.31551 16.0376 4.56982 16.374V18.25H21.0698V16.374C20.3241 16.0376 19.6914 15.4931 19.2475 14.8059C18.8037 14.1187 18.5676 13.3181 18.5676 12.5C18.5676 11.6819 18.8037 10.8813 19.2475 10.1941C19.6914 9.5069 20.3241 8.96242 21.0698 8.626V6.75H4.56982Z'
  );
  pathElement1.setAttribute('fill', 'black');

  svgElement.appendChild(pathElement1);

  const pathElement2 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  pathElement2.setAttribute(
    'd',
    'M12.8198 15C13.085 15 13.3394 15.1054 13.5269 15.2929C13.7145 15.4804 13.8198 15.7348 13.8198 16C13.8198 16.2652 13.7145 16.5196 13.5269 16.7071C13.3394 16.8946 13.085 17 12.8198 17C12.5546 17 12.3003 16.8946 12.1127 16.7071C11.9252 16.5196 11.8198 16.2652 11.8198 16C11.8198 15.7348 11.9252 15.4804 12.1127 15.2929C12.3003 15.1054 12.5546 15 12.8198 15ZM12.8198 11.5C13.085 11.5 13.3394 11.6054 13.5269 11.7929C13.7145 11.9804 13.8198 12.2348 13.8198 12.5C13.8198 12.7652 13.7145 13.0196 13.5269 13.2071C13.3394 13.3946 13.085 13.5 12.8198 13.5C12.5546 13.5 12.3003 13.3946 12.1127 13.2071C11.9252 13.0196 11.8198 12.7652 11.8198 12.5C11.8198 12.2348 11.9252 11.9804 12.1127 11.7929C12.3003 11.6054 12.5546 11.5 12.8198 11.5ZM12.8198 8C13.085 8 13.3394 8.10536 13.5269 8.29289C13.7145'
  );
  pathElement2.setAttribute('fill', 'black');

  svgElement.appendChild(pathElement2);

  return svgElement;
}

function GGMapContainter({ tripDays, latLng }) {
  let restaurantStringLocations = [];
  let attractionStringLocations = [];
  let accommodationStringLocations = [];

  //lấy ra array string location
  tripDays.forEach((dayData) => {
    dayData.restaurants.restaurantsForDay.forEach((restaurant) => {
      restaurantStringLocations.push(restaurant.restaurantLocation);
    });

    dayData.attractions?.attractionsForDay.forEach((attraction) => {
      attractionStringLocations.push(attraction.touristAttractionLocation);
    });

    dayData.accommodations?.accommodationsForDay?.forEach((accommodation) => {
      accommodationStringLocations.push(accommodation.accommodationLocation);
    });
  });

  tripDays[0]?.accommodations?.accommodations?.forEach((accommodation) => {
    accommodationStringLocations.push(accommodation.accommodationLocation);
  });

  //convert arrays string location sang object {lat, lng}
  const accommodationLocations = accommodationStringLocations.map(
    (location) => {
      let [lat, lng] = location.split('-').map(parseFloat);
      return { lat, lng };
    }
  );

  const restaurantLocations = restaurantStringLocations.map((location) => {
    let [lat, lng] = location.split('-').map(parseFloat);
    return { lat, lng };
  });

  const attractionLocations = attractionStringLocations.map((location) => {
    let [lat, lng] = location.split('-').map(parseFloat);
    return { lat, lng };
  });

  const map = useMap();

  useEffect(() => {
    map?.setZoom(16);
    map?.panTo(latLng);
  }, [latLng]);

  return (
    <Map
      defaultCenter={{ lat: 35.6975, lng: 139.77397 }}
      defaultZoom={12}
      mapId={'b309446fd38a45a2'}
      disableDefaultUI={true}
      gestureHandling={'greedy'}
    >
      {restaurantLocations?.map((loc, index) => (
        <AdvancedMarker key={index} position={loc}>
          <Pin
            background={'#8DCADC'}
            borderColor={'#E8F3EA'}
            glyphColor={'#E8F3EA'}
            scale={1.3}
            glyph={createRestaurantIcon()}
          />
        </AdvancedMarker>
      ))}
      {attractionLocations?.map((loc, index) => (
        <AdvancedMarker key={index} position={loc}>
          <Pin
            background={'#8DCADC'}
            borderColor={'#E8F3EA'}
            glyphColor={'#E8F3EA'}
            scale={1.3}
            glyph={createAttractionIcon()}
          />
        </AdvancedMarker>
      ))}
      {accommodationLocations?.map((loc, index) => (
        <AdvancedMarker key={index} position={loc}>
          <Pin
            background={'#8DCADC'}
            borderColor={'#E8F3EA'}
            glyphColor={'#E8F3EA'}
            scale={1.3}
            glyph={createAccomodationIcon()}
          />
        </AdvancedMarker>
      ))}
    </Map>
  );
}

export default GGMapContainter;
