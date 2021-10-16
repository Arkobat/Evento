/*

    ?access_key=
    &query=1600 Pennsylvania Ave NW, Washington DC
*/

interface LocationInfo {
    latitude: number
    longitude: number
    type: 'venue' | 'address' | 'street' | 'neighbourhood' | 'borough' | 'localadmin' | 'locality' | 'county' | 'macrocounty' | 'region' | 'macroregion' | 'country' | 'coarse' | 'postalcode'
    name: string
    number: string
    postal_code: string
    street: string
    confidence: number
    region: string
    region_code: string
    county: string
    locality: string
    administrative_area: string
    neighbourhood: string
    country: string
    country_code: string
    continent: string
    label: string
}

async function searchAddress(address: string): Promise<LocationInfo | undefined> {
    const accessKey = 'b28c684a1774b1c62fa7bf251aba6456'
    const url = `http://api.positionstack.com/v1/forward?access_key=${accessKey}&query=${address}`
    let result = await fetch(url)
    return undefined;
}