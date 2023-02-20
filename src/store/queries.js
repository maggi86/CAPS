import firebase from './sdk'
const db = firebase.firestore()

export const getData = async (qry) => {
    const data = await db.collection(qry).get()
    let table = []
    data.forEach(e => {
        table.push(e.data())
    });
    return table
}

export const getSingle = async (qry, docid) => {
    const data = await db.collection(qry).doc(docid).get()
    return data.data()
}

export const setData = async (qry, payload) => {
    let data = await db.collection(qry).add(payload);
    payload.docid = data.id
    updateData(qry, payload)
}

export const updateData = async (qry, payload) => {
    let data = await db.collection(qry)
        .doc(payload.docid).update(payload)
        return data
}