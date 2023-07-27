const express = require('express');
const router = express.Router();
const client = require('../models/client')


//now router is established 
//now you can provide all the handles to the router
const { reset } = require('nodemon');
router.get('/', async(req,res) =>{
            
    try{
        const Client = await client.find()
        res.json(Client)
        }catch(err){
            res.send('Error' + err)
            
        }

}) // get function to get values from the server '/'  sepecifes 
                    // which file to look into when geting send from the server

                    router.get('/:id', async(req,res) =>{
            
                        try{
                            const Client = await client.findById(req.params.id)
                            res.json(Client)
                            }catch(err){
                                res.send('Error' )
                                
                            }
                    
                    }) 


 router.post('/', async(req,res) => {

        const Client = new client({
            name: req.body.name,
            tech: req.body.tech,
            sub: req.body.sub
        })

        try{
           const a =  await Client.save()
           res.json(a);
        }catch(err){
                res.send('Error  ' + err)
                console.log(err);
        }
 })

 //patch
router.patch('/:id', async(req,res)=>{
     try{
        const Client = await client.findById(req.params.id)
        Client.sub =req.body.sub
        const a =await Client.save()
        res.json(a);
     }catch(err){
        req.send("error")
     }
})

router.delete('/:id', async(req,res)=>{
    try{
       const Client = await client.findByIdAndDelete(req.params.id)
       
    //    const a =await Client.remove()
       res.json(Client);
    }catch(err){
       console.log(err)
    }
})

module.exports = router;                    