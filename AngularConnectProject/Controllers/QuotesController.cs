using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using AngularConnectProject;

namespace AngularConnectProject.Controllers
{
    [Authorize]
    public class QuotesController : ApiController
    {
        private FullStackEntities1 db = new FullStackEntities1();

        // GET: api/Quotes
        [HttpGet]
        public IQueryable<Quote> GetQuotes()
        {
            return db.Quotes;
        }

        // GET: api/Quotes/5
        [ResponseType(typeof(Quote))]
        public IHttpActionResult GetQuote(int id)
        {
            Quote quote = db.Quotes.Find(id);
            if (quote == null)
            {
                return NotFound();
            }

            return Ok(quote);
        }

        // PUT: api/Quotes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutQuote(int id, Quote quote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != quote.QuoteId)
            {
                return BadRequest();
            }

            db.Entry(quote).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuoteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Quotes
        [ResponseType(typeof(Quote))]
        public IHttpActionResult PostQuote(Quote quote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Quotes.Add(quote);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (QuoteExists(quote.QuoteId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = quote.QuoteId }, quote);
        }

        // DELETE: api/Quotes/5
        [ResponseType(typeof(Quote))]
        public IHttpActionResult DeleteQuote(int id)
        {
            Quote quote = db.Quotes.Find(id);
            if (quote == null)
            {
                return NotFound();
            }

            db.Quotes.Remove(quote);
            db.SaveChanges();

            return Ok(quote);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool QuoteExists(int id)
        {
            return db.Quotes.Count(e => e.QuoteId == id) > 0;
        }
    }
}