import React from 'react';
import GoogleMapReact from 'google-map-react';
import mark from '../../assets/img/marker.png';
import { GOOGLE_API_KEY } from '../../constants/common';

const Marker = ({ text }) => <div>
    <img style={{ height: 50, width: 50 }} alt={text} src={mark}/>
    </div>;
export default props => <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
                defaultCenter={props.coordinates}
                defaultZoom={12}
            >
                    <Marker {...props.coordinates} text="Here"/>
            </GoogleMapReact>
    </div>;
