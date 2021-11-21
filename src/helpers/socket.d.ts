import { Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
declare const socket: (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => void;
export default socket;
