import { ObjectId } from 'mongodb';
import { db } from "../database/database.connection.js"

export async function getTeam(req, res) {

    const { team } = req.params;

    if (!team || team == '') return res.sendStatus(404);

    try {
        const team = await db.collection('teams').findOne({team});
        if (!team) return res.status(404).send('Time não encontrado!');
        return res.status(200).send(team);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function getTeams(req, res) {
    try {
        const teams = await db.collection('teams').find().toArray();
        return res.status(200).send(teams);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function registerTeam(req, res) {

    const { team } = req.params;

    if (!team || team == '') return res.sendStatus(404);

    try {
        const team = await db.collection('teams').findOne({team});
        if (!team) return res.status(404).send('Time não encontrado!');
        return res.status(200).send(team);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}
