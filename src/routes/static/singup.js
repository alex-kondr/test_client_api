const form = document.forms[0]

form.addEventListener('submit', async event => {
    event.preventDefault()

    // console.log("form birthday: ", form.birthday.value)
    form.username.value = "132"
    // boda = new FormData(form)

    for (value of form) {
        // console.log(value)
    }

    // for (key of boda.keys()) {
    //     console.log("body: ", key)
    // }
    // boda["username"] = "123"
    // for (key of boda.keys()) {
    //     if (!boda[key]) {
    //         boda.append("username", "Groucho")
    //     }        
    // }

    // for (key of boda.keys()) {
    //     console.log("key: ", key)
    //     console.log("value: ", boda[key])
    // }

    const response = await fetch(
        'http://localhost:8000/auth/singup',
            {
                method: 'POST',
                body: new FormData(form)
            }
    )


    result = await response.json()
    console.log("response status", response)
    console.log("result: ", result.detail, result)

    if (response.status === 201) {

        // const response_avatar = await fetch(
        //     'https://SilentDismalSweepsoftware.olieksandrkond3.repl.co/api/users/avatar',
        //         {
        //             method: 'PATCH',
        //             headers: {
        //                 'Content-Type': 'multipart/for-data'
        //             },
        //             body: ({
        //                 file: form.avatar.value
        //             })      
        //         }
        // )

        // console.log("avatar: ", response_avatar)

        // form.hidden = true
        // detail.innerHTML = result.detail
        // buttons.hidden = false
    }
    // else {
    //     form.hidden = true
    //     buttons.hidden = false
    //     msg = ""
    //     for (res of result.detail) {
    //         msg = msg + res.loc[1] + "-error: " + res.msg + "\n"
    //     }
    //     detail.innerHTML = msg
    // }

})


