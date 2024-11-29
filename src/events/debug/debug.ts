import { logger, createEvent } from '../../utils';

export default createEvent('debug', false, (instance, message) => {
    logger.debug(message);
});
