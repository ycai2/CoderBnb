import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SpotsMiddleware from './spots_middleware';
import BookingMiddleware from './booking_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SpotsMiddleware,
  BookingMiddleware
);

export default RootMiddleware;
