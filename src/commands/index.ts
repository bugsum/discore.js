import { Event } from '../types';
import interaction from '../events/interaction';
import message from '../events/message';
import ready from '../events/ready';

export default [ready, message, interaction] as Event[];
