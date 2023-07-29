//cards
import { db } from "../database/database.connection.js"

export async function insertCard(req, res) {

    const {chest} = req.params;

    if (!chest || chest == '') return res.sendStatus(404);

    try {
        const chest = await db.collection('chests').findOne({name:chest});
        if (!chest) return res.status(404).send('Baú não encontrado!');

        chest.cards.push(req.body);

        await db.collection('chests').insertOne(chest);

        return res.status(201).send(chest);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

/*
    {
        image: romario.jpg,
        name: Romario,
        description: Romario fazendo o simbolo de silêncio,
        token: 0x12lkjdh178jnsdk12e789
    }
*/
