import React from 'react'
import uuid from 'uuid/v4'
import db from 'data/db'

function useItems() {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        getItems()
    }, [])

    function getItems() {
        return db
            .table('items')
            .toArray()
            .then(setItems)
    }

    function addItem({
        favorite = false,
        name,
        notes = null,
        lastPrayed = null,
        prayerCount = 0,
        specialDate = null,
        type,
    }) {
        return db.table('items').add({
            favorite,
            id: uuid(),
            name,
            notes,
            lastPrayed,
            prayerCount,
            specialDate,
            type,
        })
    }

    function recordPrayerForId(id) {
        return db.items
            .where('id')
            .equals(id)
            .modify((item) => {
                item.lastPrayed = new Date().getTime()
                item.prayerCount += 1
            })
    }

    function editById(id, updates) {
        return db.items
            .where('id')
            .equals(id)
            .modify((item) => {
                for (const key in updates) {
                    item[key] = updates[key]
                }
            })
            .then(getItems)
    }

    function toggleFavoriteById(id) {
        return db.items
            .where('id')
            .equals(id)
            .modify((item) => {
                item.favorite = !item.favorite
            })
    }

    return [
        items,
        { add: addItem, editById, recordPrayerForId, toggleFavoriteById },
    ]
}

export default useItems
