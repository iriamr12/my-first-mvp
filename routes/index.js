var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Hello World' });
});

//GET CITIZENS LIST
// router.get('/', async function (req,res){
//     try{
//         const citizens = await models.Citizen.findAll();
//         res.send(citizens);
// }catch(err){
//     res.status(500).send(error);
// }
// });

router.get("/", function(req, res, next){
  db("SELECT * FROM citizens;")
  .then(results => {
      res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

// GET one citizen
router.get("/:id", async function(req, res, next) {
  const citizensId = req.params.id;
  try{
    let result = await db(`SELECT * FROM citizens WHERE id = ${citizensId}`);
    if(result.data.length === 1){
      res.send(result.data[0]);
    }
    else{ 
      res.status(404).send({error: "Citizen not found!"})
    }

  }catch(error){
    res.status(500).send({error: error.message})

  }

});

// INSERT a new student into the DB
router.post("/", async function(req, res, next) {
  let {firstname, lastname} = req.body;
  let sql = `INSERT INTO citizens (firstname, lastname)
              VALUES ('${firstname}', '${lastname}')`;

  try{
    //insert the new student into the db
    await db(sql);
    let result = await db("SELECT * FROM citizens");
    res.status(201).send(result.data)

  }catch(error){
    res.status(500).send({error: error.message})
  }

});

// DELETE a student from the DB
router.delete("/:id", async (req, res, next) => {
  const citizensId = req.params.id;
  try{
    let result = await db(`SELECT * FROM citizens WHERE id = ${citizensId}`);
    if(result.data.length === 1){
      //student exists
      await db(`DELETE FROM citizens WHERE id = ${citizensId}`);
      result = await db("SELECT * FROM citizens")
      res.send(result.data);
    }
    else{ //student not found
      res.status(404).send({error: "Citizen not found!"})
    }

  }catch(error){
    res.status(500).send({error: error.message})

  }

});

module.exports = router;





module.exports = router;
