# Hope//Punk Roll20 import automation v0.5

v0.5 fixes the weapon import issue found in v0.4:

- Weapon skill select fields now receive Roll20's internal select values: `small_arms`, `big_guns`, `blades`, `melee_combat`.
- Weapon display/helper fields like `weapon_1_skill_name` are also set.
- Weapon traits are now populated into `weapon_N_trait_1` through `weapon_N_trait_4` instead of being left only in the Effects box.
- Effects now contains only leftover rules text not represented by trait selects. For the current pregens, most weapon effects are now blank because they were actually traits.

## Full import

Use this when starting from a clean source game or when you are fine overwriting the existing pregen characters:

1. Roll20 game → Settings → Mod Scripts / API Scripts.
2. Paste `hopepunk_roll20_pregen_importer_v0_5.js`.
3. Save.
4. In game chat, run:

```text
!hopepunk-pregens --dry-run
!hopepunk-pregens --import
```

To update existing pregens in-place:

```text
!hopepunk-pregens --overwrite
```

## Patch-only import

Use this if you already imported v0.4 and only want to fix weapon skills/traits:

1. Add `hopepunk_roll20_weapon_skill_trait_patch_v0_5.js` as a temporary Mod/API script.
2. Run:

```text
!hopepunk-pregens-weapon-patch
```

You can remove the patch script after it reports success.

## Verification point

Corporate Security / Adrian Holt should now show:

- `Aged Police-Issue Shotgun` skill: **Big Guns**
- traits: **KNOCKBACK**, **NON-LETHAL**

