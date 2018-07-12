const ProgrammingQuote = require('../../models/ProgrammingQuote')

module.exports = (req, res) => {
  const {_id, en, sr, author, source} = req.body
  const condition = (en || sr) && author
  if (!condition) return res.send('ARGUMENTS_ERROR')

  ProgrammingQuote.findById(_id, (err, quote) => {
    if (err) return console.error(err)
    quote.set({ en, sr, author, source })
    quote.save(err => {
      if (err) return console.error(err)
      res.send('SUCCESS_SAVED')
    })
  })
}
