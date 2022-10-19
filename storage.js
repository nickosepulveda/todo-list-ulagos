class Storage {
    constructor(source = new SessionStorage){
        this.source = source;
    }

    get(key){
        return this.source.get(key);    
    }

    set(key, value){
        return this.source.set(key, value);
    }
}

class SessionStorage {
    get(key){
        return JSON.parse(sessionStorage.getItem(key));    
    }

    set(key, value){
        return sessionStorage.setItem(key, JSON.stringify(value));
    }
}

class LocalStorage {
    get(key){
        return JSON.parse(localStorage.getItem(key));    
    }

    set(key, value){
        return localStorage.setItem(key, JSON.stringify(value));
    }
}

class ApiStorage {
    get(key){
        //return JSON.parse(localStorage.getItem(key));    
    }

    set(key, value){
        //return localStorage.setItem(key, JSON.stringify(value));
    }
}