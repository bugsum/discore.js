import { Event } from '../types';
import interaction from './interaction';
import message from './message';
import ready from './ready';

export default [ready, message, interaction] as Event[];
