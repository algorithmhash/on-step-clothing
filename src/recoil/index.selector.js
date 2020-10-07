const filteredItemListState = selector({
    key: 'filteredItemListState',
    get: ({get}) => {
      const filter = get(itemListFilterState);
      const list = get(itemListState);
  
      switch (filter) {
        case 'Show Completed':
          return list.filter((item) => item.isComplete);
        case 'Show Uncompleted':
          return list.filter((item) => !item.isComplete);
        default:
          return list;
      }
    },
  });

  export default filteredItemListState;