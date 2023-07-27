import { ObjectId } from 'mongodb';
import db from '../database/database.connection.js';

export async function login(req, res) {

    try {
        return res.status(200).send('');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}


export async function register(req, res) {

    try {
        return res.status(200).send('');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function addCard(req, res) {

    try {
        return res.status(200).send('');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function removeCard(req, res) {

    try {
        return res.status(200).send('');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function addBet(req, res) {

    try {
        return res.status(200).send('');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function removeBet(req, res) {

    try {
        return res.status(200).send('');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function addChest(req, res) {

    try {
        return res.status(200).send('');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function removeChest(req, res) {

    try {
        return res.status(200).send('');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}