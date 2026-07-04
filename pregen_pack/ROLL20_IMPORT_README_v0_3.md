# Hope//Punk Roll20 Pregen Import README v0.3

This pack contains 20 ready-to-play civilian pregenerated characters, one for each premade Hope//Punk Background. It intentionally does not include a Custom Background pregen.

## Important files

- `hopepunk_pregens_v0_3.json` — canonical full pregen data.
- `hopepunk_roll20_attributes_v0_3.json` — flat Roll20 attribute manifest for character-sheet fields.
- `hopepunk_roll20_gear_slot_manifest_v0_2.json` — gear slot-shaped manifest for weapons, armour, cyberware, consumables, and misc equipment.
- `hopepunk_sheet_attribute_map_v0_3.csv` — known sheet attribute mapping.
- `hopepunk_background_abilities_v0_3.md` — audit list of all Background abilities.
- `hopepunk_pregen_gear_mapping_v0_2.md` — readable gear mapping audit.

## Current import status

Mapped and ready for importer generation:

- Character names
- Civilian handles / aliases where useful
- Level
- Money / credits text
- Background name
- Background Ability in `background_ability`
- Skill levels
- Skill proficiencies
- Background gear, mapped to closest civilian gear where possible

Still needs final automation work:

- Create a Roll20 Mod/API importer script that reads `hopepunk_roll20_attributes_v0_3.json` and creates characters/attributes.
- Finalize exact repeating-section attribute names for gear rows if the sheet uses repeating fields.
- Optionally create one Markdown/HTML handout per pregen inside Roll20.
- Optionally attach default tokens.

## Manual import route

Use this if you do not have Roll20 Pro/API access or only want to test a few pregens.

1. Create a new Roll20 game.
2. Choose the public `Hope//Punk` character sheet.
3. Open the Journal tab.
4. Add a folder named `Pregenerated Characters`.
5. For each pregen, click `+ Character`.
6. Open the character sheet.
7. Copy the values from `hopepunk_pregens_v0_3.json` or `hopepunk_roll20_attributes_v0_3.json` into the matching sheet fields.
8. Put the ability text into the Background Ability field, not Feats.
9. Add gear from the mapped gear files.
10. Add a Bio note saying the character is a civilian pregen and can be customized before play.

Best for testing: import 2-3 pregens manually first, then verify that the sheet rolls correctly.

## Automated import route

Use this for building the actual addon/module source game.

1. Create a Roll20 game using the public `Hope//Punk` sheet.
2. Enable Mods/API for the game.
3. Add a custom importer script.
4. Paste the generated importer script.
5. Run the importer command from chat, for example `!hopepunk-pregens-import`.
6. Inspect the created characters.
7. Test several skill rolls and gear rows.
8. Once verified, use that Roll20 game as the source game for the addon/module build process.

This v0.3 pack does not yet include the final importer script. The next technical pass should generate it from the JSON manifests.

## Marketplace/addon build route

For final distribution, end users should not run JSON imports or API scripts. Instead:

1. Build a clean source game in Roll20.
2. Use the importer only as an internal build tool.
3. Verify that all 20 pregens exist in the Journal.
4. Verify that the public Hope//Punk sheet is selected.
5. Add maps, NPCs, handouts, and tokens.
6. Submit/package the prepared Roll20 game as the addon/module content.

## Known design choices

- No Custom Background pregen is included.
- The pregens begin as civilians, not Samurai.
- Samurai handles are deliberately blank or treated only as optional aliases.
- The two starting Skill Points are already spent into Background skills.
- Two proficiencies are already chosen, usually one combat/danger-facing and one non-combat/identity-facing.
- Players may swap proficiencies and move the two starting Skill Points before play.
