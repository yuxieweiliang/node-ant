

export default {
  rootClass: 'horizontal',
  list: [{
    id: 0,
    icon: 'address-book',
    title: 'Navigation One',
    active: false,
    subset: [{
      id: 1,
      title: 'navigation one',
      type: 'item',
    },{
      id: 2,
      title: 'navigation two',
      type: 'item',
    }]
  },{
    id: 3,
    icon: 'address-book',
    title: 'Navigation Two',
    type: 'item',
    subset: [{
      id: 4,
      title: 'navigation one',
      type: 'item',
    },{
      id: 5,
      title: 'navigation two',
      type: 'item',
      subset: [{
        id: 8,
        title: 'navigation one',
        type: 'item',
      },{
        id: 9,
        title: 'navigation two',
        type: 'item',
      },{
        id: 10,
        title: 'navigation one',
        type: 'item',
      },{
        id: 11,
        title: 'navigation two',
        type: 'item',
      }]
    },{
      id: 6,
      title: 'navigation one',
      type: 'item',
      subset: [{
        id: 38,
        title: 'navigation one',
        type: 'item',
      },{
        id: 39,
        title: 'navigation two',
        type: 'item',
      },{
        id: 30,
        title: 'navigation one',
        type: 'item',
      },{
        id: 31,
        title: 'navigation two',
        type: 'item',
      }]
    },{
      id: 7,
      title: 'navigation two',
      type: 'item',
    }]
  },{
    id: 12,
    icon: 'address-book',
    title: 'Navigation Two',
    type: 'item',
    disabled: true,
    subset: [[{
      id: 13,
      title: 'navigation one',
      type: 'item',
    },{
      id: 14,
      title: 'navigation two',
      type: 'item',
    },{
      id: 15,
      title: 'navigation one',
      type: 'item',
    },{
      id: 16,
      title: 'navigation two',
      type: 'item',
    }],[{
      id: 17,
      title: 'navigation one',
      type: 'item',
    },{
      id: 18,
      title: 'navigation two',
      type: 'item',
    },{
      id: 19,
      title: 'navigation one',
      type: 'item',
    },{
      id: 20,
      title: 'navigation two',
      type: 'item',
    }]]
  }]
}