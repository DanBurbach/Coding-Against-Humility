import selectedTicketReducer from './selected-ticket-reducer';
import ticketListReducer from './ticket-list-reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedTicket: selectedTicketReducer,
  masterTicketList: ticketListReducer
});

export default rootReducer;
