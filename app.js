const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/form', (req, res) => {
    res.send(`
    <form action="/submit" method="post">
    <input name="username" placeholder="Username"/>
    <input name="password" placeholder="Password"/>
    <input type="submit" value="submit" />
    </form>
    `)
})
app.post('/submit', express.urlencoded({ extended: false }), (req, res) => {
    console.log(req.body)
    axios.post('https://testapi-53ffb24.firebaseio.com/ourData.json?auth=v95s4567fMgyCW5675PQ4567ttYSrQK5677567PLZVFhvgfeWSVOl0cR', req.body)
        .then((r) => res.end('All good'))
        .catch((e) => res.end('Not good'))

})

app.get('/online', (req, res) => {
    axios.get('https://testapi-53ffb24.firebaseio.com/ourData.json?auth=v95s4567fMgyCW5675PQ4567ttYSrQK5677567PLZVFhvgfeWSVOl0cR')
        .then(response => res.send(response.data))
        .catch((e) => res.end(e))
})

app.listen(3000, () => console.log('listening on 3000'))