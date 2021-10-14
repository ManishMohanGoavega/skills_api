const { PrismaClient } = require('@prisma/client')
const { skills } = new PrismaClient

const getAllSkills = async (req,res)=>{
    const allSkills = await skills.findMany({
        select: {id: true, skill: true}
    });
    res.json(allSkills)
};

const getSingleSkill = async (req, res)=>{
    const skillId = req.params.id;
    const skill = await skills.findUnique({
        where: {id: parseInt(skillId) }
    });
    res.json(skill)
}

const addSkill = async (req, res)=>{
    const { skill } = req.body;
    const newSkill = await skills.create({
        data:{skill}
    });
    res.json({msg: "skill added", newSkill})
}

const updateSkill = async (req, res)=>{
    const { id, skill } = req.body;
    const skillExists = await skills.findUnique({
        where: {id}
    });
    if(!skillExists){
        res.status(400).json({msg: `no skill with the id ${id}`})
        return
    };

    const updatedSkill = await skills.update({
        where: {id},
        data: {skill}
    });

    res.json({msg: "skill updated", updatedSkill})
};

const deleteSkill = async (req,res)=>{
    const skillId = req.params.id;
    const skillExists = await skills.findUnique({

        where: {id: parseInt(skillId)}
    });
    if (!skillExists){
        res.status(400).json({msg: `no product with id ${skillId}`})
        return
    }
    await skills.delete({
        where: {id: parseInt(skillId)}
    });
    res.json({msg: `product with id ${skillId} is deleted`})
    
}

module.exports = {getAllSkills, getSingleSkill, addSkill, updateSkill, deleteSkill}