function tempo(req, res) {
    const dynamicDate = new Date();

    Response.json({
        date: dynamicDate.toGMTString()
    })

}

export default tempo;