const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        // '...' is a spread operator, allows an array or string to be expanded as well as an objext expression
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

router.get('/', async (req, res) => {
    try {
      const commentData = await Comment.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const comments = commentData.map((comment) => comment.get({ plain: true }));
  
  
      res.render('project', { 
        comments, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;
