
import React, { useRef, useState, useEffect } from "react";
import './search.css'
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
import Request from 'root/config/Request';
import * as CONFIG from  'root/config';

const public_url = import.meta.env.VITE_PUBLIC_URL;
import Form from 'react-bootstrap/Form';
const SearchLocation = React.memo((props) => {
    const [scriptLoaded, setScriptLoaded] = useState(true);
    const autocompleteRef = useRef(null);

    useEffect(() => {
        // Set scriptLoaded to true when the component mounts
        setScriptLoaded(true);
    }, []);
    const handlePlaceSelect = async () => {

        const place = autocompleteRef.current.getPlace();
        var result = JSON.parse(JSON.stringify(place));

        let city, state, locality, country, country_code;

        result.address_components.forEach(component => {
            if (component.types.includes('locality')) {
                city = component.long_name;
            } else if (component.types.includes('administrative_area_level_1')) {
                state = component.long_name;
            } else if (component.types.includes('sublocality_level_1')) {
                locality = component.long_name;
            } else if (component.types.includes('country')) {
                country = component.long_name;
                country_code = component.short_name;
            }
        });

        if (city == undefined) {
            city = state;
        }
        if (state == undefined) {
            state = city;
        }
        if (locality == undefined) {
            locality = city;
        }
        var formData = new FormData();
        formData.append('country', country);
        formData.append('latitude', result.geometry.location.lat);
        formData.append('longtitude', result.geometry.location.lng);
        formData.append('address', result.formatted_address);

        formData.append('country_code', country_code);
        formData.append('state', state);
        formData.append('city', city);
        formData.append('locality', locality);
        var response = await Request('admin/locations', 'POST', formData);
        props.onLocationSelect(response);
        // call api  
    };

    return (
        <>
  
            <LoadScript googleMapsApiKey={CONFIG.GOOGLE_API_KEY} libraries={['places']} >
                <Autocomplete
                    onLoad={(autocomplete) => {
                        autocompleteRef.current = autocomplete;
                    }}
                    onPlaceChanged={handlePlaceSelect}
                >
                    <Form.Control type="text" placeholder="Enter project Location" value={props.value} onChange={props.changeHandler} />
                </Autocomplete>
            </LoadScript>
  
        </>
    )
})

export default SearchLocation;