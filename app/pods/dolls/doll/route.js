import Route from '@ember/routing/route';

export default class DollsDollRoute extends Route {
    model(params) {
        let dolls = this.modelFor('dolls');
        return dolls.find(doll => doll.slug === params.slug)
    }
};
