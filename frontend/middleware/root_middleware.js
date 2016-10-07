import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SpotsMiddleware from './spots_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SpotsMiddleware
);

export default RootMiddleware;
