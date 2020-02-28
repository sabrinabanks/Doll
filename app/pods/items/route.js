import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

const Item = EmberObject.extend({
    doll: '',
    name:''
});
export default class ItemsRoute extends Route {
        model() {
            let bunny = Item.create({
                doll: 'Ella',
                name: 'bunny',
        });
            let kitty = Item.create({
                doll: 'Darby',
                name: 'kitty',
        });
            let guppy = Item.create({
                doll: 'Annie',
                name: 'guppy',
        });
            let geco = Item.create({
                doll: 'Emma',
                name: 'geco',
        });
            let puppy = Item.create({
                doll: 'Mia',
                name: 'puppy',
        });
            let birdie = Item.create({
                doll: 'Melody',
                name: 'birdie',
        });
            
    
        return ([bunny, kitty, guppy, geco, puppy, birdie]);
        }
    };
    

