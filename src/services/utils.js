function _getStatusMessage(status) {
    let errorMessage = ""

    switch (error.response.status) {
        case 400:
            errorMessage = "We could not process that action"
            break;
        case 403:
            errorMessage = "You exceeded the rate limit"
            break;
        case 404:
            errorMessage = "The requested resource could not be found"
            break;
        case 500:
            errorMessage = "We had a problem with our server. Please try again later"
            break;
        case 503:
            errorMessage = "We are temporarily offline for maintenance. Please try again later"
            break;
        default:
            errorMessage = "Something wrong."
            break;
    }

    return errorMessage
}

function _getResponseErrorMessage(error) {
    if (error.response && error.response.data) return error.response.data.message
    if (error.response && error.response.statusText) return error.response.statusText
    return error.message
}

export class ErrorWrapper extends Error {
    constructor(error, message) {
        super()
        this.success = error.response ? error.response.data.success : false
        this.meta = error.response ? error.response.data.meta : false
        this.code = error.response ? error.response.data.code : false
        this.status = error.response ? error.response.status : false
        this.statusMessage = _getStatusMessage(this.status)
        this.message = message || _getResponseErrorMessage(error)
    }
}
