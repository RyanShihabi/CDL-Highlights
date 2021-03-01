import React from 'react'
import ReactPlayer from 'react-player/lazy'
import MoscowIMG from './Moscow.jpg'
import { MapContainer, CircleMarker, ImageOverlay, Popup, ZoomControl } from 'react-leaflet'
import L from 'leaflet'

function Moscow(props) {

  const data = props.data
  const bounds = [[0, 0], [1000, 2000]]
  const style = { height: '100%', width: '100%' }

  return (
    <div id="mapid">
      <MapContainer crs={L.CRS.Simple} minZoom={-1} bounds={bounds} style={style} preferCanvas={true} attributionControl={false} maxZoom={2} zoomControl={false} doubleClickZoom={false} scrollWheelZoom={false}>
        <ImageOverlay
          bounds={bounds}
          url={MoscowIMG}
        />
          {data.stats.points.map(point => (
            <CircleMarker
              center={[
                point[1],
                point[0]
              ]}
              radius={50}
              color={'orange'}
            >
              <Popup closeButton={false}>
                <ReactPlayer id="player" url={point[2]} controls={false} playing={true} loop={false} stopOnUnmount={true}/>
              </Popup>
            </CircleMarker>
              
          ))}
        
        <ZoomControl position="topright"/>
        
      </MapContainer>
    </div>
  );
}

export default Moscow;