import { logger, createEvent } from '../../utils';

export default createEvent('error', false, (instance, error) => {
    logger.error(error);
});
