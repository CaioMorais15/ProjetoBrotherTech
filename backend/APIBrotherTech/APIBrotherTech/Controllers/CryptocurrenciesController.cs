using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIBrotherTech.Data;
using APIBrotherTech.Models;

namespace APIBrotherTech.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CryptocurrenciesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CryptocurrenciesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Cryptocurrencies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cryptocurrency>>> GetCriptoMoedas()
        {
            return await _context.CriptoMoedas.ToListAsync();
        }

        // GET: api/Cryptocurrencies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cryptocurrency>> GetCryptocurrency(long id)
        {
            var cryptocurrency = await _context.CriptoMoedas.FindAsync(id);

            if (cryptocurrency == null)
            {
                return NotFound();
            }

            return cryptocurrency;
        }

        // PUT: api/Cryptocurrencies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCryptocurrency(long id, Cryptocurrency cryptocurrency)
        {
            if (id != cryptocurrency.CryptocurrencyId)
            {
                return BadRequest();
            }

            _context.Entry(cryptocurrency).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CryptocurrencyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cryptocurrencies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cryptocurrency>> PostCryptocurrency(Cryptocurrency cryptocurrency)
        {
            _context.CriptoMoedas.Add(cryptocurrency);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCryptocurrency", new { id = cryptocurrency.CryptocurrencyId }, cryptocurrency);
        }

        // DELETE: api/Cryptocurrencies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCryptocurrency(long id)
        {
            var cryptocurrency = await _context.CriptoMoedas.FindAsync(id);
            if (cryptocurrency == null)
            {
                return NotFound();
            }

            _context.CriptoMoedas.Remove(cryptocurrency);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CryptocurrencyExists(long id)
        {
            return _context.CriptoMoedas.Any(e => e.CryptocurrencyId == id);
        }
    }
}
