import Twit from '../../lib/tweet'

export default (req, res) => {
  Twit.get('search/tweets', { from: 'mertcankose_', count: 10 }, function (
    err,
    data,
    response
  ) {
    if (err) {
      return res.status(400).json(JSON.stringify({message:'Ups! bir hata oldu!'}))
    }
    res.status(200).json(JSON.stringify(data))
  })
}
