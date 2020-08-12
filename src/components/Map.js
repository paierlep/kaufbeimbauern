import React from 'react'
import { divIcon } from 'leaflet'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { renderToStaticMarkup } from 'react-dom/server'

export default class OsmMap extends React.Component {
    onMarkerClick = (id, title) => {
        const name = encodeURI(title.replace(/\s/g, '_'))
        window.history.pushState('', '', '/' + name)
        this.props.onSelection(id, name)
    }

    render() {
        const position = [47.066667, 15.45]
        const zoom = 12

        let filterData = []
        for (const itemIndex in this.props.data) {
            const item = this.props.data[itemIndex]
            if (this.props.activeCategories.indexOf(item.category) > -1) {
                filterData.push(item)
            }
        }

        let icons = []
        const marketIconMarkUp = renderToStaticMarkup(<i className="market-color fa fa-map-marker-alt fa-3x" />)
        const machineIconMarkUp = renderToStaticMarkup(<i className="machine-color fa fa-map-marker-alt fa-3x" />)
        icons.push(divIcon({
          html: machineIconMarkUp,
        }))

        icons.push(divIcon({
          html: marketIconMarkUp,
        }))

        return (
            <Map center={position} zoom={zoom}>
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filterData.map((marker, index) =>
                <Marker key={index}
                        icon={icons[marker.category-1]}
                        position={[marker.geoCoord.lat, marker.geoCoord.lng]}
                        onClick={() => this.onMarkerClick(marker.id, marker.title)} />
            )}
            </Map>
    )
    }
}
