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
    public class InvestmentTipsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public InvestmentTipsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/InvestmentTips
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InvestmentTip>>> GetDicasInvest()
        {
            return await _context.DicasInvest.ToListAsync();
        }

        // GET: api/InvestmentTips/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InvestmentTip>> GetInvestmentTip(long id)
        {
            var investmentTip = await _context.DicasInvest.FindAsync(id);

            if (investmentTip == null)
            {
                return NotFound();
            }

            return investmentTip;
        }

        // PUT: api/InvestmentTips/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvestmentTip(long id, InvestmentTip investmentTip)
        {
            if (id != investmentTip.InvestmentTipId)
            {
                return BadRequest();
            }

            _context.Entry(investmentTip).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvestmentTipExists(id))
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

        // POST: api/InvestmentTips
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InvestmentTip>> PostInvestmentTip(InvestmentTip investmentTip)
        {
            _context.DicasInvest.Add(investmentTip);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInvestmentTip", new { id = investmentTip.InvestmentTipId }, investmentTip);
        }

        // DELETE: api/InvestmentTips/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvestmentTip(long id)
        {
            var investmentTip = await _context.DicasInvest.FindAsync(id);
            if (investmentTip == null)
            {
                return NotFound();
            }

            _context.DicasInvest.Remove(investmentTip);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InvestmentTipExists(long id)
        {
            return _context.DicasInvest.Any(e => e.InvestmentTipId == id);
        }
    }
}
