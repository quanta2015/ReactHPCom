import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import './index.less'

const KEY = "AIzaSyBDG2YUxXicahL-Zy21Gu7YZkgqYyT5kbc"

const Map =({data})=> {

  return (
    <div className="sc-map">

      <LoadScript googleMapsApiKey={KEY} >
        <GoogleMap {...data.props} >
          <InfoWindow position={data.props.center} >
            <div class="m-info">
              <h1>{data.info.name}</h1>
              <p>
                <span>{data.info.code}</span>
                <span>{data.info.phone}</span>
                <span>{data.info.fax}</span>
                <span>{data.info.addr}</span>
              </p>
            </div>
          </InfoWindow>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}


export default React.memo(Map)

