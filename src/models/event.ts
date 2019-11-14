import { Reducer } from 'redux';

export interface IEvent {
  event: string;
  data: any
}

export interface EventModelType {
  namespace: 'event';
  state: IEvent;
  reducers: {
    emit: Reducer<IEvent>;
  };
}

const EventModel: EventModelType = {
  namespace: 'event',

  state: {
    event: '',
    data: null
  },

  reducers: {
    emit(state, action) {
      return {
        ...state,
        event: action.payload.event,
        data: action.payload.data,
      };
    },
  },
};

export default EventModel;
