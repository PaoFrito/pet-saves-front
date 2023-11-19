import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons'
import { RadioOptions } from '../../components/RadioGroup'

const faDogIcon = <FontAwesomeIcon icon={faDog} size="2x"/>
const faCatIcon = <FontAwesomeIcon icon={faCat} size="2x"/>

enum Species {
    dog = "cachorro",
    cat = "gato"
}

export const SelectSpecies: RadioOptions[] = [
    { label: Species.dog, icon: faDogIcon },
    { label: Species.cat, icon: faCatIcon },
]

export default Species;