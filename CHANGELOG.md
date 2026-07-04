# Hope//Punk Roll20 Sheet Release Notes

## V1
- Initial release

## V2

New in V2:
- Proficiency is now a checkbox per skill.
- A proficient skill adds +1d6 to the skill roll.
- The sheet tracks Proficiencies Used and Proficiencies Allowed.
- Proficiencies Allowed = 2 + floor(LVL / 10). This means 2 at level 1, 3 at level 10, 4 at level 20, etc.
- Each skill now has two roll buttons:
  - Roll: 2d6 + Total flat modifier + proficiency d6 if checked.
  - Advantage: same roll, plus +1d4.
- The old numeric Prof. column is no longer a flat bonus; it is now a checkbox.
- Total is now the flat modifier: skill Lvl + Gear bonus.

Assumptions to verify:
- Base roll is currently 2d6 + flat modifier.
- Proficiency adds exactly +1d6.
- Advantage adds exactly +1d4.
- Skill improvement threshold is currently 5 failed-check Exp.
- Proficiency progression is interpreted as +1 at levels 10, 20, 30, etc.

## V3

New in V3:
- Skill checks now use 1d20 instead of 2d6.
- Roll: 1d20 + Total flat modifier + proficiency d6 if checked.
- Advantage: same roll, plus +1d4.
- Front-page Evasion stat is now automatically calculated as:
  Evasion = 10 + Evasion Skill Total + any direct Evasion gear bonus.
- The Evasion skill remains a separate skill row under Combat // Violence.

Assumptions to verify:
- Proficiency adds exactly +1d6.
- Advantage adds exactly +1d4.
- Skill improvement threshold is currently 5 failed-check Exp.
- Proficiency progression is interpreted as +1 at levels 10, 20, 30, etc.
- Direct Evasion gear bonuses are treated as bonuses to the front-page Evasion stat, not to the Evasion skill. Gear that improves the Evasion skill should target "Evasion" in the skill list instead.

## V4

New in V4:
- Maximum HP is now automatically calculated as:
  HP Max = 10 + Physique Skill Total + any direct HP Max gear bonus.
- Current HP is initialized to HP Max once for a new character, then left freely editable afterwards.
- Added a Spent SP Inventory repeating section.
- Each spent SP line has:
  - Value
  - Description
- Front-page SP Spent is now read-only and automatically summed from the Spent SP Inventory rows.

Notes:
- Current HP is intentionally not continuously synchronized to HP Max. This prevents recalculations from overwriting combat damage or healing.
- If an existing test character already has HP initialized from an earlier sheet version, you may need to set HP manually once.
- Direct HP Max gear bonuses should target "HP Max" in the Active Gear Bonuses table.

## V5

New in V5:
- Weapons now have a Skill dropdown.
- Weapon skill options are:
  - Small Arms
  - Big Guns
  - Blades
  - Melee Combat
- Each weapon has:
  - Attack button
  - Advantage button
- Weapon Attack rolls:
  1d20 + the selected skill's Total + the selected skill's proficiency d6 if that skill is proficient.
- Weapon Advantage rolls:
  1d20 + the selected skill's Total + the selected skill's proficiency d6 if proficient + 1d4.
- Weapon attacks also roll weapon Damage from the weapon's Damage field.
- Damage supports expressions such as:
  - 1d4+1
  - 2d6
  - 4d8+3

Notes:
- Drone Warfare is intentionally not included in the weapon dropdown yet, because drones may be better represented by separate character sheets/tokens.
- If you later want drone-mounted weapons on this same sheet, add Drone Warfare to the weaponSkillNames map and to each weapon dropdown.

## V6

New in V6:
- Removed the separate Spent SP Inventory repeating section.
- The gear "Pts" fields are now labelled "SP Cost".
- Front-page SP Spent from Gear is read-only and automatically summed from:
  - Weapon 1-2 SP Cost
  - Drone / Vehicle 1-2 SP Cost
  - Armour 1-3 SP Cost
  - Cyberware 1-3 SP Cost
- This avoids the Roll20 repeating-section issue where the extra SP inventory row disappeared after editing.

Notes:
- Consumables currently remain free-text and are not included in SP Cost totals.
- If consumables also spend SP, they need their own structured rows rather than one free-text box.

## V7

New in V7:
- Added editable Movement Speed to the front/header area.
- Each weapon now has an Effects text field.
- Weapon Attack and Weapon Advantage rolls include the weapon Effects text in the chat output.
- Example Effects text:
  - Save 12 or be stunned 1 round.
  - Target is burning until they spend an action extinguishing it.
  - Ignores 2 Damage Negation.

Note:
- Roll20's default roll template does not support true conditional display for an empty Effects field in plain sheet HTML. Empty Effects may appear as a blank row. If that becomes annoying, the next step is a custom roll template or a sheet-worker-generated roll button value.

## V8

New in V8:
- Added NPC Override checkbox.
- Added NPC HP Max field.
- HP Max calculation is now:
  - If NPC Override is unchecked:
    HP Max = 10 + Physique Skill Total + direct HP Max gear bonus.
  - If NPC Override is checked:
    HP Max = NPC HP Max.
- This supports monsters/NPCs whose saves/skills use normal skill modifiers but whose HP is statblock-defined instead of PC-derived.

Important behavior:
- Current HP is still initialized once for a new character and then left editable.
- If you check NPC Override after a character already initialized HP, set current HP manually once.
- This prevents later recalculations from overwriting combat damage/healing.

Future NPC override candidates:
- Custom Evasion
- Custom Damage Negation
- Custom SP / resource fields
- Simplified NPC attack bonus instead of skill-linked attacks
- Monster role/type fields

## V9

New in V9:
- Removed the separate front-page Armour Defence field.
- Player Damage Negation is now calculated from armour Defence values:
  Damage Negation = Armour 1 Defence + Armour 2 Defence + Armour 3 Defence + direct Damage Negation gear bonus.
- Added NPC Damage Negation override.
- If NPC Override is checked:
  - HP Max = NPC HP Max
  - Damage Negation = NPC Damage Negation
- If NPC Override is unchecked:
  - HP Max = 10 + Physique Skill Total + direct HP Max gear bonus
  - Damage Negation = summed armour Defence + direct Damage Negation gear bonus

Notes:
- The armour item fields still say Defence because that is what the physical sheet uses, but the front-page defensive stat is now Damage Negation.
- The Active Gear Bonuses dropdown no longer has Armour Defence as a target; use Damage Negation instead.

## V10

New in V10:
- NPC HP Max and NPC Damage Negation are now hidden by default.
- They only appear when the NPC Override checkbox is checked.
- This is handled with CSS show/hide behavior, so it is instant and keeps the sheet cleaner for player characters.

## V11

New in V11:
- Removed the old standalone Strain field.
- Renamed Cyber Strain to Strain and displayed it as Current / Max.
- Current Strain is calculated from the sum of all cyberware Strain fields.
- Max Strain is calculated as Cybernetics Handling total + 3.
- SP is now displayed as Current / Given, with Current manually book-kept.
- SP Spent from Gear remains calculated from gear SP Cost fields.
- Proficiencies are displayed as current / max, without redundant "Used" and "Allowed" labels.
- Added a Disadvantage button to every skill.
- Added a Disadvantage button to every weapon.
- Disadvantage subtracts 1d4 from the roll.

Strain penalties:
- Below max: no penalty.
- At max: no penalty.
- Over by 1:
  - Evasion stat -1
  - Physique rolls -1
- Over by 2:
  - Evasion stat -2
  - Physique rolls -2
  - Combat rolls for Small Arms, Big Guns, Blades, and Melee Combat suffer -1
- Over by 3+:
  - Evasion stat -3
  - Physique rolls -3
  - HP Max -2
  - All rolls automatically suffer disadvantage, implemented as -1d4

Interpretation note:
- At over by 3+, the sheet applies global -1d4 to all rolls instead of also keeping the over-by-2 combat-only -1. If you want the over-by-2 combat -1 to remain cumulative at 3+, that can be changed.

## V12

New in V12:
- Rebuilt the skill section to ensure every skill row has:
  - Roll
  - Adv.
  - Dis.
  - +Fail
- Added explicit button colors:
  - Normal rolls: neutral/gray
  - Advantage: green
  - Disadvantage: red
- Weapon buttons use the same color logic:
  - Attack: neutral/gray
  - Advantage: green
  - Disadvantage: red

## V13

New in V13:
- Added a custom Hope//Punk roll template.
- The Strain line is now conditional:
  - No strain penalty: no Strain row in chat.
  - Strain penalty exists: Strain row appears.
- Weapon Effects are also conditional:
  - Empty Effects: no Effects row.
  - Filled Effects: Effects row appears.
- Skill and weapon rolls now use &{template:hopepunk} instead of Roll20's default template.

## V14

New in V14:
- Added "Unused Skillpoints" to the top of the character sheet.
- Renamed the skill "Status" column to "Advance".
- Advance is no longer meant to look like an editable note field.
- Skill advancement readiness now uses the improvement table:
  - Level 1: 1
  - Level 2: 1
  - Level 3: 2
  - Level 4: 3
  - Level 5: 5
  - Level 6: 8
  - Level 7: 10
  - Level 8: 16
  - Level 9: 20
  - Level 10+: 20
- Per-skill XP rule:
  - 10 Exp in a skill = 1 improvement point for that skill.
  - Example: to go from level 3 to 4 costs 3 improvement points = 30 Exp in that skill.
- The Advance column shows either:
  - "Ready: X/Y pts"
  - or "N XP to next"
- Unused Skillpoints are manually book-kept and can be spent on any skill.
- Per-skill Exp remains tied only to that skill.

## V15

New in V15:
- Fixed skill row alignment so the Advance text has its own spacing.
- Added a clearer gap between +Fail and Advance.
- Made Advance behave like a compact read-only display instead of an input field.
- Kept the V14 advancement formula and all V13 roll-template behavior.

## V16

New in V16:
- Replaced "Movement Speed" with two movement fields:
  - Move
  - Fly
- The existing movement value still uses the old internal attribute name attr_movement_speed, so existing character data should carry over into Move.
- Fly is a new manual field.

## V17

New in V17:
- Move and Fly are grouped together in the same header-grid cell so they stay on the same line.
- No formula or sheet-worker changes.

## V18

New in V18:
- Added Money near the top of the character sheet, immediately after SP.
- Replaced item free-text Traits fields with four dropdown trait selectors on:
  - Drones / Vehicles
  - Weapons
  - Armour
  - Cyberware
- Each trait dropdown has an N/A option.
- The SKILL +X trait is intentionally skipped for now.
- Trait option tooltips are added through the HTML title attribute where Roll20/browser behavior supports it.
- Weapon attacks now include a conditional Traits line in the chat output.
  - No selected traits: no Traits row.
  - Selected traits: comma-separated trait names appear in the roll output.

Known limitation:
- Hover popups inside the chat roll output are not reliably supported with dynamic Roll20 attribute values, so the chat output currently displays trait names only.
- Hover descriptions on the dropdown options may depend on browser/Roll20 rendering.

## V19

New in V19:
- Added a top-of-sheet Adv/Dis selector.
- Default is 1 / d4.
- Options:
  - 1 / d4
  - 2 / d6
  - 3 / d8
  - 4 / d12
  - 5+ / d20
- All skill Advantage buttons now roll + the selected Adv/Dis die.
- All skill Disadvantage buttons now roll - the selected Adv/Dis die.
- All weapon Advantage buttons now roll + the selected Adv/Dis die.
- All weapon Disadvantage buttons now roll - the selected Adv/Dis die.
- No popup/query is used when rolling. Change the dropdown before rolling when a stronger or weaker advantage/disadvantage applies.

Notes:
- Automatic strain disadvantage still applies as -1d4, because that rule currently says "All Rolls gain Disadvantage" and we are treating that as one disadvantage.
- If later rules confirm multiple automatic disadvantages can stack, this can be expanded to calculate a final count.

## V20

New in V20:
- Advantage/Disadvantage selector still lives at the top of the sheet and uses:
  - 1 / d4
  - 2 / d6
  - 3 / d8
  - 4 / d12
  - 5+ / d20
- Manual Advantage and Disadvantage now interact correctly with automatic strain disadvantage:
  - Normal Roll button: unchanged; if excessive strain applies, it subtracts -1d4.
  - Advantage button: selected advantage count minus 1 if strain disadvantage applies.
  - Disadvantage button: selected disadvantage count plus 1 if strain disadvantage applies.
- Effective advantage/disadvantage count maps as:
  - 0 -> 0d1
  - 1 -> 1d4
  - 2 -> 1d6
  - 3 -> 1d8
  - 4 -> 1d12
  - 5+ -> 1d20
- Example:
  - Adv/Dis selector set to 1 / d4.
  - Excessive strain applies.
  - Pressing Adv. gives +0d1 / no practical bonus.
  - Pressing Dis. gives -1d6.
  - Pressing normal Roll gives -1d4.

## V21

Hope//Punk Roll20 Custom Sheet V21

New in V21:
- Fixed the Strain Status hover text.
  - It now describes strain penalties instead of skill advancement.
- Fixed the old stale "Ready to improve" logic still present inside the main recalculation worker.
  - Advance now uses the full improvement table whenever the sheet recalculates.
- Manual changes to skill Exp or Lvl should update Advance automatically.
- Clicking +Fail also forces an advancement-status recalculation to flush stale values.

Advancement formula:
- Target level 1: 10 XP
- Target level 2: 10 XP
- Target level 3: 20 XP
- Target level 4: 30 XP
- Target level 5: 50 XP
- Target level 6: 80 XP
- Target level 7: 100 XP
- Target level 8: 160 XP
- Target level 9: 200 XP
- Target level 10+: 200 XP

## V22

New in V22:
- Money field is wider and should comfortably fit at least 6 digits.
- Weapons and Armour now have an Eq. checkbox in the item header.
  - Checked = equipped.
  - Unchecked = owned/carried but not equipped.
  - Backward compatibility: old blank/missing equipped values are treated as equipped.
- Equipped Armour now controls calculated Damage Negation.
  - Unequipped Armour no longer contributes Defence/Damage Negation.
- Equipped Armour HEAVY/MEDIUM trait effects are automated:
  - HEAVY: Stealth checks -1d6, Parkour checks -1d6, top Evasion -4.
  - MEDIUM: Stealth checks -1, Parkour checks -1, top Evasion -2.
  - If both are present, HEAVY takes precedence.
- Skill roll chat output now has a conditional Armour row if an Armour penalty applies.
- Cyberware has a new free-text Part field.
  - No automatic location-overlap Strain calculation is implemented because locations can be complex.
  - Players should manually increase cyberware Strain where overlap rules apply.

## V23

New in V23:
- Added collapsible sections for:
  - Background
  - Skills
  - Active Gear Bonuses
  - Drones / Vehicles
  - Weapons
  - Armour
- The top character header remains non-collapsible.
- The bottom Other section remains non-collapsible.
- Added Modifications text fields to:
  - Weapons
  - Armour
  - Cyberware
- Modifications are free-text fields intended to describe which bought modifications are installed, which slots they use, SP cost notes, and what the modification does.

## V24

New in V24:
- Cyberware is now collapsible too.
