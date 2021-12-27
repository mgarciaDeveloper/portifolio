/* global google */
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Tooltip from '@mui/material/Tooltip'
import LocationOnIcon from '@mui/icons-material/LocationOn';



const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "100%",
  transform: "translate(-50%, -100%)"
};


const MapExample = ({ center, zoom, data, goToFacility }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ 
        key: process.env.REACT_APP_GOOGLE_MAP_API 
      }}
      yesIWantToUseGoogleMapApiInternals={true}
      zoom={zoom}
      center={center}
    >
      {data.map(item => {
        return (
          <div lat={item.location[0]} lng={item.location[1]}>
            <Tooltip placement='bottom' title={item.name}>
              {/* <img style={markerStyle} src={pin} alt="pin" /> */}
              <LocationOnIcon onClick={
                (event) => {
                  event.preventDefault();
                  goToFacility && goToFacility(item.myID);

                }} style={{ color: 'red' }} />
            </Tooltip>
          </div>
        );
      })}
    </GoogleMapReact>
  );
};

export default MapExample;