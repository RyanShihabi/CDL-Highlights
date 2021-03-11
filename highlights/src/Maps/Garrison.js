import React from 'react'
import ReactPlayer from 'react-player/lazy'
import GarrisonIMG from './Garrison.jpg'
import { MapContainer, CircleMarker, ImageOverlay, Popup, ZoomControl } from 'react-leaflet'
import L from 'leaflet'

function Garrison(props) {

  const data = props.data
  const bounds = [[0, 0], [1000, 2000]]
  const style = { height: '60%', width: '90%' }

  return (
    <div id="mapid">
      <MapContainer crs={L.CRS.Simple} minZoom={-1} bounds={bounds} style={style} preferCanvas={true} attributionControl={false} maxZoom={2} zoomControl={false} doubleClickZoom={false} scrollWheelZoom={false}>
        <ImageOverlay
          bounds={bounds}
          url={GarrisonIMG}
        />
          {data.stats.points.map(point => (
            <CircleMarker
              center={[
                point[1],
                point[0]
              ]}
              radius={50}
              color={'transparent'}
            >
              <ImageOverlay bounds={[[point[1]-100, point[0]-1000], [point[1]+100, point[0]+1000]]} url={point[3]}/>
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

export default Garrison;