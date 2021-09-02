const express = require("express");
const app = express();
const bodyParser = require ("body-parser");
const { urlencoded } = require("body-parser");

app.use (bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());

var DB = {
    moto: [

{
    "id":66,
    "modelo":"Xt660",
    "ano":2000
},
{
    "id":50,
    "modelo":"Hornet",
    "ano":2003
    },
    {
        "id":60,
        "modelo":"XJ6",
        "ano":2020
        },
        {
            "id":88,
            "modelo":"z650",
            "ano":2018
        },
    ],
    motor: [
        {
            "id":1,
            "cilindrada": 500,
            "marca":"yahama"
        },
        {
            "id":2,
            "cilindrada": 650,
            "marca":"kawazaki"
        },
        {
            "id":3,
            "cilindrada": 1000,
            "marca":"honda"
        },
        {
            "id":4,
            "cilindrada": 1100,
            "marca":"suzuki"
        },
        {
            "id":5,
            "cilindrada":1200,
            "marca":"bmw"
        },
       
    ],
    carro: [
        {
            "id":1,
            "marca": "honda",
            "ano":2010
        },
        {
            "id":2,
            "marca": "bmw",
            "ano":2000
        },

    ]


}





app.get("/moto",(req , res)=>{
    res.statusCode = 200;
res.json(DB.moto);
                                                                                                                                                                                                     });

app.get("/moto/:id",(req , res)=>{

if(isNaN(req.params.id)){
    res.sendStatus(400)
}else{
   var id = parseInt(req.params.id);

   var moto = DB.moto.find(g =>g.id == id);


   if(moto !=undefined){
       res.json(moto);
   }else{
       res.sendStatus(404);
   }

} 

});

 app.post("/moto",(req,res)=>{
    var {modelo,ano} = req.body;
    var ultimoId = DB.moto[DB.moto.length -1].id +1;
    

    DB.moto.push({
    
    id:ultimoId,
    modelo,
    ano,    

    


});

res.sendStatus(200);
})

app.delete("/moto/:id",(req,res)=>{

    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
       var id = parseInt(req.params.id);
    
       var index = DB.moto.findIndex(g => g.id == id);
       if (index == -1){
           res.sendStatus(404)
           
       }else{DB.moto.splice(index,1);
res.sendStatus(200);
       }
    
    }
    })

app.put("/moto/:id",(req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
       var id = parseInt(req.params.id);
    
       var moto = DB.moto.find(g =>g.id == id);
    
    
       if(moto != undefined){
       
        var {modelo,ano} = req.body;
       

       
        if(modelo != undefined){
            moto.modelo = modelo;
        }

        if(moto != undefined){
           moto.ano = ano;
        }
        res.sendStatus(200);






       }else{
           res.sendStatus(404);
       }
    
    }

});



app.get("/motor",(req,res)=>{
    res.statusCode = 200;
    res.json(DB.motor);
})



app.get("/motor/:id",(req , res)=>{

    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
       var id = parseInt(req.params.id);
    
       var motor = DB.motor.find(g =>g.id == id);
    
    
       if(motor !=undefined){
           res.json(motor);
       }else{
           res.sendStatus(404);
       }
    
    }
    
    });
    
    app.post("/motor",(req,res)=>{
      
        var {cilindrada,marca} = req.body;
    var ultimoId = DB.motor[DB.motor.length-1].id+1;
    
    
      
    
     DB.motor.push({
       
        id:ultimoId,
       cilindrada,    
    marca
    
    });
    
    res.sendStatus(200);
    })
    
    app.delete("/motor/:id",(req,res)=>{
    
        if(isNaN(req.params.id)){
            res.sendStatus(400)
        }else{
           var id = parseInt(req.params.id);
        
           var index = DB.motor.findIndex(g => g.id == id);
           if (index == -1){
               res.sendStatus(404)
               
           }else{DB.motor.splice(index,1);
    res.sendStatus(200);
           }
        
        }
        })
    
    app.put("/motor/:id",(req, res) => {
    
        if(isNaN(req.params.id)){
            res.sendStatus(400)
        }else{
           var id = parseInt(req.params.id);
        
           var motor = DB.motor.find(g =>g.id == id);
        
        
           if(motor != undefined){
           
            var {cilindrada,marca} = req.body;
           
    
           
            if(cilindrada!= undefined){
                motor.cilindrada = cilindrada;
            }
    
            if(motor != undefined){
               motor.marca = marca;
            }
            res.sendStatus(200);
    
    
    
    
    
    
           }else{
               res.sendStatus(404);
           }
        
        }
    
    });







    app.get("/carro",(req,res)=>{
        res.statusCode = 200;
        res.json(DB.carro);
    })
    
    
    
    app.get("/carro/:id",(req , res)=>{
    
        if(isNaN(req.params.id)){
            res.sendStatus(400)
        }else{
           var id = parseInt(req.params.id);
        
           var carro = DB.carro.find(g =>g.id == id);
        
        
           if(carro !=undefined){
               res.json(carro);
           }else{
               res.sendStatus(404);
           }
        
        }
        
        });
        
        app.post("/carro",(req,res)=>{
          
            var {marca,ano} = req.body;
        var ultimoId = DB.carro[DB.carro.length-1].id+1;
        
        
          
        
         DB.carro.push({
           
            id:ultimoId,
           marca,    
        ano
        
        });
        
        res.sendStatus(200);
        })
        
        app.delete("/carro/:id",(req,res)=>{
        
            if(isNaN(req.params.id)){
                res.sendStatus(400)
            }else{
               var id = parseInt(req.params.id);
            
               var index = DB.carro.findIndex(g => g.id == id);
               if (index == -1){
                   res.sendStatus(404)
                   
               }else{DB.carro.splice(index,1);
        res.sendStatus(200);
               }
            
            }
            })
        
        app.put("/carro/:id",(req, res) => {
        
            if(isNaN(req.params.id)){
                res.sendStatus(400)
            }else{
               var id = parseInt(req.params.id);
            
               var carro = DB.carro.find(g =>g.id == id);
            
            
               if(carro != undefined){
               
                var {marca,ano} = req.body;
               
        
               
                if(carro!= undefined){
                    carro.marca = marca;
                }
        
                if(carro != undefined){
                   carro.ano = ano;
                }
                res.sendStatus(200);
        
        
        
        
        
        
               }else{
                   res.sendStatus(404);
               }
            
            }
        
        });
    




























app.listen(9090,()=>{
    console.log ("api rodando");
  
});