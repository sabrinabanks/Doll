import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

const Doll = EmberObject.extend({
    name: '',
    bio:'',
    propic:''
});

const Item = EmberObject.extend({
    Name:'',
    item:'',
});
export default class DollsRoute extends Route {
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
    let  ellaDoll = Doll.create({
        name: 'Ella',
        slug: 'ella',
        bio: 'Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll1.png',
        items: A([bunny])
    });
    let  darbyDoll = Doll.create({
        name: 'Darby',
        slug: 'darby',
        bio: 'Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll6.png',
        items: A([kitty])
    });
    let  annieDoll = Doll.create({
        name: 'Annie',
        slug: 'annie',
        bio: 'bio Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll3.png',
        items: A([guppy])
    });
    let  emmaDoll = Doll.create({
        name: 'Emma',
        slug: 'emma',
        bio: 'Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll4.png',
        items: A([geco])
    });
    let  miaDoll = Doll.create({
        name: 'Mia',
        slug: 'mia',
        bio: 'Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll5.png',
        items: A([puppy])
    });
    let  melodyDoll = Doll.create({
        name: 'Melody',
        slug: 'melody',
        bio: 'Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll2.png',
        items: A([birdie])
    });
    
    
        
return A([ellaDoll, darbyDoll, annieDoll, emmaDoll, miaDoll, melodyDoll]);
    }
};

