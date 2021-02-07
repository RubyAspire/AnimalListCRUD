using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalController : ControllerBase
    {
        private readonly AnimalDbContext _db;

        public AnimalController(AnimalDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public JsonResult Get()
        {
            return new JsonResult(_db.Animals);
        }

        [HttpGet("{id}")]
        public JsonResult GetDetails(int id)
        {
            return new JsonResult(_db.Animals.FirstOrDefault(animal => animal.Id == id));
        }


        [HttpPost]
        public JsonResult Post(Animal animal)
        {
            _db.Animals.Add(animal);
            _db.SaveChanges();
            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Animal animal)
        {
            _db.Animals.Update(animal);
            _db.SaveChanges();

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var animal = _db.Animals.FirstOrDefault(animal => animal.Id == id);
            _db.Remove(animal);
            _db.SaveChanges();

            return new JsonResult("Deleted Successfully");
        }
    }
}
