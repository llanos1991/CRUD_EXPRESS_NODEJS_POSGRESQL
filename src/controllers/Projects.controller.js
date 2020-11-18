import { Project } from '../models/Projects';

async function createProject(req,res){

    const {name,priority,description,deliverydate} = req.body;
    try{
    let newProject=await Project.create(
        {
            name,
            priority,
            description,
            deliverydate
        },{
        fields:['name','priority','description','deliverydate']
        });

        if(newProject){
            return res.json(
                {
                    message:'project successfully',
                    data:newProject
                }
            );
        }

    }
    catch(error)
    {
        console.log(error);
        res.status(500).json(
            {
                message: 'something goes wrong',
                data:{}
            }
        );
    }
};

async function getProject(req,res){
    try{
   const projects= await Project.findAll();
    res.json(
        {
            data:projects
        }
    )
    }
    catch(error){
        console.log(error);
    }
};

async function getOneProject(req,res){
    try{
        const {id} = req.params;
        const project=await Project.findOne(
       {
           where:{
               id:id
           }
        });
    res.json(
        {
            data:project
        }
    )
    }
    catch(error){
        console.log(error);
    }
}

async function deleteProject(req,res){
    try{
        const {id} = req.params;
        const deleteRowCount=await Project.destroy(
       {
           where:{
               id:id
           }
        });
    res.json(
        {
            message:'project delete succesfull',
            count:deleteRowCount
        }
    )
    }
    catch(error){
        console.log(error);
    }
}

async function updateProject(req,res){
    try{
        const {id} = req.params;
        const {name,priority,description,deliverydate} = req.body;

     const projects=await Project.findAll(
       {
           attributes: ['id','name','priority','description','deliverydate'],
           where:{
               id:id
           }
        });

        if(projects.length>0)
            {
                projects.forEach( async Project => {
                    await Project.update(
                        {
                            id,
                            name,
                            priority,
                            description,
                            deliverydate
                        }
                    )
                });
            }


    res.json(
        {
            message:'project update succesfull',
            data:projects
        }
    )
    }

    catch(error){
        console.log(error);
    }
}

export{
    createProject,
    getProject,
    getOneProject,
    deleteProject,
    updateProject
}