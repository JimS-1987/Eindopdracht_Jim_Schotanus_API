const baseUrl = ("http://localhost:3000/")
const id = document.getElementById('input')


async function data() {

    const res = await fetch(baseUrl,id, {
        method: "GET",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },

    }).then(res => {
        if (!res.ok) {
            throw Error("ERROR")
        }
        return res.json()

    })

        .then(data => {
            return console.log(data)
        })
}
data()


async function dataPost() {
    const post = { description: "buy oatmeal", done: false };
    await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => {
        if (!res.ok) {
            throw Error("ERROR")
        }
        return res.json()

    })

        .then(data => {
            return console.log(data)
        });
}
//dataPost()