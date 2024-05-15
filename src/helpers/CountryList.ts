import { Country } from "@/types/stateTypes";



//get country names
export const getCountries=():Country[]=>{

    //english language
    const lang='en'
    const A = 65
    const Z = 90
    const countryName = new Intl.DisplayNames([lang], { type: 'region' });
    const countries = []
    for(let i=A; i<=Z; ++i) {
        for(let j=A; j<=Z; ++j) {
            let code = String.fromCharCode(i) + String.fromCharCode(j)
            let name = countryName.of(code)
            if (name && code !== name) {
                countries.push({code,name})
            }
        }
    }

    //returns array of country code and names
    return countries
}

