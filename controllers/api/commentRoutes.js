const router = require('express').Router();
const { Comment} = require('../../models');
const withAuth = require('../../utils/auth.js');

// This GET method will find any comments that have been posted to the server
router.get('/', async (req, res) => {
  const commentData = await Comment.findAll().catch((err) => { 
      res.json(err);
    });
      const comments = commentData.map((comment) => comment.get({ plain: true }));
      res.render('project', { comments});
    });



router.post('/', async (req, res) => {

  try {
  const commentData= await Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    });
    res.status(200).json(commentData)
  } catch (err) {
    res.status(400).json(err);
  }
});

// // Delete comment
// router.delete('/:id', withAuth, (req, res) => {
//   Comment.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(returnedData => {
//       if (!returnedData) {
//         res.status(404).json({ message: 'Nothing found' });
//         return;
//       }
//       res.json(returnedData);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });



module.exports = router;