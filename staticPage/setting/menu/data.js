

export default {
  class: 'horizontal',
  list: [{
    icon: 'address-book',
    title: 'Navigation One',
    active: false,
    subset: [{
      title: 'navigation one',
      type: 'item',
    },{
      title: 'navigation two',
      type: 'item',
    }]
  },{
    icon: 'address-book',
    title: 'Navigation Two',
    type: 'item',
    subset: [[{
      title: 'navigation one',
      type: 'item',
    },{
      title: 'navigation two',
      type: 'item',
    },{
      title: 'navigation one',
      type: 'item',
    },{
      title: 'navigation two',
      type: 'item',
    }],[{
      title: 'navigation one',
      type: 'item',
    },{
      title: 'navigation two',
      type: 'item',
    },{
      title: 'navigation one',
      type: 'item',
    },{
      title: 'navigation two',
      type: 'item',
    }]]
  },{
    icon: 'address-book',
    title: 'Navigation Two',
    type: 'item',
    disabled: true,
    subset: [[{
      title: 'navigation one',
      type: 'item',
    },{
      title: 'navigation two',
      type: 'item',
    },{
      title: 'navigation one',
      type: 'item',
    },{
      title: 'navigation two',
      type: 'item',
    }],[{
      title: 'navigation one',
      type: 'item',
    },{
      title: 'navigation two',
      type: 'item',
    },{
      title: 'navigation one',
      type: 'item',
    },{
      title: 'navigation two',
      type: 'item',
    }]]
  }]
}