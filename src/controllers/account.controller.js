import { stripHtml } from "string-strip-html";
import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt";
import { v4 as uuid } from 'uuid';
import { ObjectId } from "mongodb";

export async function login(req, res) {
    const { email, password } = req.body;

    const sanitizedEmail = stripHtml(email).result.trim();
    const sanitizedPassword = stripHtml(password).result.trim();


    try {
        const usuario = await db.collection("usuariosCadastrados").findOne({ email: sanitizedEmail });
        if (!usuario) return res.status(404).send("Usuário não cadastrado");

        const senhaEstaCorreta = bcrypt.compareSync(sanitizedPassword, usuario.password);
        if (!senhaEstaCorreta) return res.status(401).send("Senha incorreta");

        const token = uuid();
        await db.collection("login").insertOne({ token, idUsuario: usuario._id });


        return res.status(200).send({ token: token, nome: usuario.name, _id: usuario._id });

    } catch (err) {
        res.status(500).send(err.message);
    }
}


export async function register(req, res) {

    const { name, email, dataNascimento, cpf, password } = req.body;

    const sanitizedName = stripHtml(name).result.trim();
    const sanitizedEmail = stripHtml(email).result.trim();
    const sanitizeddataNascimento = stripHtml(dataNascimento).result.trim();
    const sanitizedCpf = stripHtml(cpf).result.trim();
    const sanitizedPassword = stripHtml(password).result.trim();


    try {
        const usuario = await db.collection("usuariosCadastrados").findOne({ email: sanitizedEmail });
        if (usuario) return res.status(409).send("Esse usuário já existe!");

        const hash = bcrypt.hashSync(sanitizedPassword, 10);

        await db.collection("usuariosCadastrados").insertOne({ name: sanitizedName, email: sanitizedEmail, dataNascimento: sanitizeddataNascimento, cpf: sanitizedCpf, password: hash });

        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function addCards(req, res) {

    console.log(req.body);

    try {
        const usuario = await db.collection("login").findOne({ token: req.body[0] });
        const Cards = await db.collection("usuariosCadastrados").findOne({ _id: new ObjectId(usuario.idUsuario)});
        const filtro = { _id: new ObjectId(usuario.idUsuario) };
        const atualizacao = Cards.arrCards ? { $set: { arrCards: [...Cards.arrCards,{...req.body[1],id:uuid()},{...req.body[2],id:uuid()}] } } : { $set: { arrCards: [{...req.body[1],id:uuid()},{...req.body[2],id:uuid()}] } };
        await db.collection("usuariosCadastrados").updateOne(filtro, atualizacao);
        return res.status(200).send('Cartas Adicionadas com Sucesso');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}
export async function getCards(req, res) {

    const { token } = req.params;

    try {
        const usuario = await db.collection("login").findOne({ token  });

        const Cards = await db.collection("usuariosCadastrados").findOne({ _id: new ObjectId(usuario.idUsuario)});

        if(!Cards || !Cards.arrCards) return res.status(404).send({message:"Não foi possível encontrar nada pelo id solicitado"});

        return res.status(200).send(Cards.arrCards);

    } catch (err) {

        return res.status(500).send(err.message);

    }
}

export async function removeCard(req, res) {

    const {id,token} = req.params;

    try {
        const lUser = await db.collection("login").findOne({ token:id  });
        const user = await db.collection("usuariosCadastrados").findOne({ _id: new ObjectId(lUser.idUsuario)});
        console.log(token);
        console.log(user.arrCards);
        const newCards = user.arrCards.filter(card => card.id !== token);
        console.log(newCards);
       
        await db.collection("usuariosCadastrados").updateOne({_id: new ObjectId(user._id) }, {$set:{ arrCards:newCards }});
        return res.status(200).send("Carta SACADA");
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