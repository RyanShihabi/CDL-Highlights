import React from 'react'
import ReactPlayer from 'react-player/lazy'
import CheckmateIMG from './Checkmate.jpg'
import Faze from './../teams/ATL-FAZ_Alternate-Logo-2.svg'
import Empire from './../teams/DAL_-_Empire.svg'
import { MapContainer, CircleMarker, ImageOverlay, Popup, ZoomControl } from 'react-leaflet'
import L from 'leaflet'

function Checkmate(props) {

  const data = props.data
  const bounds = [[0, 0], [1000, 2000]]
  const style = { height: '100%', width: '90%' }

  return (
    <div id="mapid">
      <MapContainer crs={L.CRS.Simple} minZoom={-1} bounds={bounds} style={style} preferCanvas={true} attributionControl={false} maxZoom={2} zoomControl={false} doubleClickZoom={false} scrollWheelZoom={false}>
        <ImageOverlay
          bounds={bounds}
          url={CheckmateIMG}
        />
          {data.stats.points.map(point => (
            <CircleMarker
              center={[
                point[1],
                point[0]
              ]}
              radius={50}
              color={'white'}
            >
              {/* <ImageOverlay bounds={[[point[1]-600, point[0]-600], [point[1]+50, point[0]+900]]} url={Faze}/> */}
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

export default Checkmate;