// A localStorage object for performing crud operations on window.localStorage with ease

export const Storage = {
    // check if local storage is supported on browser
    exists: (window.localStorage !== undefined),
    // get the local storage data of the key
    get(key) {
        if (!this.exists) return;
        const data = window.localStorage.getItem(key);
        if (!data) return;
        return JSON.parse(data);
    },
    // add a new data to given key in local storage
    add(key, data) {
        if (!this.exists) return;
        window.localStorage.setItem(key, JSON.stringify(data));
    },
    // remove the data by the given key from local storage
    remove(key) {
        if (!this.exists) return;
        window.localStorage.removeItem(key);
    },
    // wipe entire local storage of current domain
    wipe() {
        if (!this.exists) return;
        window.localStorage.clear();
    },
    removeProduct(id) {
        const data = Storage.get("products");
        const filteredData = data.filter(e => e.id !== id);
        return Storage.add('products', filteredData);
    }
}
