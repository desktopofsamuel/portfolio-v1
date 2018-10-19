import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 1920,
  minHeight: 800,
  margin: "0",
  fontFamily: "IBM Plex Sans, sans-serif",
}

class AnnotatedMap extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 3500,
            rotation: [0,0,0],
          }}
          width={1920}
          height={1080}
          style={{
            width: "100%",
          }}
          >
          <ZoomableGroup center={[122,14.5]} disablePanning>
            <Geographies geography="/static/world-50m.json">
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                  <Geography
                    key={i}
                    round
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#f7f7f7",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
              ))}
            </Geographies>
            <Annotation
              dx={ 40 }
              dy={ 20 }
              subject={ [ 114.5, 22 ] }
              strokeWidth={ 1 }
              stroke="#607D8B"
              >
              <text style={{padding:"5px"}}>{ "Hong Kong" }</text>
            </Annotation>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default AnnotatedMap