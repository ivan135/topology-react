import { Reducer } from 'redux';

export interface ICanvasData {
  data: any
}

export interface CanvasDataModelType {
  namespace: 'canvas';
  state: ICanvasData;
  reducers: {
    update: Reducer<ICanvasData>;
  };
}

const CanvasDataModel: CanvasDataModelType = {
  namespace: 'canvas',

  state: {
    data: {
      lineName: 'curve',
      fromArrowType: '',
      toArrowType: 'triangleSolid',
      scale: 1,
      locked: 0,
    }
  },

  reducers: {
    update(state, action) {
      return {
        ...state,
        data: action.payload.data,
      };
    },
  },
};

export default CanvasDataModel;
