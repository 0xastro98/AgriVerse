use anchor_lang::prelude::*;

pub mod states;
use crate::states::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("5F8HYzSYBSzHKRaPkB2L2k8EVGu6kQFk4wBdF7bFAXoq");

#[program]
mod agriverse {
    use super::*;

    pub fn add_crop(
        ctx: Context<AddCrop>,
        crop_name: String,
        crop_type: String
    ) -> Result<()> {
        let crop_info = &mut ctx.accounts.crop_info;
        crop_info.owner = ctx.accounts.owner.key();
        crop_info.crop_name = crop_name;
        crop_info.crop_type = crop_type;

        Ok(())
    }

    /* 
    pub fn add_land(
        ctx: Context<AddLand>,
        _content: String

    ) -> Result<()> {
        Ok(())
    }
    */
}

#[account]
#[derive(InitSpace)]
pub struct FarmInfo {
  pub owner: Pubkey,
  #[max_len(50)]
  pub farm_name: String,
  #[max_len(50)]
  pub crop_name: String,
  #[max_len(50)]
  pub crop_type: String
}

#[derive(Accounts)]
#[instruction(farm_name: String)]
pub struct AddFarm<'info>{
    #[account(
        init_if_needed,
        seeds = [farm_name.as_bytes(), owner.key().as_ref()],
        bump,
        payer = owner,
        space = 8 + FarmInfo::INIT_SPACE
    )]
    pub farm_info: Account<'info, FarmInfo>,

    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(land_name: String, city: String, state: String)]
pub struct AddLand<'info>{
    #[account(
        init_if_needed,
        seeds = [land_name.as_bytes(), owner.key().as_ref()],
        bump,
        payer = owner,
        space = 8 + FarmInfo::INIT_SPACE
    )]
    pub land_info: Account<'info, FarmInfo>,

    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
#[instruction(crop_name: String, crop_type: String)]
pub struct AddCrop<'info> {

    #[account(
        init_if_needed,
        seeds = [crop_name.as_bytes(), owner.key().as_ref()],
        bump,
        payer = owner,
        space = 8 + FarmInfo::INIT_SPACE
    )]
    pub crop_info: Account<'info, FarmInfo>,

    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct InitializeFarmer<'info> {
    #[account(mut)]
    pub farmer: Signer<'info>,

    #[account(mut)]
    pub farmer_profile: Box<Account<'info, FarmerProfile>>,
}


