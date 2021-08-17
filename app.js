const express = require('express')
const app = express()
const APIKey = 'AIzaSyBRCk_ltxJ3NbemepP7L1h-HjudXi7e-ME';
const googleTranslate = require('google-translate')(APIKey);
const connectDB = require('./config/config')
const Lang = require('./models/lang')

connectDB();

app.get('/translate', async (req, res) => {
    const { q, target } = req.query;
    const lang = await Lang.findOne({ q: q, "translations.language": target });
    if (lang !== null) {
        const resp = lang.translations.filter(i => i.language === target)
        return res.send({
            message: "success",
            translation: resp[0].translation
        })
    } else {
        googleTranslate.translate(q, target, async function (err, translation) {
            let updateData = {
                language: target,
                translation: translation.translatedText
            }
            const updateRes = await Lang.updateOne({ q: q }, { "$push": { translations: updateData } }, { upsert: true });
            return res.send({
                message: "success",
                translation: translation.translatedText,
            })
        })
    }
});

app.listen(3000, (req, res) => {
    console.log('API running on port 3000')
})