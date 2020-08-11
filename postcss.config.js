module.exports = {
    plugins: {
        'postcss-nested': {},
        'postcss-custom-media':{
            importFrom: [
                {
                    customMedia: {'--tl': '(max-width:776px)'}

                },
                {
                    customMedia: {'--t': '(max-width:980px)'}
                },
                {
                    customMedia: {'--d': '(max-width:1270px)'}

                }
            ]
        }
    }
}