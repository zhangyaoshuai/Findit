const Router = require('koa-router');
const router = new Router();

const voteController = require('../controllers/voteController');
const adminController = require('../controllers/adminController');

router.post('/api/v1/admin/dept/new', adminController.addDept);
router.post('/api/v1/vote/action', voteController.voteAction);
router.post('/api/v1/vote/list', voteController.getDeptList);
router.post('/api/v1/admin/vote/all', adminController.getVotes);

module.exports = router;