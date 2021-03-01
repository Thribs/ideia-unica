function tempo(req, res) {
    const dynamicDate = new Date();

    Response.json({
        date: dynamicDate.toUTCString()
    })

}

export default tempo;