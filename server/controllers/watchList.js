const Movie = require('../models/movie')
const User = require('../models/user')

exports.addMovieToList = function(req, res, next) {
  User.findOne({_id: req.user._id}, function (err, user) {
    const movie = new Movie.MovieModel(req.body.movie);

    console.log(movie)

    movie.save(function (err, movie) {
      user.watchList.push(movie)

      user.save(function (err, user) {
        res.send(movie)
      })
    })
  })
}
