const items = [1, 'dev', false, 1.23];

function Iterator(items) {
    this.items = items;
    this.index = 0;
}

Iterator.prototype = {
    hasNext: function() {
       return this.index <this.items.length; 
    },

    next: function() {
       return this.items[this.index++];
    },

}

const iterator = new Iterator(items);
while(iterator.hasNext()) {
    console.log('Next==> ', iterator.next());
}