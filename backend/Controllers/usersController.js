// @desc Get utilisateurs
// @route Get/api/utilisateurs
// @access Private
const getUtilisateur=(req, res)=>{
    res.status(200).json({message: 'view users'})
}
// @desc Post utilisateur
// @route Post/api/utilisateur
// @access Private
const postUtilisateur=(req,res)=>{
    if(!req.body.name){
        res.status(400).json({message: 'please fill the field.'})
    }
    let nom= req.body.name;
    res.status(200).json({message: `update successful user:${nom}`}) 
}

// @desc Update utilisateur
// @route Put/api/utilisateur/id
// @access Private
const updateUtilisateur=(req,res)=>{
    res.status(200).json({message: `Modified user's ID:${req.params.id}`})
}

// @desc Delete utilisateur
// @route Delete/api/utilisateur/id
// @access Private
const deleteUtilisateur=(req,res)=>{
    res.status(200).json({message: `Delete user's ID:${req.params.id}`})
}

module.exports={
    getUtilisateur,
    postUtilisateur,
    updateUtilisateur,
    deleteUtilisateur
}