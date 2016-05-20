
    interface IDBStoreConfig {
        dbVersion?:number
        storeName:string
        keyPath?:string
        autoIncrement?:boolean
        indexes?:[any]
        onStoreReady?:()=>void
        onError?:(err:any)=>void
    }

    interface IDBStoreQueryOptions {
        index?:string
        keyRange?:IDBKeyRange
        order?:string
        filterDuplicates?:boolean
        writeAccess?:boolean
        onEnd?: ()=>void
        onError?: (err?:any)=>void
    }

    interface IDBStore {
        get(id:any, onsuccess:(id:any)=>void, onerror:(error:Error)=>void)
        remove(id:any, onsuccess:(id:any)=>void, onerror:(error:Error)=>void)
        put(object:Object, onsuccess:(id:any)=>void, onerror:(error:Error)=>void)
        iterate(onItem:(item:any)=>void,options?:IDBStoreQueryOptions)
    }
    interface IDBStoreFactory {

        new(config:IDBStoreConfig):IDBStore
    }

    declare var IDBStore: IDBStoreFactory;
    
declare module 'idb-wrapper' {
    export = IDBStore;
}