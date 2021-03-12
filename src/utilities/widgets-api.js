import sendRequest from './send-request';

const BASE_URL = '/api/widgets';

export function getAll() {
    return sendRequest(BASE_URL);
}