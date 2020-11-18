import {Router} from 'express'

const router= Router();

import {createProject} from '../controllers/Projects.controller';
import {getProject} from '../controllers/Projects.controller';
import {getOneProject} from '../controllers/Projects.controller';
import {deleteProject} from '../controllers/Projects.controller';
import {updateProject} from '../controllers/Projects.controller';


//  /api/projects/
router.post('/',createProject);
router.get('/',getProject);

// /api/projects/:projectID
router.get('/:id',getOneProject);

router.delete('/:id',deleteProject);

router.put('/:id',updateProject);

export default router;