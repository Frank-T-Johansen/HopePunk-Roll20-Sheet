# Roll20 Background Ability Import Notes v0.3

Each pregen now has its one Background Ability placed in the correct Roll20 sheet slot.

## Correct sheet slot

The Hope//Punk Roll20 sheet uses:

- `attr_background` for the Background name.
- `attr_background_ability` for the Background Ability textarea.
- `attr_feats` for Feats & Feat Abilities.

For Roll20 API/import tooling, omit the `attr_` prefix, so the attribute to set is:

```text
background_ability
```

## Value format

The filled value is:

```text
Ability Name — Ability rules text
```

Example:

```text
The Hunt Never Ends — Once per day, declare a target. You gain +2 to all rolls that involve tracking, hunting, or hitting that one target in combat. The target does not need to be known to you; it can just be something you are hunting.
```

## Files added in this pass

- `hopepunk_pregens_v0_3.json` — full pregen data with `background_ability_roll20` added.
- `hopepunk_roll20_attributes_v0_3.json` — flat Roll20 attribute manifest, including `background_ability`.
- `hopepunk_background_abilities_v0_3.csv/json/md` — audit list of all 20 abilities.
- `hopepunk_background_ability_patch_v0_3.csv/json` — minimal patch data for setting only the Background Ability slot.
- `hopepunk_sheet_attribute_map_v0_3.csv` — updated map with both API attribute names and HTML `attr_...` field names.
