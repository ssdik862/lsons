import faker from 'faker';
class User {
    constructor(userKey) {
        console.log('constructor worked!');
        this._key = userKey;
    }
    _key;
    _name = faker.name.findName();
    _age = faker.datatype.number({ min: 18, max: 54 });
    _session;
    get key() {
        return this._key;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get session() {
        return this._session;
    }
    set session(value) {
        this._session = value;
    }
}
export default User;
