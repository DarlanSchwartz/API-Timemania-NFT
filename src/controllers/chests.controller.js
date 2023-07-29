import { ObjectId } from 'mongodb';
import { db } from "../database/database.connection.js"

export async function getChest(req, res) {

    const { id } = req.params;

    if (!id || id == '') return res.sendStatus(400);

    try {
        const chest = await db.collection('chests').findOne({ _id: new ObjectId(id) });
        if (!chest) return res.status(404).send('Baú não encontrado!');
        return res.status(200).send(chest);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function getAllChests(req, res) {
    try {
        const chests = await db.collection('chests').find().toArray();
        if (!chests) return res.status(404).send('Não há nenhum baú no banco');
        return res.status(200).send(chests);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function createChest(req, res) {
    const chest = req.body;
    try {
        await db.collection('chests').insertOne(chest);
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}