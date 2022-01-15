import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useState } from "react";

export default function useStoreItemsHook(page) {
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(false)
    const [items, setitems] = useState([])
    //for infinte scroll
    const [hasmore, sethasmore] = useState(true)
    useEffect(() => {
        //databse related work
        async function fetchItems() {
            const db = getDatabase()

            //FIrebase database name = "items"
            const itemsRef = ref(db, "items")
            const itemsQuery = query(
                itemsRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(8)
            )

            try {
                setloading(true)
                //request firebase database
                const snapshot = await get(itemsQuery)
                setloading(false)
                if (snapshot.exists()) {
                    setitems((prevItems) => {
                        //immutably change array and converted Object to Array and set the items
                        setitems(...prevItems, ...Object.values(snapshot.val()))
                    })
                }else{
                    sethasmore(false)
                }
            } catch (error) {
                console.log(error);
                setloading(false)
                seterror(true)
                
            }

        }
        
        fetchItems()
    }, [page])

    return {
        loading,
        error,
        items,
        hasmore
    }
}