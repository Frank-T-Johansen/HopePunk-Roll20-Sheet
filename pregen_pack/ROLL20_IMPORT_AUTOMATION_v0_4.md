# Hope//Punk Roll20 Pregen Import Automation v0.4

This package adds a Roll20 Mod/API importer for the 20 premade Hope//Punk Background pregens. It does **not** include a Custom Background pregen.

## Requirements

- A Roll20 game using the public **Hope//Punk** character sheet.
- Roll20 Mod/API access for the game owner. In Roll20, Mod scripts are the automation layer that can create objects such as characters, handouts, and character attributes.

## Files

- `hopepunk_roll20_pregen_importer_v0_4.js` — paste this into Roll20's Mod/API script editor.
- `hopepunk_roll20_import_data_v0_4.json` — external/auditable copy of the embedded import data.
- `hopepunk_pregens_v0_3.json` — full source data with background, ability, skills, and gear mapping.

## Install and run

1. Create or open a Roll20 game.
2. Make sure the game uses the public **Hope//Punk** character sheet template.
3. Open the game page, then open **Settings / Mod Scripts**. Roll20 may label this as **API Scripts** in older UI wording.
4. Create a new script tab named `HopePunk Pregen Importer`.
5. Paste the full contents of `hopepunk_roll20_pregen_importer_v0_4.js`.
6. Save the script.
7. Launch the game.
8. In chat, run:

```text
!hopepunk-pregens --dry-run
```

9. If the dry run looks correct, run:

```text
!hopepunk-pregens --import
```

## Commands

```text
!hopepunk-pregens --help
!hopepunk-pregens --dry-run
!hopepunk-pregens --import
!hopepunk-pregens --overwrite
!hopepunk-pregens --characters
!hopepunk-pregens --handouts
```

`--import` creates missing characters and handouts. Existing characters/handouts with the same names are skipped.

`--overwrite` updates existing matching characters and handouts with the bundled v0.4 data. Use this only in a test/source game or after making a backup/copy.

`--characters` imports only character sheets. `--handouts` imports only player-facing handouts.

## What the importer creates

For each premade Background, the importer creates one Roll20 Character and one player-facing Handout.

Each Character gets:

- civilian name
- blank Samurai handle
- level 1
- starting credits
- Background
- Background Ability in `background_ability`, the sheet's Background Ability slot
- four Background skills
- two proficiencies
- two Level 2 skill upgrades from starting Skill Points
- mapped gear attributes where the sheet recognizes the field names
- Bio and GM Notes with a readable fallback gear list

Each character is visible to all players but controlled by nobody by default. Assign control manually after players choose pregens.

## Gear import caveat

The importer writes gear to expected static sheet attributes such as `weapon_1_name`, `armour_1_defence`, and `cyberware_1_strain`. If the live sheet's internal names differ, these invisible attributes may not display on the sheet. The gear is still preserved in the Character Bio/GM Notes and the player-facing Handout.

## Recommended test procedure

1. Create a throwaway test game using the Hope//Punk sheet.
2. Install the script.
3. Run `!hopepunk-pregens --dry-run`.
4. Run `!hopepunk-pregens --import`.
5. Open **Marcus Vale** and verify:
   - Background: Bounty Hunter
   - Background Ability is filled
   - Investigation 2 / proficient
   - Small Arms 2 / proficient
   - Drone Warfare 1
   - Demolitions 1
   - Money 15000
6. Check two or three gear-heavy sheets.
7. If everything looks correct, repeat in the clean source game intended for the module/addon.

## Regeneration note

The importer is a builder tool. Final Roll20 module/addon users should not have to run this script; the source game should already contain the generated pregens.
