function basicAPI(res, req){
    res.status(200).json(
        {
            'success' : true
        }
    )
}

function testAPI(res, req){
    res.status(200).json(
        {
            'message' : 'test'
        }
    )
}

function postTestAPI(res, req){
    const user_message = req.body.message;
    res.status(200).json({
        'message' : user_message
    })
}

module.exports={
    basicAPI: basicAPI,
    testAPI: testAPI,
    postTestAPI: postTestAPI,
}


