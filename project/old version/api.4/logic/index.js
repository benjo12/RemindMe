import authenticateUser from './authenticateUser.js'
import registerUser from './registerUser.js'
import retrieveUser from './retrieveUser.js'
import createService from './createService.js'
import createEvent from './createEvent.js'
import retrieveService from './retrieveService.js'
import retrieveEvent from './retrieveEvent.js'
import deleteService from './deleteService.js'
import deleteEvent from './deleteEvent.js'

const logic = {
    authenticateUser,
    registerUser,
    retrieveUser,
    createService,
    createEvent,
    retrieveService,
    retrieveEvent,
    deleteService,
    deleteEvent
}

export default logic