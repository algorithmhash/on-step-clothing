import {atom} from 'recoil';

const shopItemListState = atom({
    key: 'shopItemList',
    default: [],
  });

export default shopItemListState;